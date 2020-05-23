import Nodes from './Nodes'

export default function vnodesToHtml(vnodes, options = {}) {
  return new Nodes(vnodes, options).toHtml()
}
