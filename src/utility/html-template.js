/**
 * Label template for html based template string.
 *
 * @param {TemplateStringsArray} strings
 * @param {any[]} values
 * @returns {string}
 */
export const html = (strings, ...values) => {
  let str = ''
  strings.forEach((string, i) => {
    str += string + (values[i] || '')
  })
  return str
}
