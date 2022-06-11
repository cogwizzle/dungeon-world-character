import template from './character-race.html'
import '../../section-header/section-header'
import CharacterFormObservable from '../../../state/character-form-observable'

export class CharacterRace extends HTMLElement {
  _options = [
    {
      name: 'dwarf',
      description:
        'When you share a drink with someone, you may parley with them using CON instead of CHA.',
    },
    {
      name: 'elf',
      description:
        'Choose one weapon-you can always treat weapons of that type as if they had the precise tag.',
    },
    {
      name: 'halfling',
      description:
        'Choose one weapon-you can always treat weapons of that type as if they had the precise tag.',
    },
    {
      name: 'human',
      description:
        "Once per battle you may reroll a single damage roll (yours or someone else's",
    },
  ]
  constructor() {
    super()
  }

  onChange = (event) => {
    CharacterFormObservable.race = event.detail.value
  }

  hydrate = (state) => {
    this.querySelector('#race').setAttribute('value', state.race)
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

  render() {
    this.innerHTML = template
    this.querySelector('#race').setAttribute(
      'options',
      JSON.stringify(this._options)
    )
  }
}

customElements.define('dw-character-race', CharacterRace)
