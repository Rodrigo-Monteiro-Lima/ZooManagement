const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testa se é uma função', () => {
    expect(typeof handlerElephants).toEqual('function');
  });
  it('Testa se passando um parâmetro undefined ela retorna undefined', () => {
    expect(handlerElephants(undefined)).toBeUndefined();
  });
  it('Testa se passando um parâmetro que não é string ela retorna: Parâmetro inválido, é necessário uma string', () => {
    const nonString = 'Parâmetro inválido, é necessário uma string';
    expect(handlerElephants(1)).toBe(nonString);
    expect(handlerElephants([1])).toBe(nonString);
    expect(handlerElephants(['Rodrigo'])).toBe(nonString);
    expect(handlerElephants({ key: 1 })).toBe(nonString);
    expect(handlerElephants({ key: 'Rodrigo' })).toBe(nonString);
  });
  it('Testa se passando um parâmetro count ela retorna 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Testa se passando um parâmetro names ela retorna um array com os nomes', () => {
    expect(Array.isArray(handlerElephants('names'))).toBeTruthy();
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Testa se passando um parâmetro names ela retorna um array que contém os nomes individuais', () => {
    expect(handlerElephants('names').includes('Jefferson')).toBeTruthy();
    expect(handlerElephants('names').includes('Bea')).toBeTruthy();
    expect(handlerElephants('names').includes('Orval')).toBeTruthy();
    expect(handlerElephants('names').includes('Ilana')).toBeTruthy();
  });
  it('Testa se passando um parâmetro names ela retorna um array que não contém um nome', () => {
    expect(handlerElephants('names').includes('Rodrigo')).toBeFalsy();
  });
  it('Testa se passando um parâmetro averageAge ela retorna a idade média', () => {
    expect(typeof handlerElephants('averageAge')).toBe('number');
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('Testa se passando um parâmetro location ela retorna a localização dos elefantes', () => {
    expect(typeof handlerElephants('location')).toBe('string');
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Testa se passando um parâmetro popularity ela retorna a popularidade dos elefantes', () => {
    expect(typeof handlerElephants('popularity')).toBe('number');
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('Testa se passando um parâmetro names ela retorna um array com os nomes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Testa se passando um parâmetro availability ela retorna um array com os nomes', () => {
    expect(Array.isArray(handlerElephants('availability'))).toBeTruthy();
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('Testa se passando uma string qualquer ela retorna null', () => {
    expect(handlerElephants('Rodrigo')).toBeNull();
  });
});
