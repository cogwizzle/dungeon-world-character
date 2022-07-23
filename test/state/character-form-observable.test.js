import { expect } from '@esm-bundle/chai'
import CharacterFormObservable from '../../src/state/character-form-observable.js'

beforeEach(() => {
  CharacterFormObservable.reset()
})

it('Given I have an instance of the character-form-observable when I save the observable then the character form observable responds with the current state.', () => {
  const result = CharacterFormObservable.save()
  expect(result).to.deep.equal({})
})

it('Given I have an instance of the character-form-observable when I load a character then I set the state of the observable and notify all subscribes.', () => {
  const state = {
    characterName: 'Bartleby',
  }
  let result
  CharacterFormObservable.subscribe((state) => (result = state))
  CharacterFormObservable.loadCharacter(state)
  expect(result).to.deep.equal(state)
})

it('Given I have an instance of the character-form-observable when I notify a user then it saves the current state of the character-form-observable in localStorage under the key "character."', () => {
  const state = {
    characterName: 'Bartleby',
  }
  CharacterFormObservable.loadCharacter(state)
  CharacterFormObservable.notify()
  const result = JSON.parse(localStorage.getItem('character'))
  expect(result).to.deep.equal(state)
})

it('Given I have an instance of the character-form-observable when I subscribe to the observable then my function is added to the list of observables and the current state is passed to that new function.', () => {
  let result
  CharacterFormObservable.subscribe((state) => {
    result = state
  })
  expect(result).to.deep.equal({})
  expect(CharacterFormObservable._observers).to.have.length(1)
})

it('Given I have an instance of the character-form-observable when I set the characterName property then the state should be updated with the characterName and the notify function should be called.', () => {
  let result
  CharacterFormObservable.subscribe((state) => {
    result = state
  })
  CharacterFormObservable.characterName = 'Bartleby'
  expect(CharacterFormObservable._state).to.deep.equal({
    characterName: 'Bartleby',
  })
  expect(result).to.deep.equal({
    characterName: 'Bartleby',
  })
})

it('Given I have an instance of the character-form-observable when I set the level property then the state should be updated with the level and notify function should be called.', () => {
  let result
  CharacterFormObservable.subscribe((state) => {
    result = state
  })
  CharacterFormObservable.level = 1
  expect(CharacterFormObservable._state).to.deep.equal({
    level: 1,
  })
  expect(result).to.deep.equal({
    level: 1,
  })
})

it('Given I have an instance of the character-form-observable when I set the xp property then the state should be updated with the xp and the notify function should be called.', () => {
  let result
  CharacterFormObservable.subscribe((state) => {
    result = state
  })
  CharacterFormObservable.xp = 0
  expect(CharacterFormObservable._state).to.deep.equal({
    xp: 0,
  })
  expect(result).to.deep.equal({
    xp: 0,
  })
})

it('Given I have an instance of the character-form-observable when I set the look property then the state should be updated with the look and the notify function should be called.', () => {
  let result
  CharacterFormObservable.subscribe((state) => {
    result = state
  })
  const look = { eyes: 'wild', body: 'lithe', hair: 'bald' }
  CharacterFormObservable.look = look
  expect(CharacterFormObservable._state).to.deep.equal({
    look,
  })
  expect(result).to.deep.equal({
    look,
  })
})

it('Given I have an instance of the character-form-observable when I set the armor property then the state should be updated with the armor and the notify function should be called.', () => {
  let result
  CharacterFormObservable.subscribe((state) => {
    result = state
  })
  const armor = 1
  CharacterFormObservable.armor = armor
  expect(CharacterFormObservable._state).to.deep.equal({
    armor,
  })
  expect(result).to.deep.equal({
    armor,
  })
})

it('Given I have an instance of the character-form-observable when I set the hitPoints property then the state should be updated with the hitPoints and the notify function should be called.', () => {
  let result
  CharacterFormObservable.subscribe((state) => {
    result = state
  })
  const hitPoints = 1
  CharacterFormObservable.hitPoints = hitPoints
  expect(CharacterFormObservable._state).to.deep.equal({
    hitPoints,
  })
  expect(result).to.deep.equal({
    hitPoints,
  })
})
