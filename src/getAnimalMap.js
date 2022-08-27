const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const findSpecies = (obj) => {
  species.forEach((animal) => obj[animal.location].push(animal.name));
  return obj;
};

const createObj = () => {
  const obj = species.reduce((acc, curr) => {
    if (!acc[curr.location]) {
      acc[curr.location] = [];
    }
    return acc;
  }, {});
  return obj;
};

const include = (obj) => {
  let objResidents;
  species.forEach((animal) => {
    objResidents = {
      [animal.name]: (animal.residents).map((specie) => specie.name),
    };
    obj[animal.location].push(objResidents);
  });
  return obj;
};

const sexFilter = (obj, gender, sorted) => {
  let objResidents;
  if (!sorted) {
    species.forEach((animal) => {
      objResidents = { [animal.name]: (animal.residents).filter((specie) => specie.sex === gender)
        .map((specie) => specie.name),
      };
      obj[animal.location].push(objResidents);
    });
    return obj;
  }
  species.forEach((animal) => {
    objResidents = { [animal.name]: (animal.residents).filter((specie) => specie.sex === gender)
      .map((specie) => specie.name).sort(),
    };
    obj[animal.location].push(objResidents);
  });
  return obj;
};

const sort = (obj) => {
  let objResidents;
  species.forEach((animal) => {
    objResidents = {
      [animal.name]: (animal.residents).map((specie) => specie.name).sort(),
    };
    console.log(objResidents);
    obj[animal.location].push(objResidents);
  });
  return obj;
};

const getResidents = (options, obj) => {
  const { sex: gender, sorted } = options;
  if (!sorted && !gender) {
    return include(obj);
  }
  if (sorted && !gender) {
    return sort(obj);
  } return sexFilter(obj, gender, sorted);
};

function getAnimalMap(options) {
  const obj = createObj();
  if (!options) {
    const specie = findSpecies(obj);
    return specie;
  }
  const { includeNames } = options;
  if (!includeNames) {
    const specie = findSpecies(obj);
    return specie;
  } return getResidents(options, obj);
}

module.exports = getAnimalMap;
