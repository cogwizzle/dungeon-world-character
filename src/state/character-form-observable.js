import { Observable } from './observable'

/**
 * @typedef {Object} CharacterFormObservableState
 * @property {string} [characterName] The name of the character.
 * @property {number} [level] The level of the character.
 * @property {number} [xp] The experience points of the character.
 * @property {Object} [look] The appearance of the character.
 * @property {number} [armor] The armor value of the character.
 * @property {number} [hitPoints] The hit points of the character.
 * @property {number} [maxHitPoints] The maximum hit points of the character.
 * @property {string} [alignment] The alignment of the character.
 * @property {number} [strength] The strength of the character.
 * @property {boolean} [weak] The debility of weak for the character.
 * @property {number} [dexterity] The dexterity of the character.
 * @property {boolean} [shaky] The debility of shaky for the character.
 * @property {number} [constitution] The constitution of the character.
 * @property {boolean} [sick] The debility of sick for the character.
 * @property {number} [intelligence] The intelligence of the character.
 * @property {boolean} [stunned] The debility of stunned for the character.
 * @property {number} [wisdom] The wisdom of the character.
 * @property {boolean} [confused] The debility of confused for the character.
 * @property {number} [charisma] The charisma of the character.
 * @property {boolean} [scarred] The debility of scarred for the character.
 * @property {string[]} [bonds] The bonds of the character.
 * @property {string} [race] The race of the character.
 * @property {number} [coin] The amount of coins a character has.
 * @property {string[]} [gear] The equipment the character is carrying.
 * @property {number} [load] The current load value of the character.
 * @property {number} [maxLoad] The maximum load value of the character.
 * @property {Object|string} [moves] The moves the character can perform.
 * @property {string} [notes] The notes on the character sheet.
 * @property {number} [otherDice] The number on the dice for the custom character class.
 * @property {string} [characterClass] The character's class.
 */

/**
 * @class CharacterFormObservable Observable class for the character form state.
 */
class ChracterFormObservable extends Observable {
  /**
   * Create the character form observable instance.
   * If the state is in local storage load it into the observable state.
   */
  constructor() {
    super()
    const value = JSON.parse(localStorage.getItem('character') || '') || {}
    this._state = {
      ...value,
    }
  }

  /**
   * Reset the state of the character form observable.
   */
  reset() {
    super.reset()
    /** @type {CharacterFormObservableState} */
    this._state = {}
    localStorage.removeItem('character')
    window.location.reload()
  }

  /**
   * Get the state of the character form observable.
   * @returns Current observable state.
   */
  save() {
    return this._state
  }

  /**
   * Load the character form observable state from an outside source.
   * @param {CharacterFormObservableState} state
   */
  loadCharacter(state) {
    this._state = state
    this.notify()
  }

  /**
   * Notify all observers of the updated state.
   * Writes the state to local storage.
   */
  notify() {
    super.notify()
    localStorage.setItem('character', JSON.stringify(this._state))
  }

  /**
   * Subscribe to the observable, and get updated of the state immediately.
   * @param {(state: CharacterFormObservableState) => void} observer Function that takes in the current state.
   */
  subscribe(observer) {
    super.subscribe(observer)
    observer(this._state)
  }

  /**
   * Set the character name.
   * @param {string} value The name of the character.
   */
  set characterName(value) {
    this._state = {
      ...this._state,
      characterName: value,
    }
    this.notify()
  }

  /**
   * Set the character level.
   * @param {number} value The level of the character.
   */
  set level(value) {
    this._state = {
      ...this._state,
      level: value,
    }
    this.notify()
  }

  /**
   * Set the character experience points.
   * @param {number} value The experience points of the character.
   */
  set xp(value) {
    this._state = {
      ...this._state,
      xp: value,
    }
    this.notify()
  }

  /**
   * Set the appearance attributes of a character.
   * @param {Object} value The look attributes of a character.
   */
  set look(value) {
    this._state = {
      ...this._state,
      look: value,
    }
    this.notify()
  }

  /**
   * Set the armor value for the character.
   * @param {number} value The armor value of the character.
   */
  set armor(value) {
    this._state = {
      ...this._state,
      armor: value,
    }
    this.notify()
  }

  /**
   * Set the character hit point value.
   * @param {number} value The hit point value of the character.
   */
  set hitPoints(value) {
    this._state = {
      ...this._state,
      hitPoints: value,
    }
    this.notify()
  }

  /**
   * Set the character maximum hit points value.
   * @param {number} value The maximum hit point value of the character.
   */
  set maxHitPoints(value) {
    this._state = {
      ...this._state,
      maxHitPoints: value,
    }
    this.notify()
  }

  /**
   * Set the character alignment value.
   * @param {string} value The alignment value of the character.
   */
  set alignment(value) {
    this._state = {
      ...this._state,
      alignment: value,
    }
    this.notify()
  }

  /**
   * Set the character strength value.
   * @param {number} value The strength value of the character.
   */
  set strength(value) {
    this._state = {
      ...this._state,
      strength: value,
    }
    this.notify()
  }

  /**
   * Set the debility of weak for the character.
   * @param {boolean} value The debility of weak for the character.
   */
  set weak(value) {
    this._state = {
      ...this._state,
      weak: value,
    }
    this.notify()
  }

  /**
   * Set the character dexterity value.
   * @param {number} value The dexterity value of the character.
   */
  set dexterity(value) {
    this._state = {
      ...this._state,
      dexterity: value,
    }
    this.notify()
  }

  /**
   * Set the debility of shaky for the character.
   * @param {boolean} value The debility of shaky for the character.
   */
  set shaky(value) {
    this._state = {
      ...this._state,
      shaky: value,
    }
    this.notify()
  }

  /**
   * Set the character constitution value.
   * @param {number} value The constitution value of the character.
   */
  set constitution(value) {
    this._state = {
      ...this._state,
      constitution: value,
    }
    this.notify()
  }

  /**
   * Set the debility of sick for the character.
   * @param {boolean} value The debility of sick for the character.
   */
  set sick(value) {
    this._state = {
      ...this._state,
      sick: value,
    }
    this.notify()
  }

  /**
   * Set the character intelligence value.
   * @param {number} value The intelligence value of the character.
   */
  set intelligence(value) {
    this._state = {
      ...this._state,
      intelligence: value,
    }
    this.notify()
  }

  /**
   * Set the debility of stunned for the character.
   * @param {boolean} value The debility of stunned for the character.
   */
  set stunned(value) {
    this._state = {
      ...this._state,
      stunned: value,
    }
    this.notify()
  }

  /**
   * Set the character wisdom value.
   * @param {number} value The wisdom value of the character.
   */
  set wisdom(value) {
    this._state = {
      ...this._state,
      wisdom: value,
    }
    this.notify()
  }

  /**
   * Set the debility of confused for the character.
   * @param {boolean} value The debility of confused for the character.
   */
  set confused(value) {
    this._state = {
      ...this._state,
      confused: value,
    }
    this.notify()
  }

  /**
   * Set the character charisma value.
   * @param {number} value The charisma value of the character.
   */
  set charisma(value) {
    this._state = {
      ...this._state,
      charisma: value,
    }
    this.notify()
  }

  /**
   * Set the debility of scarred for the character.
   * @param {boolean} value The debility of scarred for the character.
   */
  set scarred(value) {
    this._state = {
      ...this._state,
      scarred: value,
    }
    this.notify()
  }

  /**
   * Set the character bond value.
   * @param {string[]} value The bond value of the character.
   */
  set bonds(value) {
    this._state = {
      ...this._state,
      bonds: value.filter((bond) => bond.trim() !== ''),
    }
    this.notify()
  }

  /**
   * Set the character race value.
   * @param {string} value The playable race of the character.
   */
  set race(value) {
    this._state = {
      ...this._state,
      race: value,
    }
    this.notify()
  }

  /**
   * Set the character coin value.
   * @param {number} value The amount of coins the character has.
   */
  set coin(value) {
    this._state = {
      ...this._state,
      coin: value,
    }
    this.notify()
  }

  /**
   * Set the gear the character is carrying.
   * @param {string[]} value The gear the character is carrying.
   */
  set gear(value) {
    this._state = {
      ...this._state,
      gear: value.filter((gear) => gear.trim() !== ''),
    }
    this.notify()
  }

  /**
   * Set the character's current load value.
   * @param {number} value The current load value of the character.
   */
  set load(value) {
    this._state = {
      ...this._state,
      load: value,
    }
    this.notify()
  }

  /**
   * Set the character's maximum load value.
   * @param {number} value The maximum load value of the character.
   */
  set maxLoad(value) {
    this._state = {
      ...this._state,
      maxLoad: value,
    }
    this.notify()
  }

  /**
   * Set the character's current moves.
   * @param {Object|string} value The current moves of the character.
   */
  set moves(value) {
    this._state = {
      ...this._state,
      moves: value,
    }
    this.notify()
  }

  /**
   * Set the notes on the character sheet.
   * @param {string} value The notes on the character sheet.
   */
  set notes(value) {
    this._state = {
      ...this._state,
      notes: value,
    }
    this.notify()
  }

  /**
   * Set the dice value of a custom character class.
   * @param {number} value The dice value of a custom character class.
   */
  set otherDice(value) {
    this._state = {
      ...this._state,
      otherDice: value,
    }
    this.notify()
  }

  /**
   * Set the character's current class value.
   * It also clears the following properties:
   *  - look
   *  - moves
   *  - race
   *  - alignment
   *  - otherDice
   * @param {string} value The current class value of the character.
   */
  set characterClass(value) {
    this._state = {
      ...this._state,
      characterClass: value,
      look: undefined,
      moves: undefined,
      race: undefined,
      alignment: undefined,
      otherDice: undefined,
    }
    this.notify()
  }
}

const SingletonCharacterFormObservable = new ChracterFormObservable()

export default SingletonCharacterFormObservable
