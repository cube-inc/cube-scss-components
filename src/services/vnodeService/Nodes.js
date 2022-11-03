import Node from './Node'

export default class Nodes extends Array {
  static from(vnodes, options = {}) {
    const items = []
    if (vnodes instanceof Array) {
      vnodes.forEach((vnode) => items.push(new Node(vnode, options)))
    }
    return new Nodes(...items)
  }
  toHtml() {
    return this.map((node) => node.toHtml()).join('\n')
  }
}
