const data = require('../data/zoo_data');

const { species } = data;
const { hours } = data;

const getAnimals = (day) => {
  if (day === 'Monday') return 'The zoo will be closed!';
  return species.filter((animal) => animal.availability.includes(day))
    .map((animal) => animal.name);
};

const getDay = (scheduleTarget) => {
  if (scheduleTarget !== 'Monday') {
    const days = Object.entries(hours);
    const findDay = days.find((day) => day.includes(scheduleTarget));
    const [day] = findDay;
    const { open, close } = findDay[1];
    return {
      [day]: {
        officeHour: `Open from ${open}am until ${close}pm`,
        exhibition: getAnimals(scheduleTarget),
      },
    };
  } return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
  };
};

const getHour = (curr) => {
  if (curr === 'Monday') return 'CLOSED';
  const days = Object.entries(hours);
  const findDay = days.find((day) => day.includes(curr));
  const { open, close } = findDay[1];
  return `Open from ${open}am until ${close}pm`;
};

const getAllDays = () => {
  const daysArr = species.flatMap((animal) => animal.availability).sort();
  daysArr.push('Monday');
  return daysArr.reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = {
        officeHour: getHour(curr),
        exhibition: getAnimals(curr),
      };
    }
    return acc;
  }, {});
};

const allDays = getAllDays();
// Trecho de código sobre organizar os dias por ordem retirado da página: https://stackoverflow.com/questions/70258706/how-to-sort-an-object-based-on-key-weekday
const sortByDays = () => {
  const sorter = {
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
    Sunday: 7,
    Monday: 8,
  };
  const newMap = {};
  Object.keys(allDays)
    .sort((a, b) => sorter[a] - sorter[b])
    .forEach((item) => {
      newMap[item] = allDays[item];
    });
  return newMap;
};

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) return sortByDays();
  if (scheduleTarget.includes('day')) {
    return getDay(scheduleTarget);
  } if (species.find((animal) => animal.name.includes(scheduleTarget))) {
    return species.find((animal) => animal.name === scheduleTarget).availability;
  }
  return sortByDays();
}

module.exports = getSchedule;
