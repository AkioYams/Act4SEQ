const add = require('./math');

test('adds 2 + 2 to equal 5', () => {
  expect(add(2,2)).toBe(4);
});
