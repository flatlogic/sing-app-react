const {test,expect}=require('@playwright/test');
const authenticate=require('./auth-fixture.cjs');
function recordErrors(page){const errors=[];page.on('pageerror',e=>{console.error(e);errors.push(e.message)});return errors;}
test('dashboard, updated chart engines and calendar render real plots',async({page})=>{
 const errors=recordErrors(page);await authenticate(page);
 await page.goto('./#/app/main/dashboard');
 await expect(page.locator('.rickshaw_graph svg').first()).toBeVisible();
 for(const [route,plot] of [
  ['charts/overview','.apexcharts-svg'],['charts/echarts','canvas'],
  ['charts/highcharts','.highcharts-series path'],['extra/calendar','.fc-daygrid-day']
 ]){
  await page.goto('./#/app/'+route);await expect(page.locator(plot).first()).toBeVisible();
 }
 expect(errors).toEqual([]);
});
test('updated tables preserve search, sorting, pagination and tree expansion',async({page})=>{
 const errors=recordErrors(page);await authenticate(page);
 await page.goto('./#/app/tables/dynamic');
 const table=page.locator('.react-bootstrap-table');
 await expect(table.locator('tbody tr')).toHaveCount(10);
 const name=await table.locator('tbody tr').first().locator('td').nth(1).innerText();
 await page.getByLabel('Search sample rows').fill(name);
 await expect(table.locator('tbody tr')).toHaveCount(1);
 await page.getByLabel('Search sample rows').fill('');
 await table.getByRole('columnheader',{name:/^Name/}).click();
 const descending=await table.locator('tbody td:nth-child(2)').allTextContents();
 expect(descending).toEqual([...descending].sort((a,b)=>b.localeCompare(a)));
 await table.getByRole('columnheader',{name:/^Name/}).click();
 const ascending=await table.locator('tbody td:nth-child(2)').allTextContents();
 expect(ascending).toEqual([...ascending].sort((a,b)=>a.localeCompare(b)));
 await page.getByRole('link',{name:'2',exact:true}).first().click();
 await expect(table.locator('tbody tr').first()).not.toContainText(ascending[0]);
 await page.goto('./#/app/ui/list-groups');
 const tree=page.locator('.rst__tree').first();
 await expect(tree.locator('.rst__rowTitle').first()).toBeVisible();
 const before=await tree.locator('.rst__rowTitle').count();
 await tree.locator('.rst__collapseButton').first().click();
 await expect.poll(()=>tree.locator('.rst__rowTitle').count()).toBeLessThan(before);
 await tree.locator('.rst__expandButton').first().click();
 await expect(tree.locator('.rst__rowTitle')).toHaveCount(before);
 expect(errors).toEqual([]);
});
test('Markdown preview stays styled and safe, date and time pickers remain usable',async({page})=>{
 const errors=recordErrors(page);await authenticate(page);
 await page.goto('./#/app/forms/elements');
 await expect(page.locator('.mde-header')).toHaveCSS('display','flex');
 await page.locator('.mde-text').fill('# Safe preview\n\n**Bold**\n\n| A | B |\n|---|---|\n| 1 | 2 |\n\n- [x] Task\n\n<img src="data:image/png;base64,invalid" onerror="window.unsafeMarkdown=true"><script>window.unsafeMarkdown=true</script>');
 await page.getByRole('button',{name:'Preview',exact:true}).click();
 await expect(page.locator('.mde-preview h1')).toHaveText('Safe preview');
 await expect(page.locator('.mde-preview strong')).toHaveText('Bold');
 await expect(page.locator('.mde-preview table')).toBeVisible();
 await expect(page.locator('.mde-preview input[type=checkbox]')).toBeChecked();
 await expect(page.locator('.mde-preview script,.mde-preview [onerror]')).toHaveCount(0);
 expect(await page.evaluate(()=>window.unsafeMarkdown)).toBeUndefined();
 const date=page.locator('.datepicker').first();await date.locator('input').click();
 await expect(date.locator('.rdtDays')).toBeVisible();
 await date.locator('td.rdtDay:not(.rdtOld):not(.rdtNew)').first().click();
 await expect(date.locator('input')).toHaveValue(/\d/);
 const time=page.locator('.datepicker').nth(1);await time.locator('input').click();
 await expect(time.locator('.rdtTime')).toBeVisible();
 await time.locator('input').fill('2:30 PM');await time.locator('input').press('Tab');
 await expect(time.locator('input')).toHaveValue('2:30 PM');
 await page.screenshot({path:'test-results/markdown.png',fullPage:false});
 expect(errors).toEqual([]);
});
test('Formik user edit sends the edited values and navigation/logout remain usable',async({page})=>{
 const errors=recordErrors(page);await authenticate(page);
 let user={id:'security-user',email:'admin@example.test',firstName:'Ada',lastName:'Lovelace',phoneNumber:'5551234567',role:'admin',disabled:false,avatar:[],avatars:[]};
 const writes=[];
 await page.route(url=>url.pathname.startsWith('/api/users'),async route=>{
  const request=route.request();const pathname=new URL(request.url()).pathname;
  if(pathname==='/api/users')await route.fulfill({json:{rows:[user],count:1}});
  else if(pathname==='/api/users/security-user'){
   if(request.method()==='PUT'){writes.push(request.postDataJSON());user={...user,...request.postDataJSON().data};}
   await route.fulfill({json:user});
  }else throw new Error('Unexpected user request: '+pathname);
 });
 await page.goto('./#/admin/users');
 await expect(page.getByRole('table')).toContainText(user.email);
 await page.getByLabel('Search users').fill('Ada');
 await page.getByRole('button',{name:'Edit',exact:true}).click();
 await expect(page.getByRole('textbox',{name:'First Name',exact:true})).toHaveValue('Ada');
 await page.getByRole('textbox',{name:'First Name',exact:true}).fill('Grace');
 await page.getByRole('button',{name:'Save',exact:true}).click();
 await expect.poll(()=>writes.length).toBe(1);
 expect(writes[0].data.firstName).toBe('Grace');
 await page.waitForURL(/#\/admin\/users$/);
 await page.goBack();await page.goForward();
 await expect(page.getByRole('table')).toContainText('Grace');
 await page.locator('.tutorial-dropdown a').first().click();
 await page.getByText('Log Out',{exact:true}).click();
 await page.waitForURL(/#\/login$/);
 expect(await page.evaluate(()=>localStorage.getItem('token'))).toBeNull();
 expect(errors).toEqual([]);
});
test('product management preserves search, page, edit and delete actions',async({page})=>{
 const errors=recordErrors(page);await authenticate(page);
 const image='data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="20" height="20"%3E%3Crect width="20" height="20" fill="blue"/%3E%3C/svg%3E';
 let products=Array.from({length:12},(_,i)=>({id:i+1,img:image,title:'fixture '+String.fromCharCode(65+i),subtitle:'Fixture product',price:20,rating:4,discount:0,description_1:'First description',description_2:'Second description',code:123,hashtag:'fixture',technology:[],createdAt:'2026-11-05',updatedAt:'2026-11-05'}));
 const writes=[];
 await page.route(url=>url.pathname.startsWith('/api/products'),async route=>{
  const request=route.request(),pathname=new URL(request.url()).pathname;
  if(pathname==='/api/products')await route.fulfill({json:products});
  else if(pathname==='/api/products/images-list')await route.fulfill({json:[image]});
  else if(pathname==='/api/products/1'){
   if(request.method()==='PUT'){writes.push({method:'PUT',body:request.postDataJSON()});products[0]={...products[0],...request.postDataJSON()};}
   if(request.method()==='DELETE'){writes.push({method:'DELETE'});products=products.filter(p=>p.id!==1);}
   await route.fulfill({json:products.find(p=>p.id===1)||{}});
  }else throw new Error('Unexpected product request: '+pathname);
 });
 await page.goto('./#/app/ecommerce/management');
 const table=page.locator('.react-bootstrap-table');
 await expect(table.locator('tbody tr')).toHaveCount(10);
 await page.getByRole('link',{name:'2',exact:true}).first().click();
 await expect(table.locator('tbody tr')).toHaveCount(2);
 await page.getByLabel('Search products').fill('fixture A');
 await expect(table.locator('tbody tr')).toHaveCount(1);
 await table.getByRole('button',{name:'Edit',exact:true}).click();
 await expect(page.locator('#productTitle')).toHaveValue('fixture A');
 await page.locator('#productTitle').fill('updated fixture');
 await page.getByRole('button',{name:'Save',exact:true}).click();
 await expect.poll(()=>writes.length).toBe(1);
 expect(writes[0].body.title).toBe('updated fixture');
 await page.goBack();
 await expect(table).toContainText('Updated fixture');
 await page.getByLabel('Search products').fill('updated fixture');
 await page.locator('#popoverDelete_1').click();
 await page.getByRole('button',{name:'Yes',exact:true}).click();
 await expect.poll(()=>writes.filter(w=>w.method==='DELETE').length).toBe(1);
 await expect(table).not.toContainText('Updated fixture');
 expect(errors).toEqual([]);
});
