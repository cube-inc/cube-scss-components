import Vue from 'vue'
import { Attr, Attrs, Node, Children, Nodes } from '@/services/vnodeService'

// eslint-disable-next-line no-unused-vars
const h = new Vue().$createElement

describe('vnodeService', () => {
  test('Attr renders properly', () => {
    expect(new Attr('arbitrary', 'test-val').toHtml()).toStrictEqual('arbitrary="test-val"')
    expect(new Attr('empty', true).toHtml()).toStrictEqual('empty')
    expect(new Attr('empty', '').toHtml()).toStrictEqual('empty')
    expect(new Attr('empty', false).toHtml()).toStrictEqual(null)
    expect(new Attr('src', 'test-val').toHtml()).toStrictEqual('src="…"')
    expect(new Attr('href', 'test-val').toHtml()).toStrictEqual('href="…"')
  })

  test('Attrs renders properly', () => {
    const vnode = <div class="test-class" placeholder="Test placeholder" required></div>
    const attrs = new Attrs(vnode)
    expect(attrs.length).toStrictEqual(3)
    expect(attrs[0].name).toStrictEqual('class')
    expect(attrs[0].value).toStrictEqual('test-class')
    expect(attrs[1].name).toStrictEqual('placeholder')
    expect(attrs[1].value).toStrictEqual('Test placeholder')
    expect(attrs[2].name).toStrictEqual('required')
    expect(attrs[2].value).toStrictEqual(true)
    expect(attrs.toHtml()).toStrictEqual(' class="test-class" placeholder="Test placeholder" required')
  })

  test('Tag node constructor', () => {
    const vnode = <div class="test-class" placeholder="Test placeholder" required></div>
    const node = new Node(vnode)
    expect(node.tag).toStrictEqual('div')
    expect(node.attrs.length).toStrictEqual(3)
    expect(node.attrs[0].name).toStrictEqual('class')
    expect(node.attrs[0].value).toStrictEqual('test-class')
    expect(node.attrs[1].name).toStrictEqual('placeholder')
    expect(node.attrs[1].value).toStrictEqual('Test placeholder')
    expect(node.attrs[2].name).toStrictEqual('required')
    expect(node.attrs[2].value).toStrictEqual(true)
  })

  test('Text node constructor', () => {
    const vnode = <span>Test text node</span>
    const node = new Node(vnode)
    expect(node.tag).toStrictEqual('span')
    expect(node.attrs.length).toStrictEqual(0)
    expect(node.text).toStrictEqual(undefined)
    expect(node.children.length).toStrictEqual(1)
    expect(node.children[0].tag).toStrictEqual(undefined)
    expect(node.children[0].attrs.length).toStrictEqual(0)
    expect(node.children[0].text).toStrictEqual('Test text node')
  })

  test('Children constructor', () => {
    const vnode = (
      <select>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    )
    const children = new Children(vnode)
    expect(children.length).toStrictEqual(3)
    expect(children[0].tag).toStrictEqual('option')
    expect(children[0].attrs[0].name).toStrictEqual('value')
    expect(children[0].attrs[0].value).toStrictEqual('1')
    expect(children[1].tag).toStrictEqual('option')
    expect(children[1].attrs[0].name).toStrictEqual('value')
    expect(children[1].attrs[0].value).toStrictEqual('2')
    expect(children[2].tag).toStrictEqual('option')
    expect(children[2].attrs[0].name).toStrictEqual('value')
    expect(children[2].attrs[0].value).toStrictEqual('3')
  })

  test('Node.isTag ', () => {
    expect(new Node(<div></div>).isTag()).toStrictEqual(true)
    const span = <span>Text node</span>
    expect(new Node(span.children[0]).isTag()).toStrictEqual(false)
  })

  test('Node.isPreTag ', () => {
    expect(new Node(<pre></pre>).isPreTag()).toStrictEqual(true)
    expect(new Node(<code></code>).isPreTag()).toStrictEqual(true)
    expect(new Node(<div></div>).isPreTag()).toStrictEqual(false)
  })

  test('Node.isVoidElement ', () => {
    expect(new Node(<br />).isVoidElement()).toStrictEqual(true)
    expect(new Node(<div></div>).isVoidElement()).toStrictEqual(false)
  })

  test('Node.isVoidElement ', () => {
    expect(new Node(<div></div>).isBlockElement()).toStrictEqual(true)
    expect(new Node(<br />).isBlockElement()).toStrictEqual(false)
  })

  test('Node renders void elements properly', () => {
    expect(new Node(<input />).toHtml()).toStrictEqual('<input>')
    expect(new Node(<input class="test-class" />).toHtml()).toStrictEqual('<input class="test-class">')
    expect(new Node(<img src="https://fake.url" />).toHtml()).toStrictEqual('<img src="…">')
  })

  test('Node renders br elements properly', () => {
    expect(new Node(<br />).toHtml()).toStrictEqual('<br>\n')
    expect(new Node(<br class="test-class" />).toHtml()).toStrictEqual('<br class="test-class">\n')
  })

  test('Node renders empty block elements properly', () => {
    expect(new Node(<div class="test-class" placeholder="Test placeholder"></div>).toHtml()).toStrictEqual('<div class="test-class" placeholder="Test placeholder"></div>')
  })

  test('Node renders element with text node properly', () => {
    expect(
      new Node(
        (
          <div class="test-class" placeholder="Test placeholder">
            This is a text
          </div>
        )
      ).toHtml()
    ).toStrictEqual('<div class="test-class" placeholder="Test placeholder">This is a text</div>')
  })

  test('Node renders element with inline elements properly', () => {
    expect(
      new Node(
        (
          <p>
            This is <strong>strong</strong> text
          </p>
        )
      ).toHtml()
    ).toStrictEqual('<p>This is <strong>strong</strong> text</p>')
  })

  test('Node renders code properly', () => {
    expect(new Node(<code>&lt;li&gt;Test&lt;/li&gt;</code>).toHtml()).toStrictEqual('<code>&lt;li&gt;Test&lt;/li&gt;</code>')
  })

  test('Node renders complexe html', () => {
    const node = new Node(
      (
        <fieldset class="form-group">
          <label class="form-label">
            Select
            <select class="form-control" required>
              <option value hidden>
                Choose an option
              </option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </select>
          </label>
        </fieldset>
      )
    )
    expect(node.toHtml()).toStrictEqual(`<fieldset class="form-group">
  <label class="form-label">
    Select
    <select class="form-control" required>
      <option value hidden>Choose an option</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
    </select>
  </label>
</fieldset>`)
  })

  test('Nodes renders properly', () => {
    const vnodes = [<p>Paragraph 1</p>, <p>Paragraph 2</p>, <p>Paragraph 3</p>]
    expect(new Nodes(vnodes).toHtml()).toStrictEqual(`<p>Paragraph 1</p>
<p>Paragraph 2</p>
<p>Paragraph 3</p>`)
  })

  test('Attr highlight properly', () => {
    expect(new Attr('class', 'test-class', { highlight: true }).toHtml()).toStrictEqual('<span class="code-attr">class</span>=<span class="code-attr-val">&quot;test-class&quot;</span>')
  })

  test('Tag node highlight properly', () => {
    expect(new Node(<div>Inner text</div>, { highlight: true }).toHtml()).toStrictEqual('&lt;<span class="code-tag">div</span>&gt;Inner text&lt;/<span class="code-tag">div</span>&gt;')
  })

  test('Node highlight code properly', () => {
    expect(new Node(<code>&lt;li&gt;Test&lt;/li&gt;</code>, { highlight: true }).toHtml()).toStrictEqual('&lt;<span class="code-tag">code</span>&gt;&amp;lt;li&amp;gt;Test&amp;lt;/li&amp;gt;&lt;/<span class="code-tag">code</span>&gt;')
  })
})
