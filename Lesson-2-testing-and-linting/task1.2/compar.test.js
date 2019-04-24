describe('check сomparison operations', function compareOperations() {
  it('check number is less than another number', function checkLess() {
    var a = 5;
    expect(a < 10).toBeTruthy();
  });
  it('check number is greater than another number', function checkGreater() {
    var a = 10;
    expect(a > 5).toBeTruthy();
  });
  it('check number is less or equal to another number', function checkLessEqual() {
    var a = 8;
    expect(a < 10).toBeTruthy();
    expect(a <= 8).toBeTruthy();
  });
  it('check number is greater or equal to another number', function checkGreaterEqual() {
    var a = 8;
    expect(a >= 5).toBeTruthy();
    expect(a >= 8).toBeTruthy();
  });
  it('check number is not identical to another number', function checkcheckNotIdentical() {
    var a = 8;
    expect(a !== 5).toBeTruthy();
    expect(a !== '5').toBeTruthy();
  });
  it('check number is identical to another number', function checkIdentical() {
    var a = 8;
    expect(a === 8).toBeTruthy();
  });
  it('check number is equal to another number', function checkEqual() {
    var a = 8;
    expect(a == '8').toBeTruthy();
    expect(a == 8).toBeTruthy();
  });
  it('check number is not equal to another number', function checkNotEqual() {
    var a = 8;
    expect(a != 5).toBeTruthy();
  });
});