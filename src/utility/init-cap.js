/**
 * Initializes the first letter of a string to uppercase.
 *
 * @param {string} value Value to be transformed.
 * @returns {string} Transformed value with initial capital letter.
 */
export const initCap = (value) =>
  value
    .toLowerCase()
    .replace(/(?:^|[^a-zØ-öø-ÿ])[a-zØ-öø-ÿ]/g, (m) => m.toUpperCase())
