import { escapeHtml, voidElements, blockElements, complexElements } from './utils'
import Attrs from './Attrs'
import Children from './Children'

export default class Node {
  constructor(vnode, options = {}) {
    this.vnode = vnode
    this.tag = vnode.componentInstance ? vnode.componentOptions.tag : vnode.tag
    this.attrs = Attrs.from(vnode, options)
    this.children = Children.from(vnode, options)
    this.text = vnode.text
    this.options = options
  }
  isHighlighted() {
    return Boolean(this.options.highlight)
  }
  isTag() {
    return Boolean(this.tag)
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
    return this.isHighlighted()
      ? `&lt;${tag}${attrs}&gt;` + (this.tag === 'br' ? '<br>' : '')
      : `<${tag}${attrs}>` + (this.tag === 'br' ? '\n' : '')
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
