export function safeEditorUrl(value, kind) {
  if (!URL.canParse(value)) {
    return false;
  }
  const url = new URL(value);
  if (kind === 'embed') {
    return url.protocol === 'https:' && !url.username && !url.password;
  }
  if (kind === 'image') {
    return url.protocol === 'https:' || url.protocol === 'http:';
  }
  return ['https:', 'http:', 'mailto:', 'tel:'].includes(url.protocol);
}
