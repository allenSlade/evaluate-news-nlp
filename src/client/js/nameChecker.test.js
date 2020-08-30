const names = require ('./nameChecker');

describe('not.objectContaining', () => {
  const names = {checkForName: '[Function checkForName]'};

  it('matches if the actual object does not contain expected key: value pairs', () => {
    expect({foo: 'bar'}).toEqual(expect.not.objectContaining(names));
  });
});
