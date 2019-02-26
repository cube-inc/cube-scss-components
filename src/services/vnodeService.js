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

export default function vnodesToHtml (vnodes) {
  return new Nodes(vnodes).toHtml()
}

export class Nodes extends Array {
  constructor (vnodes) {
    const items = []
    if (vnodes instanceof Array) {
      vnodes.forEach(vnode => items.push(new Node(vnode)))
    }
    super(...items)
    this.vnodes = vnodes
  }
  toHtml () {
    return this
      .map(node => node.toHtml())
      .join('\n')
  }
}

export class Node {
  constructor (vnode) {
    this.vnode = vnode
    this.tag = vnode.tag
    this.attrs = new Attrs(vnode)
    this.children = new Children(vnode)
    this.text = vnode.text
  }
  isTag () {
    return Boolean(this.vnode.tag)
  }
  isPreTag () {
    return ['pre', 'code'].indexOf(this.vnode.tag) > -1
  }
  isVoidElement () {
    return voidElements.indexOf(this.vnode.tag) > -1
  }
  isBlockElement () {
    return blockElements.indexOf(this.vnode.tag) > -1
  }
  toHtml () {
    if (this.isTag()) {
      const tag = this.tag
      const attrs = this.attrs.toHtml()
      if (this.isVoidElement()) {
        // Not sure this is the responsibility of Node to add \n when br
        return `<${tag}${attrs}>` + (tag === 'br' ? '\n' : '')
      }
      const children = this.children.toHtml()
      return `<${tag}${attrs}>${children}</${tag}>`
    }
    return this.text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
  }
}

export class Attrs extends Array {
  constructor (vnode) {
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
        items.push(new Attr('class', classes.join(' ')))
      }
      if (attrs instanceof Object) {
        Object.keys(attrs)
          .forEach(key => items.push(new Attr(key, attrs[key])))
      }
    }
    super(...items)
    this.vnode = vnode
  }
  toHtml () {
    return this
      .map(attr => ` ${attr.toHtml()}`)
      .filter(attr => attr)
      .join('')
  }
}

export class Attr {
  constructor (name, value) {
    this.name = name
    this.value = value
  }
  toHtml () {
    if (typeof this.value === 'boolean') {
      return this.value ? this.name : null
    }
    if (this.value === '') {
      return this.name
    }
    const value = ['src', 'href'].indexOf(this.name) > -1 ? '…' : this.value
    return `${this.name}="${value}"`
  }
}

export class Children extends Array {
  constructor (vnode) {
    const items = []
    const { children } = vnode
    if (children instanceof Array) {
      children.forEach(vnode => items.push(new Node(vnode)))
    }
    super(...items)
    this.vnode = vnode
  }
  hasBlockElements () {
    return this.some(node => node.isBlockElement())
  }
  toHtml () {
    if (this.hasBlockElements()) {
      const html = this
        .map(node => node.isTag()
          ? node.toHtml()
          : node.toHtml().trim())
        .join('\n')
        .split('\n')
        .map(line => `  ${line}`)
        .join('\n')
      return `\n${html}\n`
    }
    return this
      .map(node => node.toHtml())
      .join('')
  }
}
