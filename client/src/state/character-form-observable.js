import { Observable } from './observable'

class ChracterFormObservable extends Observable {
  constructor() {
    super()
    const value = JSON.parse(localStorage.getItem('character')) || {}
    this._state = {
      ...value,
    }
  }

  reset() {
    super.reset()
    this._state = {}
    localStorage.removeItem('character')
  }

  save() {
    return this._state
  }

  loadCharacter(state) {
    this._state = state
    this.notify()
  }

  notify() {
    super.notify()
    localStorage.setItem('character', JSON.stringify(this._state))
  }

  subscribe(observer) {
    super.subscribe(observer)
    observer(this._state)
  }

  set characterName(value) {
    this._state = {
      ...this._state,
      characterName: value,
    }
    this.notify()
  }

  set level(value) {
    this._state = {
      ...this._state,
      level: value,
    }
    this.notify()
  }

  set xp(value) {
    this._state = {
      ...this._state,
      xp: value,
    }
    this.notify()
  }

  set look(value) {
    this._state = {
      ...this._state,
      look: value,
    }
    this.notify()
  }

  set armor(value) {
    this._state = {
      ...this._state,
      armor: value,
    }
    this.notify()
  }

  set hitPoints(value) {
    this._state = {
      ...this._state,
      hitPoints: value,
    }
    this.notify()
  }

  set maxHitPoints(value) {
    this._state = {
      ...this._state,
      maxHitPoints: value,
    }
    this.notify()
  }

  set alignment(value) {
    this._state = {
      ...this._state,
      alignment: value,
    }
    this.notify()
  }

  set strength(value) {
    this._state = {
      ...this._state,
      strength: value,
    }
    this.notify()
  }

  set weak(value) {
    this._state = {
      ...this._state,
      weak: value,
    }
    this.notify()
  }

  set dexterity(value) {
    this._state = {
      ...this._state,
      dexterity: value,
    }
    this.notify()
  }

  set shaky(value) {
    this._state = {
      ...this._state,
      shaky: value,
    }
    this.notify()
  }

  set constitution(value) {
    this._state = {
      ...this._state,
      constitution: value,
    }
    this.notify()
  }

  set sick(value) {
    this._state = {
      ...this._state,
      sick: value,
    }
    this.notify()
  }

  set intelligence(value) {
    this._state = {
      ...this._state,
      intelligence: value,
    }
    this.notify()
  }

  set stunned(value) {
    this._state = {
      ...this._state,
      stunned: value,
    }
    this.notify()
  }

  set wisdom(value) {
    this._state = {
      ...this._state,
      wisdom: value,
    }
    this.notify()
  }

  set confused(value) {
    this._state = {
      ...this._state,
      confused: value,
    }
    this.notify()
  }

  set charisma(value) {
    this._state = {
      ...this._state,
      charisma: value,
    }
    this.notify()
  }

  set scarred(value) {
    this._state = {
      ...this._state,
      scarred: value,
    }
    this.notify()
  }

  set bonds(value) {
    this._state = {
      ...this._state,
      bonds: value.filter((bond) => bond.trim() !== ''),
    }
    this.notify()
  }

  set race(value) {
    this._state = {
      ...this._state,
      race: value,
    }
    this.notify()
  }

  set coin(value) {
    this._state = {
      ...this._state,
      coin: value,
    }
    this.notify()
  }

  set gear(value) {
    this._state = {
      ...this._state,
      gear: value.filter((gear) => gear.trim() !== ''),
    }
    this.notify()
  }

  set load(value) {
    this._state = {
      ...this._state,
      load: value,
    }
    this.notify()
  }

  set maxLoad(value) {
    this._state = {
      ...this._state,
      maxLoad: value,
    }
    this.notify()
  }

  set moves(value) {
    this._state = {
      ...this._state,
      moves: value,
    }
    this.notify()
  }

  set notes(value) {
    this._state = {
      ...this._state,
      notes: value,
    }
    this.notify()
  }

  set otherDice(value) {
    this._state = {
      ...this._state,
      otherDice: value,
    }
    this.notify()
  }

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
