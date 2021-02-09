import Nodes from './Nodes'

export default function vnodesToHtml(vnodes, options = {}) {
  return Nodes.from(vnodes, options).toHtml()
}
