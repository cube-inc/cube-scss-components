import Node from './Node'

export default class Nodes extends Array {
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
