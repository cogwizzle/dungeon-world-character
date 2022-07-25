module.exports = {
  globDirectory: 'client/www/',
  globPatterns: ['**/*.{svg,png,html,json,css}', '**/*.index.js'],
  swDest: 'www/sw.js',
  ignoreURLParametersMatching: [
    /^utm_/,
    /^fbclid$/,
    /^dungeon/,
    /^world/,
    /^character/,
    /^sheet/,
    /^play/,
    /^bard/,
    /^cleric/,
    /^druid/,
    /^paladin/,
    /^ranger/,
    /^thief/,
    /^wizard/,
  ],
}
