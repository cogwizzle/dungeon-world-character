module.exports = {
	globDirectory: 'www/',
	globPatterns: [
		'**/*.{svg,js,png,html,json,css}'
	],
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
		/^wizard/
	]
};