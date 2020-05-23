export default class Attr {
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
