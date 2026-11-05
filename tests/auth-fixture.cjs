module.exports = async function authenticate(page) {
  const user = {id:'security-admin',email:'admin@example.test',firstName:'Ada',lastName:'Lovelace',role:'admin',avatars:[],disabled:false};
  const token = 'eyJhbGciOiJIUzI1NiJ9.'+Buffer.from(JSON.stringify({user,exp:2000000000})).toString('base64url')+'.test';
  await page.addInitScript(({token,user}) => {if(window!==window.top) return; localStorage.setItem('token',token);localStorage.setItem('user',JSON.stringify({user}));}, {token,user});
  await page.route('**/api/auth/me', route => route.fulfill({json:user}));
};
