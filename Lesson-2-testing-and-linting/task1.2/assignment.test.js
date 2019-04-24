describe('check assignment with plus', function assignPlus() {
  it('check assignment with plus of integers', function assignSum() {
    var sum = 8;
    expect(sum += 2).toBe(10);
  });
  it('check assignment with subtract of floating-point', function assignSum() {
    var sum = 0.8;
    expect(sum += 0.2).toBeCloseTo(1, 5);
  });
});

describe('check assignment with minus', function assignMinus() {
  it('check assignment with subtract of integers', function assignSubtract() {
    var subtract = 8;
    expect(subtract -= 2).toBe(6);
  });
  it('check assignment with subtract of floating-point', function assignSubtract() {
    var a = 0.8;
    expect(a -= 0.2).toBeCloseTo(0.6, 5);
  });
});

describe('check assignment with multiply', function assignMultiply() {
  it('check assignment with multiply of integers', function assignMulti() {
    var a = 8;
    expect(a *= 2).toBe(16);
  });
  it('check assignment with multiply of floating-point', function assignMulti() {
    var a = 0.8;
    expect(a *= 2).toBeCloseTo(1.6, 5);
  });
  it('check assignment with multiply floating-point', function assignMulti() {
    var a = 8;
    expect(a *= 0.2).toBeCloseTo(1.6, 5);
  });
  it('check assignment with multiply floating-point by floating-point', function assignMulti() {
    var a = 0.8;
    expect(a *= 0.2).toBeCloseTo(0.16, 5);
  });
});

describe('check assignment with division', function assignDivision() {
  it('check assignment with division of integers', function assignDiv() {
    var a = 8;
    expect(a /= 2).toBe(4);
  });
  it('check assignment with division of floating-point', function assignDiv() {
    var a = 0.8;
    expect(a /= 2).toBeCloseTo(0.4, 5);
  });
  it('check assignment with division of floating-point', function assignDiv() {
    var a = 9;
    expect(a /= 2).toBeCloseTo(4.5, 5);
  });
});
