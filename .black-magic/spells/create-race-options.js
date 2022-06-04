const { camelCase } = require('change-case')

module.exports = (spellbook) => {
  spellbook.createRaceOptions = (raceOptions) => {
    return raceOptions
      .map(
        ([race, desc]) =>
          `  <div class="flex flex-row items-center">
    <input type="radio" name="race" id="race-${camelCase(
      race
    )}" class="mx-2" value="${race}" />
    <label for="race-${camelCase(race)}" class="flex flex-col">
      <div>${race}</div>
      <div class="text-xs italic">${desc}</div>
    </label>
  </div>`
      )
      .join('\n')
  }
}
