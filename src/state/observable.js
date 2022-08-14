/**
 * Observable base class.
 * @template T
 */
export class Observable {
  /**
   * Set the state of the observable.
   */
  constructor() {
    /** @typedef {(state: T|undefined) => void} Observer */
    /** @type Observer[] */
    this._observers = []
    /** @type T|undefined */
    this._state = undefined
  }

  /**
   * Set the state of the observable to empty.
   */
  reset() {
    this._observers = []
    this._state = undefined
  }

  /**
   * Add a new observable to the list of observers.
   * @param {<T>(state: T) => void} observer
   */
  subscribe(observer) {
    this._observers.push(observer)
  }

  /**
   * Remove an observer from the list of observers.
   * @param {<T>(state: T) => void} observer
   */
  unsubscribe(observer) {
    this._observers = this._observers.filter((o) => o !== observer)
  }

  /**
   * Notify all observers of the new state.
   */
  notify() {
    this._observers.forEach((update) => update(this._state))
  }
}
