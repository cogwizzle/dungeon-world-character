import { Observable } from './observable'

class ChracterFormObservable extends Observable {
  constructor() {
    super()
    const value = JSON.parse(localStorage.getItem('character')) || {}
    this._state = {
      ...value,
    }
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
}

const SingletonCharacterFormObservable = new ChracterFormObservable()

export default SingletonCharacterFormObservable
