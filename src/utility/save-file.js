/**
 * Save content to a file using filename and a mime type.
 * @param {string} content Content to be stored in the file.
 * @param {string} fileName Name of the file.
 * @param {string} contentType Mimetype.
 * @returns {void}
 */
const saveFile = (content, fileName, contentType) => {
  const a = document.createElement('a')
  const file = new Blob([content], { type: contentType })
  a.href = URL.createObjectURL(file)
  a.download = fileName
  a.click()
}

export default saveFile
