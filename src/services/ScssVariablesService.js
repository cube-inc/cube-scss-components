const colorNames = ['AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine', 'Azure', 'Beige', 'Bisque', 'Black', 'BlanchedAlmond', 'Blue', 'BlueViolet', 'Brown', 'BurlyWood', 'CadetBlue', 'Chartreuse', 'Chocolate', 'Coral', 'CornflowerBlue', 'Cornsilk', 'Crimson', 'Cyan', 'DarkBlue', 'DarkCyan', 'DarkGoldenRod', 'DarkGray', 'DarkGrey', 'DarkGreen', 'DarkKhaki', 'DarkMagenta', 'DarkOliveGreen', 'DarkOrange', 'DarkOrchid', 'DarkRed', 'DarkSalmon', 'DarkSeaGreen', 'DarkSlateBlue', 'DarkSlateGray', 'DarkSlateGrey', 'DarkTurquoise', 'DarkViolet', 'DeepPink', 'DeepSkyBlue', 'DimGray', 'DimGrey', 'DodgerBlue', 'FireBrick', 'FloralWhite', 'ForestGreen', 'Fuchsia', 'Gainsboro', 'GhostWhite', 'Gold', 'GoldenRod', 'Gray', 'Grey', 'Green', 'GreenYellow', 'HoneyDew', 'HotPink', 'IndianRed', 'Indigo', 'Ivory', 'Khaki', 'Lavender', 'LavenderBlush', 'LawnGreen', 'LemonChiffon', 'LightBlue', 'LightCoral', 'LightCyan', 'LightGoldenRodYellow', 'LightGray', 'LightGrey', 'LightGreen', 'LightPink', 'LightSalmon', 'LightSeaGreen', 'LightSkyBlue', 'LightSlateGray', 'LightSlateGrey', 'LightSteelBlue', 'LightYellow', 'Lime', 'LimeGreen', 'Linen', 'Magenta', 'Maroon', 'MediumAquaMarine', 'MediumBlue', 'MediumOrchid', 'MediumPurple', 'MediumSeaGreen', 'MediumSlateBlue', 'MediumSpringGreen', 'MediumTurquoise', 'MediumVioletRed', 'MidnightBlue', 'MintCream', 'MistyRose', 'Moccasin', 'NavajoWhite', 'Navy', 'OldLace', 'Olive', 'OliveDrab', 'Orange', 'OrangeRed', 'Orchid', 'PaleGoldenRod', 'PaleGreen', 'PaleTurquoise', 'PaleVioletRed', 'PapayaWhip', 'PeachPuff', 'Peru', 'Pink', 'Plum', 'PowderBlue', 'Purple', 'RebeccaPurple', 'Red', 'RosyBrown', 'RoyalBlue', 'SaddleBrown', 'Salmon', 'SandyBrown', 'SeaGreen', 'SeaShell', 'Sienna', 'Silver', 'SkyBlue', 'SlateBlue', 'SlateGray', 'SlateGrey', 'Snow', 'SpringGreen', 'SteelBlue', 'Tan', 'Teal', 'Thistle', 'Tomato', 'Turquoise', 'Violet', 'Wheat', 'White', 'WhiteSmoke', 'Yellow', 'YellowGreen']
export default function scssVariablesToHtml (vnodes) {
  if (vnodes instanceof Array) {
    return vnodesToLines(vnodes)
      .map(line => lineToHtml(line))
      .join('\n')
  }
}

export function vnodesToLines (vnodes) {
  const lines = vnodes
    .map(vnode => vnode.text.split(';'))
    .flat()
    .map(line => line.trim())
    .filter(line => line)
  return lines
}

export function parseLine (line) {
  const match = line.match(/(\$[a-z][a-z0-9_-]+)\s*:\s*(.+)$/i)
  if (match) {
    const [, name, value] = match
    return { name, value }
  }
}

export function parseColor (value) {
  const matchHexadecimal = value.match(/#[0-9a-f]{3,8}/i)
  if (matchHexadecimal) {
    return matchHexadecimal[0]
  }
  const matchFunctional = value.match(/(rgba?|hsla?|hwb)\([^)]+\)/i)
  if (matchFunctional) {
    return matchFunctional[0]
  }
  const matchName = colorNames.find(color => value.toLowerCase().indexOf(color.toLowerCase()) > -1)
  if (matchName) {
    const regexp = new RegExp(`${matchName}`, 'ig')
    return value.match(regexp)[0]
  }
}

export function parseString (value) {
  const match = value.match(/(["']).*\1/)
  if (match) {
    return match[0]
  }
}

export function parseVariable (value) {
  const match = value.match(/\$[a-z][a-z0-9_-]+/i)
  if (match) {
    return match[0]
  }
}

export function parseflag (value) {
  const match = value.match(/!(default|important)$/)
  if (match) {
    return match[0]
  }
}

export function numbersToHtml (value) {
  return value.replace(/(-?[0-9.]+(px|em|rem|%|ms|s)?)/g, '<span class="code-scss-num">$1</span>')
}

export function valueToHtml (value) {
  let html = value
  const color = parseColor(value)
  if (color) {
    html = html.replace(color, `<span class="code-scss-color">${color}</span>`)
  }
  const string = parseString(value)
  if (string) {
    html = html.replace(string, `<span class="code-scss-string">${string}</span>`)
  }
  const variable = parseVariable(value)
  if (variable) {
    html = html.replace(variable, `<span class="code-scss-var">${variable}</span>`)
  }
  const flag = parseflag(value)
  if (flag) {
    html = html.replace(flag, `<span class="code-scss-flag">${flag}</span>`)
  }
  html = numbersToHtml(html)
  return html
}

function lineToHtml (line) {
  const { name, value } = parseLine(line)
  const highlighted = `<span class="code-scss-var">${name}</span>: <span class="code-scss-val">${valueToHtml(value)}</span>;`
  return highlighted
}
