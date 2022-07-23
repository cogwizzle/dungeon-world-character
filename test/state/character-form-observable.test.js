import { expect } from '@esm-bundle/chai'
import ChracterFormObservable from '../../src/state/character-form-observable.js'

beforeEach(() => {
  ChracterFormObservable.reset()
})

it('Given I have an instance of the character-form-observable when I save the observable then the character form observable responds with the current state.', () => {
  const result = ChracterFormObservable.save()
  expect(result).to.deep.equal({})
})

it('Given I have an instance of the character-form-observable when I load a character then I set the state of the observable and notify all subscribes.', () => {
  const state = {
    characterName: 'Bartleby',
  }
  let result
  ChracterFormObservable.subscribe((state) => (result = state))
  ChracterFormObservable.loadCharacter(state)
  expect(result).to.deep.equal(state)
})

it('Given I have an instance of the character-form-observable when I notify a user then it saves the current state of the character-form-observable in localStorage under the key "character."', () => {
  const state = {
    characterName: 'Bartleby',
  }
  ChracterFormObservable.loadCharacter(state)
  ChracterFormObservable.notify()
  const result = JSON.parse(localStorage.getItem('character'))
  expect(result).to.deep.equal(state)
})

it('Given I have an instance of the character-form-observable when I subscribe to the observable then my function is added to the list of observables and the current state is passed to that new function.', () => {
  let result
  ChracterFormObservable.subscribe((state) => {
    result = state
  })
  expect(result).to.deep.equal({})
  expect(ChracterFormObservable._observers).to.have.length(1)
})

it('Given I have an instance of the character-form-observable when I set the characterName property then the state should be updated with the characterName and the notify function should be called.', () => {
  let result
  ChracterFormObservable.subscribe((state) => {
    result = state
  })
  ChracterFormObservable.characterName = 'Bartleby'
  expect(ChracterFormObservable._state).to.deep.equal({
    characterName: 'Bartleby',
  })
  expect(result).to.deep.equal({
    characterName: 'Bartleby',
  })
})

it('Given I have an instance of the character-form-observable when I set the level property then the state should be updated with the level and notify function should be called.', () => {
  let result
  ChracterFormObservable.subscribe((state) => {
    result = state
  })
  ChracterFormObservable.level = 1
  expect(ChracterFormObservable._state).to.deep.equal({
    level: 1,
  })
  expect(result).to.deep.equal({
    level: 1,
  })
})

it('Given I have an instance of the character-form-observable when I set the xp property then the state should be updated with the xp and the notify function should be called.', () => {
  let result
  ChracterFormObservable.subscribe((state) => {
    result = state
  })
  ChracterFormObservable.xp = 0
  expect(ChracterFormObservable._state).to.deep.equal({
    xp: 0,
  })
  expect(result).to.deep.equal({
    xp: 0,
  })
})
