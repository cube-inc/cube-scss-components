import Vue from 'vue'
import Nodes from '@/services/vnodeService/Nodes'
import Node from '@/services/vnodeService/Node'
import Attrs from '@/services/vnodeService/Attrs'
import Attr from '@/services/vnodeService/Attr'
import Children from '@/services/vnodeService/Children'

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
    const vnode = <div class="test-class" placeholder="Test placeholder" xmlns="filtered" viewBox="filtered" required></div>
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
    expect(new Node(<div class="test-class" placeholder="Test placeholder"></div>).toHtml()).toStrictEqual(
      '<div class="test-class" placeholder="Test placeholder"></div>'
    )
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

  test('Node renders complex html', () => {
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

  test('Node renders html of complex elements properly', () => {
    const node = new Node(
      (
        <svg xmlns="http://www.w3.org/2000/svg" width="105.713" height="105.957" class="icon" viewBox="0 0 105.713 105.957">
          <g transform="translate(-8.74 88.428)">
            <path d="M65.869-84.18a4.325,4.325,0,0,0-4.3-4.248,4.315,4.315,0,0,0-4.248,4.248v10.254a4.315,4.315,0,0,0,4.248,4.248,4.325,4.325,0,0,0,4.3-4.248Zm19.824,18.6a4.335,4.335,0,0,0,0,6.006,4.259,4.259,0,0,0,6.055,0l7.275-7.275a4.3,4.3,0,0,0,0-6.055,4.275,4.275,0,0,0-5.957,0ZM31.4-59.57a4.244,4.244,0,0,0,6.006,0,4.289,4.289,0,0,0,.049-6.006L30.176-72.9a4.383,4.383,0,0,0-6.006,0,4.384,4.384,0,0,0-.049,6.006Zm30.176-.781a25.071,25.071,0,0,0-24.9,24.9A25.113,25.113,0,0,0,61.572-10.5,25.1,25.1,0,0,0,86.426-35.449,25.061,25.061,0,0,0,61.572-60.352Zm0,7.471A17.569,17.569,0,0,1,79-35.449a17.611,17.611,0,0,1-17.432,17.48,17.621,17.621,0,0,1-17.48-17.48A17.579,17.579,0,0,1,61.572-52.881ZM110.156-31.2a4.325,4.325,0,0,0,4.3-4.248,4.325,4.325,0,0,0-4.3-4.248h-10.2A4.315,4.315,0,0,0,95.7-35.449,4.315,4.315,0,0,0,99.951-31.2ZM12.988-39.7A4.315,4.315,0,0,0,8.74-35.449,4.315,4.315,0,0,0,12.988-31.2H23.193a4.325,4.325,0,0,0,4.3-4.248,4.325,4.325,0,0,0-4.3-4.248ZM91.7-11.279a4.335,4.335,0,0,0-6.006,0,4.335,4.335,0,0,0,0,6.006l7.373,7.324A4.275,4.275,0,0,0,99.023,2a4.243,4.243,0,0,0,0-6.006ZM24.121-4.053a4.384,4.384,0,0,0-.049,6.006A4.4,4.4,0,0,0,30.127,2L37.4-5.273a4.289,4.289,0,0,0,.049-6.006,4.4,4.4,0,0,0-6.055,0Zm41.748,7.08a4.273,4.273,0,0,0-8.545,0V13.281a4.273,4.273,0,0,0,8.545,0Z" />
          </g>
        </svg>
      )
    )
    expect(node.toHtml()).toStrictEqual(`<svg class="icon" width="105.713" height="105.957">…</svg>`)
  })

  test('Node renders html of Vue Component properly', () => {
    const node = new Node(
      (
        <p>
          <TestComp />
        </p>
      )
    )
    expect(node.toHtml()).toStrictEqual(`<p><TestComp></TestComp></p>`)
  })

  test('Nodes renders properly', () => {
    const vnodes = [<p>Paragraph 1</p>, <p>Paragraph 2</p>, <p>Paragraph 3</p>]
    expect(new Nodes(vnodes).toHtml()).toStrictEqual(`<p>Paragraph 1</p>
<p>Paragraph 2</p>
<p>Paragraph 3</p>`)
  })

  test('Attr highlight properly', () => {
    expect(new Attr('class', 'test-class', { highlight: true }).toHtml()).toStrictEqual(
      '<span class="code-attr">class</span>=<span class="code-attr-val">&quot;test-class&quot;</span>'
    )
  })

  test('Tag node highlight properly', () => {
    expect(new Node(<div>Inner text</div>, { highlight: true }).toHtml()).toStrictEqual(
      '&lt;<span class="code-tag">div</span>&gt;Inner text&lt;/<span class="code-tag">div</span>&gt;'
    )
  })

  test('Node highlight code properly', () => {
    expect(new Node(<code>&lt;li&gt;Test&lt;/li&gt;</code>, { highlight: true }).toHtml()).toStrictEqual(
      '&lt;<span class="code-tag">code</span>&gt;&amp;lt;li&amp;gt;Test&amp;lt;/li&amp;gt;&lt;/<span class="code-tag">code</span>&gt;'
    )
  })
})
