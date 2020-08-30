const isValidUrl = require('./formHandler');

test('if URL is valid', () => {
  expect(isValidUrl).toBeTruthy();
});
