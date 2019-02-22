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
  'form',
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
      return isBlockElements(vnode)
        ? `${html}\n`
        : html
    })
    .join('')
}

function isTag (vnode) {
  return Boolean(vnode.tag)
}

function isVoidElement (vnode) {
  return voidElements.indexOf(vnode.tag) > -1
}

function isBlockElements (vnode) {
  return blockElements.indexOf(vnode.tag) > -1
}

function isSelfClosing (vnode) {
  return blockElements.indexOf(vnode.tag) === -1 &&
    voidElements.indexOf(vnode.tag) === -1
}

function indent (level, string = '') {
  return '  '.repeat(level) + string
}

function vnodeToString (vnode, level = 0) {
  if (isTag(vnode)) {
    return tagNodeToString(vnode, level)
  } else {
    return textNodeToString(vnode, level)
  }
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
  if (!isSelfClosing(vnode) || children) {
    return `<${tag}${classString}${attrs}>${children}</${tag}>`
  }
  return `<${tag}${classString}${attrs} />`
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
    const firstChild = children[0]
    const lastChild = children[children.length - 1]
    const isContainer = isBlockElements(firstChild) || isBlockElements(lastChild)
    return (isContainer ? `\n` : '') +
      children
        .map(child => {
          return (isContainer ? indent(level + 1) : '') +
            vnodeToString(child, level + 1) +
            (isContainer ? `\n` : '')
        })
        .join('') +
        (isContainer ? `${indent(level)}` : '')
  }
  return ''
}

function textNodeToString (vnode) {
  return vnode.text
    .replace(/^\s+/, '')
    .replace(/\s+/g, ' ')
}
