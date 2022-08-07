const fs = require('fs').promises
const path = require('path')
const { createSpell } = require('black-magic')

const filesToConvert = [
  './src/components/character-form/character-attributes/character-attribute/character-attribute.html',
  './src/components/character-form/character-attributes/character-attributes.html',
  './src/components/character-form/character-bonds/character-bonds.html',
  './src/components/character-form/character-moves/cleric-moves/cleric-moves.html',
  './src/components/character-form/character-moves/fighter-moves/fighter-moves.html',
  './src/components/character-form/character-moves/bard-moves/bard-moves.html',
  './src/components/character-form/character-moves/ranger-moves/ranger-moves.html',
  './src/components/character-form/character-moves/wizard-moves/wizard-moves.html',
  './src/components/character-form/character-moves/other-moves/other-moves.html',
  './src/components/character-form/character-moves/druid-moves/druid-moves.html',
  './src/components/character-form/character-moves/paladin-moves/paladin-moves.html',
  './src/components/character-form/character-moves/thief-moves/thief-moves.html',
  './src/components/character-form/notes/notes.html',
  './src/components/character-form/character-alignment/paladin-alignment.html',
  './src/components/character-form/character-alignment/thief-alignment.html',
  './src/components/character-form/character-alignment/wizard-alignment.html',
  './src/components/character-form/character-alignment/druid-alignment.html',
  './src/components/character-form/character-alignment/ranger-alignment.html',
  './src/components/character-form/character-alignment/cleric-alignment.html',
  './src/components/character-form/character-alignment/bard-alignment.html',
  './src/components/character-form/character-alignment/fighter-alignment.html',
  './src/components/character-form/character-alignment/other-alignment.html',
  './src/components/character-form/character-form.html',
  './src/components/character-form/character-race/character-race.html',
  './src/components/character-form/character-armor-hp-damage/other-dice/other-dice.html',
  './src/components/character-form/character-armor-hp-damage/labeled-decorated-input/labeled-decorated-input.html',
  './src/components/character-form/character-armor-hp-damage/character-armor-hp-damage.html',
  './src/components/character-form/character-coin/character-coin.html',
  './src/components/character-form/character-gear/character-gear.html',
  './src/components/character-form/character-look/bard-look.html',
  './src/components/character-form/character-look/wizard-look.html',
  './src/components/character-form/character-look/cleric-look.html',
  './src/components/character-form/character-look/druid-look.html',
  './src/components/character-form/character-look/other-look.html',
  './src/components/character-form/character-look/ranger-look.html',
  './src/components/character-form/character-look/fighter-look.html',
  './src/components/character-form/character-look/thief-look.html',
  './src/components/character-form/character-look/paladin-look.html',
  './src/components/section-header/section-header.html',
  './src/components/infinite-list/infinite-list.html',
  './src/components/player-moves/player-moves.html',
  './src/components/drawer/drawer.html',
  './src/components/labeled-checkbox/labeled-checkbox.html',
  './src/components/detailed-checkbox/detailed-checkbox.html',
]

module.exports = (spellbook) => {
  createSpell({
    spellbook,
    spellPath: 'convert.htmlToJavascript',
    spell: async () => {
      filesToConvert.forEach(async (file) => {
        const fileContent = await fs.readFile(file, 'utf8')
        await fs.writeFile(
          file.replace('html', 'template.js'),
          `export default html\`${fileContent}\``
        )
        await fs.unlink(file)
        return
      })
    },
    help: () => {
      console.group('htmlToJavascript')
      console.log('Description: Converts HTML to JavaScript module.')
      console.groupEnd()
    },
  })
}
