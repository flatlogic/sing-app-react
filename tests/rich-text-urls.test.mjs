import { test } from 'node:test';
import assert from 'node:assert/strict';
import { safeEditorUrl } from '../src/components/RichTextEditor/urls.mjs';

test('editor URL boundaries reject executable schemes and restrict embeds to credential-free HTTPS', () => {
  for (const value of ['javascript:alert(1)', 'JavaScript:alert(1)', 'data:text/html,<script>alert(1)</script>', '//example.test', 'not a URL']) {
    for (const kind of ['link', 'image', 'embed']) assert.equal(safeEditorUrl(value, kind), false);
  }
  assert.equal(safeEditorUrl('https://example.test/embed', 'embed'), true);
  assert.equal(safeEditorUrl('http://example.test/embed', 'embed'), false);
  assert.equal(safeEditorUrl('https://user:password@example.test/embed', 'embed'), false);
  assert.equal(safeEditorUrl('https://example.test/image.png', 'image'), true);
  assert.equal(safeEditorUrl('mailto:user@example.test', 'link'), true);
  assert.equal(safeEditorUrl('tel:+15551234567', 'link'), true);
  assert.equal(safeEditorUrl('mailto:user@example.test', 'image'), false);
});
