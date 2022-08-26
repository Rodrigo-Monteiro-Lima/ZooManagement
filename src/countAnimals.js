const data = require('../data/zoo_data');

const { species } = data;

const getAllAnimals = (acc, curr) => {
  const findSpecie = species.find((animal) => animal.name === curr.name);
  acc[curr.name] = findSpecie.residents.length;
  return acc;
};

const getAnimal = ({ specie, sex }) => {
  if (!sex) {
    const findSpecie = species.find((beast) => beast.name === specie);
    const residentsNumber = findSpecie.residents.length;
    return residentsNumber;
  } const findSpecie = species.find((beast) => beast.name === specie);
  const residentsNumber = findSpecie.residents.filter((beast) => beast.sex === sex).length;
  return residentsNumber;
};

function countAnimals(animal) {
  if (!animal) {
    return species.reduce((acc, curr) => getAllAnimals(acc, curr), {});
  } return getAnimal(animal);
}

module.exports = countAnimals;
