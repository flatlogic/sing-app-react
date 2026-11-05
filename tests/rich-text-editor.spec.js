const { test, expect } = require('@playwright/test');
const authenticate = require('./auth-fixture.cjs');

test('rich text toolbar preserves formatting and rejects unsafe links, images and embeds', async ({ page, context }) => {
  test.setTimeout(120000);
  const errors = [];
  page.on('pageerror', error => { errors.push(error.message); console.error(error); });
  await authenticate(page);
  await page.route('https://media.example.test/**', route => route.fulfill(route.request().url().endsWith('/embed')
    ? { contentType: 'text/html', body: '<!doctype html><h1>Embedded test</h1>' }
    : { contentType: 'image/svg+xml', body: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="20"><rect width="40" height="20" fill="blue"/></svg>' }));
  await page.goto('./#/app/forms/elements');
  const editor = page.getByRole('textbox', { name: 'Rich text editor', exact: true });
  const toolbar = page.getByRole('toolbar', { name: 'Rich text formatting' });
  await editor.fill('Formatting regression');
  await editor.press('ControlOrMeta+A');
  await toolbar.getByRole('button', { name: 'Bold', exact: true }).click();
  await expect(editor.locator('strong')).toHaveText('Formatting regression');
  await toolbar.getByLabel('Font size', { exact: true }).selectOption('24px');
  await toolbar.getByLabel('Font family', { exact: true }).selectOption('Georgia');
  await toolbar.getByLabel('Text alignment').selectOption('center');
  await expect(editor.locator('p')).toHaveCSS('text-align', 'center');
  await expect(editor.locator('span').first()).toHaveCSS('font-size', '24px');
  await toolbar.getByRole('button', { name: 'Add link', exact: true }).click();
  await page.getByLabel('URL', { exact: true }).fill('https://example.test/docs');
  await page.getByRole('button', { name: 'Insert link', exact: true }).click();
  await expect(editor.locator('a')).toHaveAttribute('href', 'https://example.test/docs');
  await editor.press('ArrowRight');
  await editor.press('Enter');
  await toolbar.getByRole('button', { name: 'Insert image', exact: true }).click();
  await page.getByLabel('URL', { exact: true }).fill('https://media.example.test/image.svg');
  await page.getByLabel('Alternative text', { exact: true }).fill('Regression image');
  await page.getByRole('button', { name: 'Insert image', exact: true }).last().click();
  await expect(editor.getByRole('img', { name: 'Regression image' })).toBeVisible();
  await toolbar.getByRole('button', { name: 'Insert embed', exact: true }).click();
  await page.getByLabel('URL', { exact: true }).fill('https://media.example.test/embed');
  await page.getByRole('button', { name: 'Insert embed', exact: true }).last().click();
  await expect(editor.locator('iframe')).toHaveAttribute('src', 'https://media.example.test/embed');
  await expect(editor.locator('iframe')).toHaveAttribute('sandbox', 'allow-scripts allow-presentation');
  await expect(editor.locator('iframe')).not.toHaveAttribute('sandbox', /allow-same-origin/);
  await expect(page.frameLocator('iframe[title="Embedded content"]').getByText('Embedded test')).toBeVisible();

  for (const kind of ['link', 'image', 'embed']) {
    await toolbar.getByRole('button', { name: kind === 'link' ? 'Add link' : `Insert ${kind}`, exact: true }).click();
    await page.getByLabel('URL', { exact: true }).fill('javascript:window.__editorUnsafe = true');
    await page.getByRole('button', { name: `Insert ${kind}`, exact: true }).last().click();
    await expect(page.getByRole('alert').filter({ hasText: 'Enter' })).toBeVisible();
    await page.getByRole('group', { name: `${kind} options`, exact: true }).getByRole('button', { name: 'Cancel', exact: true }).click();
  }
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  await page.evaluate(async () => {
    const html = '<p>Pasted safe text</p><a href="javascript:window.__editorUnsafe=true">Unsafe link</a><img src="javascript:window.__editorUnsafe=true" onerror="window.__editorUnsafe=true"><iframe src="javascript:window.__editorUnsafe=true"></iframe><script>window.__editorUnsafe=true</script>';
    await navigator.clipboard.write([new ClipboardItem({ 'text/html': new Blob([html], { type: 'text/html' }), 'text/plain': new Blob(['Pasted safe text'], { type: 'text/plain' }) })]);
  });
  // Paste into text, rather than replacing the selected embed atom.
  await editor.locator('p').last().click();
  await editor.press('ControlOrMeta+V');
  await expect(editor).toContainText('Pasted safe text');
  await expect(editor.locator('[href^="javascript:"], [src^="javascript:"], [onerror], script')).toHaveCount(0);
  expect(await page.evaluate(() => window.__editorUnsafe)).toBeUndefined();
  await expect(editor.locator('iframe')).toHaveCount(1);
  await page.screenshot({ path: 'test-results/rich-text-editor.png', fullPage: false });
  expect(errors).toEqual([]);
});

test('email compose and library documentation mount the same editor', async ({ page }) => {
  const errors = [];
  page.on('pageerror', error => { errors.push(error.message); console.error(error); });
  await authenticate(page);
  await page.goto('./#/app/inbox');
  await page.getByText('Compose', { exact: true }).first().click();
  await page.getByRole('textbox', { name: 'Rich text editor', exact: true }).fill('Email editor regression');
  await expect(page.getByRole('textbox', { name: 'Rich text editor', exact: true })).toContainText('Email editor regression');
  await page.goto('./#/documentation/libs');
  await expect(page.getByRole('textbox', { name: 'Rich text editor', exact: true })).toBeVisible();
  expect(errors).toEqual([]);
});
