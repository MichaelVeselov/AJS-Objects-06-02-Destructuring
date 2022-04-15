import getAttack from '../app.js';

describe('function getAttack should return', () => {
  const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
      },
    ],
  };

  test('2 types of attack: with and without description', () => {
    const result = getAttack(character);

    const expected = [
      {
        id: 8, name: 'Двойной выстрел', icon: 'http://...', description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9, name: 'Нокаутирующий удар', icon: 'http://...', description: 'Описание недоступно',
      },
    ];

    expect(result).toEqual(expected);
  });
});
