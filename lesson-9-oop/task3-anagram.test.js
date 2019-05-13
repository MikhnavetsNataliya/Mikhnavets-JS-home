var anClean = require('./task3-anagram.html');

describe('Anagram', () => {
  it('The cleansing of anagrams', () => {
    var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];
    expect(anClean(arr)).toEqual(['ЗОВ', 'гробик', 'сектор']);
  });
});
