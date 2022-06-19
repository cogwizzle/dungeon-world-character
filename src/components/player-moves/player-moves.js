import template from './player-moves.html'

export class PlayerMoves extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.render()
  }

  disconnectedCallback() {}

  render() {
    this.shadowRoot.innerHTML = template
  }
}

customElements.define('dw-player-moves', PlayerMoves)
