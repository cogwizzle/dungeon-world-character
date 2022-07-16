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
    this.attachShadow({ mode: 'open' })
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
      case supportedClasses.Paladin:
        return [
          createOption(
            'human',
            'When you pray for guidance, even for a moment and ask “what here is evil?” the GM will tell you, honestly.'
          ),
        ]
      case supportedClasses.Thief:
        return [
          createOption(
            'halfling',
            'When you attack with a ranged weapon, deal +2 damage.'
          ),
          createOption(
            'human',
            'You are a professional. When you Spout Lore or Discern Realities about criminal activities, take +1.'
          ),
        ]
      case supportedClasses.Cleric:
        return [
          createOption(
            'dwarf',
            'You are one with stone. When you commune you are also granted a special version of Words of the Unspeaking as a rote which only works on stone.'
          ),
          createOption(
            'human',
            'Your faith is diverse. Choose one wizard spell. You can cast and be granted that spell as if it was a cleric spell.'
          ),
        ]
      case supportedClasses.Wizard:
        return [
          createOption(
            'elf',
            'Magic is as natural as breath to you. Detect Magic is a cantrip for you.'
          ),
          createOption(
            'human',
            'Choose one cleric spell. You can cast it as if it was a wizard spell.'
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
    const raceValue = state.race || ''
    if (this._characterClass !== state.characterClass) {
      this._characterClass = state.characterClass
      this.updateOptions()
    }
    const race = this.shadowRoot.querySelector('#race')
    if (race.value === raceValue) return
    race?.setAttribute('value', raceValue)
  }

  onMount() {
    CharacterFormObservable.subscribe(this.hydrate)
    this.shadowRoot
      .querySelector('#race')
      ?.addEventListener('dw-change', this.onChange)
  }

  beforeUnmount() {
    CharacterFormObservable.unsubscribe(this.hydrate)
    this.shadowRoot
      .querySelector('#race')
      .removeEventListener('dw-change', this.onChange)
  }

  connectedCallback() {
    this.render()
    this.onMount()
  }

  disconnectedCallback() {
    this.beforeUnmount()
  }

  updateOptions() {
    this.shadowRoot
      .querySelector('#race')
      .setAttribute('options', JSON.stringify(this.options))
  }

  render() {
    this.shadowRoot.innerHTML = template
    this.updateOptions()
  }
}

customElements.define('dw-character-race', CharacterRace)
