const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const obj = {
    child: entrants.filter((person) => person.age < 18).length,
    adult: entrants.filter((person) => person.age >= 18 && person.age < 50).length,
    senior: entrants.filter((person) => person.age >= 50).length,
  };
  return obj;
}

function calculateEntry(entrants) {
  if (!entrants || Array.isArray(entrants) === false) return 0;
  const peopleAmount = countEntrants(entrants);
  const { child, adult, senior } = peopleAmount;
  const { adult: adultPrice, senior: seniorPrice, child: childPrice } = prices;
  return (child * childPrice) + (adult * adultPrice) + (senior * seniorPrice);
}

module.exports = { calculateEntry, countEntrants };
