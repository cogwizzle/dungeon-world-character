import CharacterFormObservable from './character-form-observable'

CharacterFormObservable.subscribe((characterForm) => {
  // Save the character form to local storage each time a change happens.
  localStorage.setItem('characterForm', JSON.stringify(characterForm))
})
