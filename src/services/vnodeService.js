const voidElements = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr']
const blockElements = ['p', 'a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ol', 'ul', 'li', 'pre', 'address', 'blockquote', 'dl', 'div', 'fieldset', 'form', 'textarea', 'select', 'option', 'hr', 'noscript', 'table', 'header', 'main', 'footer', 'button', 'label', 'input', 'table', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td']
const complexElements = ['svg']
const hiddenAttrs = ['xmlns', 'viewBox']

export function escapeHtml(string) {
  return string.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export default function vnodesToHtml(vnodes, options = {}) {
  return new Nodes(vnodes, options).toHtml()
}

export class Nodes extends Array {
  constructor(vnodes, options = {}) {
    const items = []
    if (vnodes instanceof Array) {
      vnodes.forEach((vnode) => items.push(new Node(vnode, options)))
    }
    super(...items)
    this.vnodes = vnodes
    this.options = options
  }
  toHtml() {
    return this.map((node) => node.toHtml()).join('\n')
  }
}

export class Node {
  constructor(vnode, options = {}) {
    this.vnode = vnode
    this.tag = vnode.componentInstance ? vnode.elm.tagName : vnode.tag
    this.attrs = new Attrs(vnode, options)
    this.children = new Children(vnode, options)
    this.text = vnode.text
    this.options = options
  }
  isHighlighted() {
    return Boolean(this.options.highlight)
  }
  isTag() {
    return Boolean(this.tag)
  }
  isPreTag() {
    return ['pre', 'code'].includes(this.tag)
  }
  isVoidElement() {
    return voidElements.includes(this.tag)
  }
  isBlockElement() {
    return blockElements.includes(this.tag)
  }
  tagToHtml() {
    return this.isHighlighted() ? `<span class="code-tag">${this.tag}</span>` : this.tag
  }
  openTagToHtml() {
    const tag = this.tagToHtml()
    const attrs = this.attrs.toHtml()
    return this.isHighlighted() ? `&lt;${tag}${attrs}&gt;` + (this.tag === 'br' ? '<br>' : '') : `<${tag}${attrs}>` + (this.tag === 'br' ? '\n' : '')
  }
  closeTagToHtml() {
    const tag = this.tagToHtml()
    return this.isHighlighted() ? `&lt;/${tag}&gt;` : `</${tag}>`
  }
  textToHtml() {
    return this.isHighlighted() ? escapeHtml(escapeHtml(this.text)) : escapeHtml(this.text)
  }
  toHtml() {
    if (this.isTag()) {
      const openTag = this.openTagToHtml()
      if (this.isVoidElement()) {
        return openTag
      }
      const children = complexElements.includes(this.tag) ? '…' : this.children.toHtml()
      const closeTag = this.closeTagToHtml()
      return `${openTag}${children}${closeTag}`
    }
    return this.textToHtml()
  }
}

export class Attrs extends Array {
  constructor(vnode, options = {}) {
    const items = []
    const { data } = vnode
    if (data instanceof Object) {
      const { attrs } = data
      const classes = []
      if (data.staticClass) {
        classes.push(data.staticClass)
      }
      if (data.class) {
        classes.push(data.class)
      }
      if (classes.length) {
        items.push(new Attr('class', classes.join(' '), options))
      }
      if (attrs instanceof Object) {
        Object.keys(attrs)
          .filter((key) => !hiddenAttrs.includes(key))
          .forEach((key) => items.push(new Attr(key, attrs[key], options)))
      }
    }
    super(...items)
    this.vnode = vnode
    this.options = options
  }
  toHtml() {
    return this.map((attr) => ` ${attr.toHtml()}`)
      .filter((attr) => attr)
      .join('')
  }
}

export class Attr {
  constructor(name, value, options = {}) {
    this.name = name
    this.value = value
    this.options = options
  }
  isHighlighted() {
    return Boolean(this.options.highlight)
  }
  nameToHtml() {
    return this.isHighlighted() ? `<span class="code-attr">${this.name}</span>` : this.name
  }
  valueToHtml() {
    const value = ['src', 'href', 'xmlns'].indexOf(this.name) > -1 ? '…' : this.value
    return this.isHighlighted() ? `<span class="code-attr-val">&quot;${value}&quot;</span>` : `"${value}"`
  }
  toHtml() {
    if (typeof this.value === 'boolean') {
      return this.value ? this.nameToHtml() : null
    }
    if (this.value === '') {
      return this.nameToHtml()
    }
    const value = this.valueToHtml()
    return `${this.nameToHtml()}=${value}`
  }
}

export class Children extends Array {
  constructor(vnode, options = {}) {
    const items = []
    const { children } = vnode
    if (children instanceof Array) {
      children.forEach((vnode) => items.push(new Node(vnode, options)))
    }
    super(...items)
    this.vnode = vnode
    this.options = options
  }
  hasBlockElements() {
    return this.some((node) => node.isBlockElement())
  }
  toHtml() {
    if (this.hasBlockElements()) {
      const html = this.map((node) => (node.isTag() ? node.toHtml() : node.toHtml().trim()))
        .join('\n')
        .split('\n')
        .map((line) => `  ${line}`)
        .join('\n')
      return `\n${html}\n`
    }
    return this.map((node) => node.toHtml()).join('')
  }
}
