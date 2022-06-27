import template from './character-race.html'
import '../../section-header/section-header'
import CharacterFormObservable from '../../../state/character-form-observable'
import { supportedClasses } from '../../../data/supported-classes'

const createOption = (name, description) => ({
  name,
  description,
})

export class CharacterRace extends HTMLElement {
  _characterClass
  constructor() {
    super()
  }

  get options() {
    switch (this._characterClass) {
      case supportedClasses.Fighter:
        return [
          createOption(
            'dwarf',
            'When you share a drink with someone, you may parley with them using CON instead of CHA.'
          ),
          createOption(
            'elf',
            'Choose one weapon-you can always treat weapons of that type as if they had the precise tag.'
          ),
          createOption(
            'halfling',
            'Choose one weapon-you can always treat weapons of that type as if they had the precise tag.'
          ),
          createOption(
            'human',
            "Once per battle you may reroll a single damage roll (yours or someone else's"
          ),
        ]
      case supportedClasses.Ranger:
        return [
          createOption(
            'elf',
            'When you Undertake A Perilous Journey through wilderness whatever job you take you succeed as if you rolled a 10+.'
          ),
          createOption(
            'human',
            "When you Make Camp in a dungeon or city, you don't need to consume a ration."
          ),
        ]
      case supportedClasses.Bard:
        return [
          createOption(
            'elf',
            'When you enter an important location (your call) you can ask the GM for one fact from the history of that location.'
          ),
          createOption(
            'human',
            'When you first enter a civilized settlement someone who respects the custom of hospitality to minstrels will take you in as their guest.'
          ),
        ]
      case supportedClasses.Druid:
        return [
          createOption(
            'elf',
            'The sap of the elder trees flows within you. In addition to any other attunements, the Great Forest is always considered your land.'
          ),
          createOption(
            'human',
            'As your people learned to bind animals to field and farm, so too are you bound to them. You may always take the shape of any domesticated animal, in addition to your normal options.'
          ),
          createOption(
            'halfling',
            'You sing the healing songs of spring and brook. When you make camp, you and your allies heal +1d6.'
          ),
        ]
      default:
        return []
    }
  }

  onChange = (event) => {
    CharacterFormObservable.race = event.detail.value
  }

  hydrate = (state) => {
    if (this._characterClass === state.characterClass) return
    this._characterClass = state.characterClass
    this.querySelector('#race').setAttribute('value', state.race)
    this.updateOptions()
  }

  connectedCallback() {
    this.render()
    CharacterFormObservable.subscribe(this.hydrate)
    this.querySelector('#race').addEventListener('dw-change', this.onChange)
  }

  disconnectedCallback() {
    CharacterFormObservable.unsubscribe(this.hydrate)
    this.querySelector('#race').addEventListener('dw-change', this.onChange)
  }

  updateOptions() {
    this.querySelector('#race').setAttribute(
      'options',
      JSON.stringify(this.options)
    )
  }

  render() {
    this.innerHTML = template
    this.updateOptions()
  }
}

customElements.define('dw-character-race', CharacterRace)
