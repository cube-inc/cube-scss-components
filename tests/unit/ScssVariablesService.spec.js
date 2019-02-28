import scssVariablesToHtml, { vnodesToLines, parseLine, parseColor, parseString, parseVariable, parseflag, valueToHtml, numbersToHtml } from '@/services/ScssVariablesService.js'

describe('scssVariablesToHtml', () => {
  test('vnodesToLines', () => {
    const vnodes = [
      { text: '\n\t\tLine 1;\n\t\tLine 2;' },
      { text: '\t\t\tLine 3; \t\t\n' },
      { text: 'Line 4;' }
    ]
    const lines = vnodesToLines(vnodes)
    expect(lines.length).toBe(4)
    expect(lines[0]).toBe('Line 1')
    expect(lines[1]).toBe('Line 2')
    expect(lines[2]).toBe('Line 3')
    expect(lines[3]).toBe('Line 4')
  })

  test('parseLine', () => {
    expect(parseLine('$test-var-1: any value')).toMatchObject({ name: '$test-var-1', value: 'any value' })
    expect(parseLine('$test-var-1 : any value')).toMatchObject({ name: '$test-var-1', value: 'any value' })
    expect(parseLine('$test-var-1 :any value')).toMatchObject({ name: '$test-var-1', value: 'any value' })
    expect(parseLine('test-var-1 :any value')).toBe(undefined)
    expect(parseLine('$test-var-1:')).toBe(undefined)
  })

  test('parseColor', () => {
    expect(parseColor('#123 !defaut')).toBe('#123')
    expect(parseColor('#123456 !defaut')).toBe('#123456')
    expect(parseColor('#12345678 !defaut')).toBe('#12345678')
    expect(parseColor('rgb(1, 2, 3) !defaut')).toBe('rgb(1, 2, 3)')
    expect(parseColor('rgba(1, 2, 3, .4) !defaut')).toBe('rgba(1, 2, 3, .4)')
    expect(parseColor('hsl(1, 2, 3) !defaut')).toBe('hsl(1, 2, 3)')
    expect(parseColor('hsla(1, 2, 3, .4) !defaut')).toBe('hsla(1, 2, 3, .4)')
    expect(parseColor('hwb(1, 2%, 3%) !defaut')).toBe('hwb(1, 2%, 3%)')
    expect(parseColor('white !defaut')).toBe('white')
    expect(parseColor('1px !defaut')).toBe(undefined)
  })

  test('parseString', () => {
    expect(parseString('"Hello" !default')).toBe('"Hello"')
    expect(parseString('"" !default')).toBe('""')
    expect(parseString('"\\"" !default')).toBe('"\\""')
  })

  test('parseVariable', () => {
    expect(parseVariable('$another-var !default')).toBe('$another-var')
  })

  test('parseflag', () => {
    expect(parseflag('#123456 !default')).toBe('!default')
    expect(parseflag('#123456 !important')).toBe('!important')
    expect(parseflag('#123456')).toBe(undefined)
  })

  test('numbersToHtml', () => {
    const open = '<span class="code-scss-num">'
    const close = '</span>'
    expect(numbersToHtml('rgba(0, 23, 90, .9) !default')).toBe(`rgba(${open}0${close}, ${open}23${close}, ${open}90${close}, ${open}.9${close}) !default`)
  })

  test('valueToHtml', () => {
    const openColor = '<span class="code-scss-color">'
    const openNum = '<span class="code-scss-num">'
    const openFlag = '<span class="code-scss-flag">'
    const close = '</span>'
    expect(valueToHtml('rgba(0, 23, 90, .9) !default'))
      .toBe(`${openColor}rgba(${openNum}0${close}, ${openNum}23${close}, ${openNum}90${close}, ${openNum}.9${close})${close} ${openFlag}!default${close}`)
  })
})
