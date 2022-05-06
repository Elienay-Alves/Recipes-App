import drinkApiRequest from '../helpers/drinkApiRequest';

describe('Testa a função drinkApiRequest', () => {
  test('Se a função realiza um fetch', () => {
    expect(typeof (drinkApiRequest)).toBe('function');
  });
});
