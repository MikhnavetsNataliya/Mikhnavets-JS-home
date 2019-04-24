describe('check class string', function checkString() {
  it('check length by array', function lengthArray() {
    expect([1, 2, 3]).toHaveLength(3);
  });
  it('check length by string', function checkMultiply() {
    expect('example').toHaveLength(7);
  });
  it('check length by empty string', function checkMultiply() {
    expect('').not.toHaveLength(7);
  });
});

describe('check methods charAt', function checkStringCharat() {
  it('check returns simbol in string', function checkCharAt() {
    var text = 'example';
    expect(text.charAt(2)).toBe('a');
  });
  it('negative check returns simbol in string', function checkCharAtNegative() {
    var text = 'example';
    expect(text.charAt(2)).not.toEqual('x');
  });
})

describe('check methods return by index', function checkStringIndex() {
  it('check returns simbol in string by index', function checkByIndex() {
    var text = 'example';
    expect(text[2]).toBe('a');
  });
  it('negativ check returns simbol in string by index', function checkByIndexNegative() {
    var text = 'example';
    expect(text[2]).not.toEqual('x');
  });
})

describe('check methods substr', function checkStringIndex() {
  it('check returns simbol against specified index', function checkAgainsSimbol() {
    var text = 'example';
    expect(text.substr(1)).toEqual('xample');
  });
  it('check returns simbol against index indicated length', function checkAgainsSimbol() {
    var text = 'example';
    expect(text.substr(1, 3)).toEqual('xam');
  });
  it('negative check returns simbol against specified index', function checkAgainsSimbol() {
    var text = 'example';
    expect(text.substr(1)).not.toEqual('ample');
  });
  it('negative check returns simbol against index indicated length', function checkAgainsSimbol() {
    var text = 'example';
    expect(text.substr(1, 3)).not.toEqual('amp');
  });
});

describe('check methods slice', function Slice() {
  it('check method slice', function checkSlice() {
    var text = 'example';
    expect(text.slice(2)).toEqual('ample');
  });
  /*it('check method slice against index indicated length', function checkSlice() {
    var text = 'example';
    expect(text.slice(4, 5)).toEqual('pl');
  });*/
  it('negative check slice', function checkSlice() {
    var text = 'example';
    expect(text.slice(1)).not.toEqual('example');
  });
  it('negative check slice against index indicated length', function checkSlice() {
    var text = 'example';
    expect(text.slice(4, 5)).not.toEqual('mp');
  });
});


