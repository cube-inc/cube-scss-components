const voidElements = [
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
const blockElements = [
  'p',
  'a',
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'ol', 'ul', 'li',
  'pre',
  'address',
  'blockquote',
  'dl',
  'div',
  'fieldset',
  'form', 'textarea', 'select', 'option',
  'hr',
  'noscript',
  'table',
  'header', 'main', 'footer',
  'button', 'label', 'input',
  'table', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td',
  'svg'
]

export default function vnodesToString (vnodes) {
  return vnodes
    .map(vnode => {
      const html = vnodeToString(vnode)
      return isBlockElement(vnode)
        ? `${html}\n`
        : html
    })
    .join('')
}

function isTag (vnode) {
  return Boolean(vnode.tag)
}

function isPreTag (vnode) {
  return ['pre', 'code'].indexOf(vnode.tag) > -1
}

function isVoidElement (vnode) {
  return voidElements.indexOf(vnode.tag) > -1
}

function isBlockElement (vnode) {
  return blockElements.indexOf(vnode.tag) > -1
}

function indent (level, string = '') {
  return '  '.repeat(level) + string
}

function vnodeToString (vnode, level = 0) {
  if (isTag(vnode)) {
    return tagNodeToString(vnode, level)
  }
  return textNodeToString(vnode)
}

function tagNodeToString (vnode, level = 0) {
  const { tag } = vnode
  if (tag === 'br') {
    return '<br>\n'
  }
  const classString = staticClassToString(vnode)
  const attrs = attrsToString(vnode)
  const children = childrenToString(vnode, level)
  if (isVoidElement(vnode)) {
    return `<${tag}${classString}${attrs}>`
  }
  return `<${tag}${classString}${attrs}>${children}</${tag}>`
}

function staticClassToString (vnode) {
  const { staticClass } = vnode.data || {}
  if (staticClass) {
    return ` class="${staticClass}"`
  }
  return ''
}

function attrsToString (vnode) {
  const { attrs } = vnode.data || { attrs: {} }
  if (attrs) {
    return Object.keys(attrs)
      .map(key => {
        const value = ['src', 'href'].indexOf(key) > -1 ? '…' : attrs[key]
        return ` ${key}${value ? `="${value}"` : ''}`
      })
      .join('')
  }
  return ''
}

function childrenToString (vnode, level = 0) {
  const { children } = vnode
  if (children instanceof Array && children.length > 0) {
    if (isPreTag(vnode)) {
      return vnode.elm.innerHTML
    }
    if (children.some(child => isBlockElement(child))) {
      return '\n' + children
        .map(child => {
          return indent(level + 1) +
          (isTag(child)
            ? tagNodeToString(child, level + 1)
            : textNodeToString(child, true)) +
          '\n'
        })
        .join('') +
        indent(level)
    }
    return children
      .map(child => vnodeToString(child, level + 1))
      .join('')
  }
  return ''
}

function textNodeToString (vnode, trim = false) {
  const string = trim
    ? vnode.text.trim()
    : vnode.text.replace(/\s+/g, ' ')
  return escapeHtml(string)
}

function escapeHtml (text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
