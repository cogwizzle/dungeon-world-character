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

it('Given I have an instance of the character-form-observable when I set the maxHitPoints property then the state should be updated with the maxHitPoints and the notify function should be called.', () => {
  let result
  CharacterFormObservable.subscribe((state) => {
    result = state
  })
  const maxHitPoints = 1
  CharacterFormObservable.maxHitPoints = maxHitPoints
  expect(CharacterFormObservable._state).to.deep.equal({
    maxHitPoints,
  })
  expect(result).to.deep.equal({
    maxHitPoints,
  })
})

it('Given I have an instance of the character-form-observable when I set the alignment property then the state should be updated with the alignment and the notify function should be called.', () => {
  let result
  CharacterFormObservable.subscribe((state) => {
    result = state
  })
  const alignment = 'good'
  CharacterFormObservable.alignment = alignment
  expect(CharacterFormObservable._state).to.deep.equal({
    alignment,
  })
  expect(result).to.deep.equal({
    alignment,
  })
})

it('Given I have an instance of the character-form-observable when I set the strength property then the state should be updated with the strength and the notify function should be called.', () => {
  let result
  CharacterFormObservable.subscribe((state) => {
    result = state
  })
  const strength = 1
  CharacterFormObservable.strength = strength
  expect(CharacterFormObservable._state).to.deep.equal({
    strength,
  })
  expect(result).to.deep.equal({
    strength,
  })
})

it('Given I have an instance of the character-form-observable when I set the weak property then the state should be updated with the weak and the notify function should be called.', () => {
  let result
  CharacterFormObservable.subscribe((state) => {
    result = state
  })
  const weak = true
  CharacterFormObservable.weak = weak
  expect(CharacterFormObservable._state).to.deep.equal({
    weak,
  })
  expect(result).to.deep.equal({
    weak,
  })
})

it('Given I have an instance of the character-form-observable when I set the dexterity property then the state should be updated with the dexterity and the notify function should be called.', () => {
  let result
  CharacterFormObservable.subscribe((state) => {
    result = state
  })
  const dexterity = 1
  CharacterFormObservable.dexterity = dexterity
  expect(CharacterFormObservable._state).to.deep.equal({
    dexterity,
  })
  expect(result).to.deep.equal({
    dexterity,
  })
})

it('Given I have an instance of the character-form-observable when I set the shaky property then the state should be updated with the shaky value and the notify function should be called.', () => {
  let result
  CharacterFormObservable.subscribe((state) => {
    result = state
  })
  const shaky = true
  CharacterFormObservable.shaky = shaky
  expect(CharacterFormObservable._state).to.deep.equal({
    shaky,
  })
  expect(result).to.deep.equal({
    shaky,
  })
})
