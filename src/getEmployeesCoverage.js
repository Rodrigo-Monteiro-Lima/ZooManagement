const data = require('../data/zoo_data');

const { employees, species } = data;

const getSpecies = (responsibleFor) => species.filter((animal) => {
  let specie;
  for (let index = 0; index < responsibleFor.length; index += 1) {
    if (animal.id === responsibleFor[index]) {
      specie = animal;
    }
  }
  return specie;
}).map((animal) => animal.name);

const getLocations = (responsibleFor) => species.filter((animal) => {
  let location;
  for (let index = 0; index < responsibleFor.length; index += 1) {
    if (animal.id === responsibleFor[index]) {
      location = animal;
    }
  }
  return location;
}).map((animal) => animal.location);

const getAllEmployees = () => {
  const arr = [];
  employees.forEach((employee) => {
    const obj = {
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: getSpecies(employee.responsibleFor),
      locations: getLocations(employee.responsibleFor),
    };
    arr.push(obj);
  });
  return arr;
};

function getEmployeesCoverage(nameOrId) {
  if (!nameOrId) return getAllEmployees();
  const findEmployee = employees.filter((employee) => employee.firstName === nameOrId.name
  || employee.id === nameOrId.id || employee.lastName === nameOrId.name);
  console.log(findEmployee.length);
  if (findEmployee.length === 0) {
    throw new Error('Informações inválidas');
  } else {
    const { id, firstName, lastName, responsibleFor } = findEmployee[0];
    return {
      id,
      fullName: `${firstName} ${lastName}`,
      species: getSpecies(responsibleFor),
      locations: getLocations(responsibleFor),
    };
  }
}

console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;
