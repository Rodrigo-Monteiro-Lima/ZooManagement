const getOpeningHours = require('../src/getOpeningHours');

const resultOpen = 'The zoo is open';
const resultClose = 'The zoo is closed';
const dayError = 'The day must be valid. Example: Monday';
const hourError = 'The hour should represent a number';
const amPmError = 'The abbreviation must be \'AM\' or \'PM\'';
const minuteError = 'The minutes should represent a number';

describe('Testes da função getOpeningHours', () => {
  it('Testa se getOpenningHours', () => {
    expect(typeof getOpeningHours).toBe('function');
  });
  it('Testa se o retorno de getOpenningHours é uma string', () => {
    expect(typeof getOpeningHours('Monday', '09:00-AM')).toBe('string');
    expect(typeof getOpeningHours('Sunday', '10:00-AM')).toBe('string');
    expect(typeof getOpeningHours('Tuesday', '12:00-AM')).toBe('string');
    expect(typeof getOpeningHours('Wednesday', '2:00-PM')).toBe('string');
    expect(typeof getOpeningHours('Thursday', '09:00-PM')).toBe('string');
    expect(typeof getOpeningHours('Friday', '05:00-PM')).toBe('string');
    expect(typeof getOpeningHours('Saturday', '11:00-AM')).toBe('string');
  });
  it('Testa se o colocando Monday e algum horário como parâmetro retorna que está fechado', () => {
    const result = 'The zoo is closed';
    expect(getOpeningHours('Monday', '04:00-AM')).toBe(result);
    expect(getOpeningHours('Monday', '07:00-PM')).toBe(result);
    expect(getOpeningHours('Monday', '09:00-AM')).toBe(result);
    expect(getOpeningHours('Monday', '12:00-AM')).toBe(result);
    expect(getOpeningHours('Monday', '03:00-PM')).toBe(result);
    expect(getOpeningHours('Monday', '07:00-PM')).toBe(result);
    expect(getOpeningHours('Monday', '10:00-PM')).toBe(result);
    expect(getOpeningHours('Monday', '00:00-PM')).toBe(result);
  });
  it('Testa se o colocando Tuesday e algum horário como parâmetro retorna que está aberto', () => {
    expect(getOpeningHours('Tuesday', '08:00-AM')).toBe(resultOpen);
    expect(getOpeningHours('Tuesday', '10:00-AM')).toBe(resultOpen);
    expect(getOpeningHours('Tuesday', '02:00-PM')).toBe(resultOpen);
    expect(getOpeningHours('Tuesday', '04:00-PM')).toBe(resultOpen);
    expect(getOpeningHours('Tuesday', '05:00-PM')).toBe(resultOpen);
  });
  it('Testa se o colocando Wednesday e algum horário como parâmetro retorna que está aberto', () => {
    expect(getOpeningHours('Wednesday', '08:00-AM')).toBe(resultOpen);
    expect(getOpeningHours('Wednesday', '10:00-AM')).toBe(resultOpen);
    expect(getOpeningHours('Wednesday', '02:00-PM')).toBe(resultOpen);
    expect(getOpeningHours('Wednesday', '04:00-PM')).toBe(resultOpen);
    expect(getOpeningHours('Wednesday', '05:00-PM')).toBe(resultOpen);
  });
  it('Testa se o colocando Thursday e algum horário como parâmetro retorna que está aberto', () => {
    expect(getOpeningHours('Thursday', '10:00-AM')).toBe(resultOpen);
    expect(getOpeningHours('Thursday', '02:00-PM')).toBe(resultOpen);
    expect(getOpeningHours('Thursday', '04:00-PM')).toBe(resultOpen);
    expect(getOpeningHours('Thursday', '06:00-PM')).toBe(resultOpen);
    expect(getOpeningHours('Thursday', '07:00-PM')).toBe(resultOpen);
  });
  it('Testa se o colocando Friday e algum horário como parâmetro retorna que está aberto', () => {
    expect(getOpeningHours('Friday', '10:00-AM')).toBe(resultOpen);
    expect(getOpeningHours('Friday', '02:00-PM')).toBe(resultOpen);
    expect(getOpeningHours('Friday', '04:00-PM')).toBe(resultOpen);
    expect(getOpeningHours('Friday', '06:00-PM')).toBe(resultOpen);
    expect(getOpeningHours('Friday', '07:00-PM')).toBe(resultOpen);
  });
  it('Testa se o colocando Saturday e algum horário como parâmetro retorna que está aberto', () => {
    expect(getOpeningHours('Saturday', '08:00-AM')).toBe(resultOpen);
    expect(getOpeningHours('Saturday', '10:00-AM')).toBe(resultOpen);
    expect(getOpeningHours('Saturday', '02:00-PM')).toBe(resultOpen);
    expect(getOpeningHours('Saturday', '04:00-PM')).toBe(resultOpen);
    expect(getOpeningHours('Saturday', '06:00-PM')).toBe(resultOpen);
    expect(getOpeningHours('Saturday', '08:00-PM')).toBe(resultOpen);
    expect(getOpeningHours('Saturday', '09:00-PM')).toBe(resultOpen);
  });
  it('Testa se o colocando Sunday e algum horário como parâmetro retorna que está aberto', () => {
    expect(getOpeningHours('Sunday', '08:00-AM')).toBe(resultOpen);
    expect(getOpeningHours('Sunday', '10:00-AM')).toBe(resultOpen);
    expect(getOpeningHours('Sunday', '02:00-PM')).toBe(resultOpen);
    expect(getOpeningHours('Sunday', '04:00-PM')).toBe(resultOpen);
    expect(getOpeningHours('Sunday', '06:00-PM')).toBe(resultOpen);
    expect(getOpeningHours('Sunday', '07:00-PM')).toBe(resultOpen);
  });
  it('Testa se não colocando parâmetros retorna que a lista de horário de funcionamento', () => {
    const daysList = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(typeof getOpeningHours()).toBe('object');
    expect(getOpeningHours()).toEqual(daysList);
  });
  it('Testa se passando algum dia de funcionamento fora do horário como parâmetro retorna que está fechado', () => {
    expect(getOpeningHours('Tuesday', '06:15-AM')).toBe(resultClose);
    expect(getOpeningHours('Tuesday', '08:30-PM')).toBe(resultClose);
    expect(getOpeningHours('Wednesday', '05:50-AM')).toBe(resultClose);
    expect(getOpeningHours('Wednesday', '10:20-PM')).toBe(resultClose);
    expect(getOpeningHours('Thursday', '07:45-AM')).toBe(resultClose);
    expect(getOpeningHours('Thursday', '10:55-PM')).toBe(resultClose);
    expect(getOpeningHours('Friday', '09:26-AM')).toBe(resultClose);
    expect(getOpeningHours('Friday', '11:47-PM')).toBe(resultClose);
    expect(getOpeningHours('Saturday', '03:50-AM')).toBe(resultClose);
    expect(getOpeningHours('Saturday', '11:37-PM')).toBe(resultClose);
    expect(getOpeningHours('Sunday', '01:06-AM')).toBe(resultClose);
    expect(getOpeningHours('Sunday', '08:01-PM')).toBe(resultClose);
  });
  it('Testa se ao passar um dia inválido retorna um erro', () => {
    expect(() => getOpeningHours('Wednes', '09:00-AM')).toThrow(dayError);
    expect(() => getOpeningHours('Rodrigo', '09:00-AM')).toThrow(dayError);
  });
  it('Testa se ao passar horas inválidas retorna um erro', () => {
    expect(() => getOpeningHours('Wednesday', 'RO:00-AM')).toThrow(hourError);
    expect(() => getOpeningHours('Friday', 'Dr:00-AM')).toThrow(hourError);
  });
  it('Testa se ao passar minutos inválidos retorna um erro', () => {
    expect(() => getOpeningHours('Wednesday', '10:IG-AM')).toThrow(minuteError);
    expect(() => getOpeningHours('Friday', '08:GO-AM')).toThrow(minuteError);
  });
  it('Testa se ao passar abreviações inválidas retorna um erro', () => {
    expect(() => getOpeningHours('Wednesday', '10:00-Ro')).toThrow(amPmError);
    expect(() => getOpeningHours('Friday', '08:50-dR')).toThrow(amPmError);
  });
  it('Testa se ao passar horas fora do escopo retorna um erro', () => {
    expect(() => getOpeningHours('Wednesday', '13:00-AM')).toThrow('The hour must be between 0 and 12');
    expect(() => getOpeningHours('Friday', '20:50-PM')).toThrow('The hour must be between 0 and 12');
  });
  it('Testa se ao passar minutos fora do escopo retorna um erro', () => {
    expect(() => getOpeningHours('Wednesday', '10:78-AM')).toThrow('The minutes must be between 0 and 59');
    expect(() => getOpeningHours('Friday', '08:90-PM')).toThrow('The minutes must be between 0 and 59');
  });
});
