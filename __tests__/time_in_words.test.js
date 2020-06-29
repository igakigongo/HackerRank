import timeInWords from '../src/the-time-in-words';

describe('Time In Words', () => {
  test('minutes to', () => {
    expect(timeInWords(5, 47)).toEqual('thirteen minutes to six');
  });

  test('minutes past', () => {
    expect(timeInWords(5, 13)).toEqual('thirteen minutes past five');
  });

  test('top of the hour', () => {
    expect(timeInWords(3, 0)).toEqual("three o' clock");
  });

  test('quarter past', () => {
    expect(timeInWords(7, 15)).toEqual('quarter past seven');
  });

  test('half past', () => {
    expect(timeInWords(7, 30)).toEqual('half past seven');
  });
});
