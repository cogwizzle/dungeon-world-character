export const initCap = (value) =>
  value
    .toLowerCase()
    .replace(/(?:^|[^a-zØ-öø-ÿ])[a-zØ-öø-ÿ]/g, (m) => m.toUpperCase())
