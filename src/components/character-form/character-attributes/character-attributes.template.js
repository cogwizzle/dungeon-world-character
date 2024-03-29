import { html } from '../../../utility/html-template'

export default html`<div class="text-sm italic text-center mb-1">
    Assign these scores to your stats: 16(+2), 15(+1), 13(+1), 12(-), 9(-),
    8(-1)
  </div>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-2">
    <dw-character-attribute id="strength">
      Strength
      <span slot="abbreviation">STR</span>
      <span slot="debuff">Weak -1</span>
    </dw-character-attribute>
    <dw-character-attribute id="dexterity">
      Dexterity
      <span slot="abbreviation">DEX</span>
      <span slot="debuff">Shaky -1</span>
    </dw-character-attribute>
    <dw-character-attribute id="constitution">
      Constitution
      <span slot="abbreviation">CON</span>
      <span slot="debuff">Sick -1</span>
    </dw-character-attribute>
    <dw-character-attribute id="intelligence">
      Intelligence
      <span slot="abbreviation">INT</span>
      <span slot="debuff">Stunned -1</span>
    </dw-character-attribute>
    <dw-character-attribute id="wisdom">
      Wisdom
      <span slot="abbreviation">WIS</span>
      <span slot="debuff">Confused -1</span>
    </dw-character-attribute>
    <dw-character-attribute id="charisma">
      Charisma
      <span slot="abbreviation">CHA</span>
      <span slot="debuff">Scarred -1</span>
    </dw-character-attribute>
  </div> `
