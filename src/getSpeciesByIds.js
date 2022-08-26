const data = require('../data/zoo_data');

const { species } = data;

const compareIds = (animal, ids) => {
  for (let index = 0; index < ids.length; index += 1) {
    if (animal.id === ids[index]) {
      return true;
    }
  }
};

function getSpeciesByIds(...ids) {
  return species.filter((animal) => compareIds(animal, ids));
}

module.exports = getSpeciesByIds;
