export function escapeHtml(string) {
  return string.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export const voidElements = [
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'keygen',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr'
]
export const blockElements = [
  'p',
  'a',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'ol',
  'ul',
  'li',
  'pre',
  'address',
  'blockquote',
  'dl',
  'div',
  'fieldset',
  'form',
  'textarea',
  'select',
  'option',
  'hr',
  'noscript',
  'table',
  'header',
  'main',
  'footer',
  'button',
  'label',
  'input',
  'table',
  'thead',
  'tbody',
  'tfoot',
  'tr',
  'th',
  'td'
]
export const complexElements = ['svg']
export const hiddenAttrs = ['xmlns', 'viewBox']
