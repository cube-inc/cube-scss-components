import { hiddenAttrs } from './utils'
import Attr from './Attr'

export default class Attrs extends Array {
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
