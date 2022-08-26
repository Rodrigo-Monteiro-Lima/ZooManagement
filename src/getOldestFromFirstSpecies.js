const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  const findResponsible = employees.find((employee) => id === employee.id).responsibleFor[0];
  const findResidents = species.find((animal) => animal.id.includes(findResponsible)).residents
    .sort((a, b) => b.age - a.age);
  const olderAnimal = findResidents[0];
  const { name, sex, age } = olderAnimal;
  return [name, sex, age];
}

module.exports = getOldestFromFirstSpecies;
