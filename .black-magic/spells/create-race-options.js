const { camelCase } = require('change-case')

module.exports = (spellbook) => {
  spellbook.createRaceOptions = (raceOptions) => {
    return raceOptions
      .map(
        ([race, desc]) =>
          `    <label for="race-${camelCase(race)}" class="flex flex-col">
      <div>${race}</div>
      <div class="text-xs italic">${desc}</div>
    </label>`
      )
      .join('\n')
  }
}
