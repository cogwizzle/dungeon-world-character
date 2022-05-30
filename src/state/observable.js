export class Observable {
  _observers
  _state
  constructor() {
    this._observers = []
    this._state = undefined
  }

  subscribe(observer) {
    this._observers.push(observer)
  }

  unsubscribe(observer) {
    this._observers = this._observers.filter((o) => o !== observer)
  }

  notify() {
    this._observers.forEach((update) => update(this._state))
  }
}
