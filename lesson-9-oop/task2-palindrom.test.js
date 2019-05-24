var isPal = require('./task2-palindrom.html');

describe('Palidrom', () => {
  it('Number in string is palindrom', () => {
    var string = '12321';
    expect(isPal(string)).toBe(true);
  });

  it('Number in string is not palindrom', () => {
    var string = '123212';
    expect(isPal(string)).toBe(false);
  });

  it('Simple string is palindrome', () => {
    var string = 'Anna';
    expect(isPal(string)).toBe(true);
  });

  it('Few words is palindrome', () => {
    var string = 'А роза упала на лапу Азора';
    expect(isPal(string)).toBe(true);
  });

  it('Simple string is not palindrome', () => {
    var string = 'Вася';
    expect(isPal(string)).toBe(false);
  });
});