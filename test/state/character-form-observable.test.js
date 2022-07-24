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

it('Given I have an instance of the character-form-observable when I set the constitution property then the state should be updated with the constitution value and the notify function should be called.', () => {
  let result
  CharacterFormObservable.subscribe((state) => {
    result = state
  })
  const constitution = 1
  CharacterFormObservable.constitution = constitution
  expect(CharacterFormObservable._state).to.deep.equal({
    constitution,
  })
  expect(result).to.deep.equal({
    constitution,
  })
})

it('Given I have an instance of the character-form-observable when I set the sick property then the state should be updated with the sick value and the notify function should be called.', () => {
  let result
  CharacterFormObservable.subscribe((state) => {
    result = state
  })
  const sick = true
  CharacterFormObservable.sick = sick
  expect(CharacterFormObservable._state).to.deep.equal({
    sick,
  })
  expect(result).to.deep.equal({
    sick,
  })
})

it('Given I have an instance of the character-form-observable when I set the intelligence property then the state should be updated with the intelligence value and the notify function should be called.', () => {
  let result
  CharacterFormObservable.subscribe((state) => {
    result = state
  })
  const intelligence = 1
  CharacterFormObservable.intelligence = intelligence
  expect(CharacterFormObservable._state).to.deep.equal({
    intelligence,
  })
  expect(result).to.deep.equal({
    intelligence,
  })
})

it('Given I have an instance of the character-form-observable when I set the stunned property then the state should be updated with the stunned value and the notify function should be called.', () => {
  let result
  CharacterFormObservable.subscribe((state) => {
    result = state
  })
  const stunned = false
  CharacterFormObservable.stunned = stunned
  expect(CharacterFormObservable._state).to.deep.equal({
    stunned,
  })
  expect(result).to.deep.equal({
    stunned,
  })
})

it('Given I have an instance of the character-form-observable when I set the wisdom property then the state should be updated with the wisdom value and the notify function should be called.', () => {
  let result
  CharacterFormObservable.subscribe((state) => {
    result = state
  })
  const wisdom = 2
  CharacterFormObservable.wisdom = wisdom
  expect(CharacterFormObservable._state).to.deep.equal({
    wisdom,
  })
  expect(result).to.deep.equal({
    wisdom,
  })
})

it('Given I have an instance of the character-form-observable when I set the confused property then the state should be updated with the confused value and the notify function should be called.', () => {
  let result
  CharacterFormObservable.subscribe((state) => {
    result = state
  })
  const confused = true
  CharacterFormObservable.confused = confused
  expect(CharacterFormObservable._state).to.deep.equal({
    confused,
  })
  expect(result).to.deep.equal({
    confused,
  })
})

it('Given I have an instance of the character-form-observable when I set the charisma property then the state should be updated with the charisma value and the notify function should be called.', () => {
  let result
  CharacterFormObservable.subscribe((state) => {
    result = state
  })
  const charisma = 1
  CharacterFormObservable.charisma = charisma
  expect(CharacterFormObservable._state).to.deep.equal({
    charisma,
  })
  expect(result).to.deep.equal({
    charisma,
  })
})

it('Given I have an instance of the character-form-observable when I set the scarred property then the state should be updated with the scarred value and the notify function should be called.', () => {
  let result
  CharacterFormObservable.subscribe((state) => {
    result = state
  })
  const scarred = true
  CharacterFormObservable.scarred = scarred
  expect(CharacterFormObservable._state).to.deep.equal({
    scarred,
  })
  expect(result).to.deep.equal({
    scarred,
  })
})

it('Given I have an instance of the character-form-observable when I set the bonds property then the state should be updated with the bonds value and the notify function should be called.', () => {
  let result
  CharacterFormObservable.subscribe((state) => {
    result = state
  })
  const bonds = ['value']
  CharacterFormObservable.bonds = bonds
  expect(CharacterFormObservable._state).to.deep.equal({
    bonds,
  })
  expect(result).to.deep.equal({
    bonds,
  })
})

it('Given I have an instance of the character-form-observable when I set the race property then the state should be updated with the race value and the notify function should be called.', () => {
  let result
  CharacterFormObservable.subscribe((state) => {
    result = state
  })
  const race = 'halfling'
  CharacterFormObservable.race = race
  expect(CharacterFormObservable._state).to.deep.equal({
    race,
  })
  expect(result).to.deep.equal({
    race,
  })
})

it('Given I have an instance of the character-form-observable when I set the coin property then the state should be updated with the coin value and the notify function should be called.', () => {
  let result
  CharacterFormObservable.subscribe((state) => {
    result = state
  })
  const coin = 0
  CharacterFormObservable.coin = coin
  expect(CharacterFormObservable._state).to.deep.equal({
    coin,
  })
  expect(result).to.deep.equal({
    coin,
  })
})

it('Given I have an instance of the character-form-observable when I set the gear property then the state should be updated with the gear value and the notify function should be called.', () => {
  let result
  CharacterFormObservable.subscribe((state) => {
    result = state
  })
  const gear = ['Woody The Axe']
  CharacterFormObservable.gear = gear
  expect(CharacterFormObservable._state).to.deep.equal({
    gear,
  })
  expect(result).to.deep.equal({
    gear,
  })
})

it('Given I have an instance of the character-form-observable when I set the load property then the state should be updated with the load value and the notify function should be called.', () => {
  let result
  CharacterFormObservable.subscribe((state) => {
    result = state
  })
  const load = 10
  CharacterFormObservable.load = load
  expect(CharacterFormObservable._state).to.deep.equal({
    load,
  })
  expect(result).to.deep.equal({
    load,
  })
})

it('Given I have an instance of the character-form-observable when I set the maxLoad property then the state should be updated with the maxLoad value and the notify function should be called.', () => {
  let result
  CharacterFormObservable.subscribe((state) => {
    result = state
  })
  const maxLoad = 11
  CharacterFormObservable.maxLoad = maxLoad
  expect(CharacterFormObservable._state).to.deep.equal({
    maxLoad,
  })
  expect(result).to.deep.equal({
    maxLoad,
  })
})

it('Given I have an instance of the character-form-observable when I set the moves property then the state should be updated with the moves value and the notify function should be called.', () => {
  let result
  CharacterFormObservable.subscribe((state) => {
    result = state
  })
  const moves = { forTheBloodGod: true }
  CharacterFormObservable.moves = moves
  expect(CharacterFormObservable._state).to.deep.equal({
    moves,
  })
  expect(result).to.deep.equal({
    moves,
  })
})

it('Given I have an instance of the character-form-observable when I set the moves property then the state should be updated with the moves value and the notify function should be called.', () => {
  let result
  CharacterFormObservable.subscribe((state) => {
    result = state
  })
  const moves = 'value'
  CharacterFormObservable.moves = moves
  expect(CharacterFormObservable._state).to.deep.equal({
    moves,
  })
  expect(result).to.deep.equal({
    moves,
  })
})

it('Given I have an instance of the character-form-observable when I set the notes property then the state should be updated with the notes value and the notify function should be called.', () => {
  let result
  CharacterFormObservable.subscribe((state) => {
    result = state
  })
  const notes = 'Hello World!'
  CharacterFormObservable.notes = notes
  expect(CharacterFormObservable._state).to.deep.equal({
    notes,
  })
  expect(result).to.deep.equal({
    notes,
  })
})

it('Given I have an instance of the character-form-observable when I set the otherDice property then the state should be updated with the otherDice value and the notify function should be called.', () => {
  let result
  CharacterFormObservable.subscribe((state) => {
    result = state
  })
  const otherDice = '11'
  CharacterFormObservable.otherDice = otherDice
  expect(CharacterFormObservable._state).to.deep.equal({
    otherDice,
  })
  expect(result).to.deep.equal({
    otherDice,
  })
})
