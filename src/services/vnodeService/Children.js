import Node from './Node'

export default class Children extends Array {
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
