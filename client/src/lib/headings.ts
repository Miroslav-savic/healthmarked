export function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export function injectHeadingIds(html: string): string {
  return html.replace(/<(h[23])([^>]*)>(.*?)<\/\1>/gi, (_, tag, attrs, inner) => {
    if (/id=/.test(attrs)) return _;
    const text = inner.replace(/<[^>]+>/g, '').trim();
    const id = slugify(text);
    return `<${tag}${attrs} id="${id}">${inner}</${tag}>`;
  });
}
