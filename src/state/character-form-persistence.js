import CharacterFormObservable from './character-form-observable'

CharacterFormObservable.subscribe((characterForm) => {
  // If the character form has been reset.
  if (Object.keys(characterForm).length === 0) {

    // Remove the character form from local storage.
    localStorage.removeItem('character')

    // Reload the page.
    window.location.reload()
  }
  // Save the character form to local storage each time a change happens.
  localStorage.setItem('character', JSON.stringify(characterForm))
})
