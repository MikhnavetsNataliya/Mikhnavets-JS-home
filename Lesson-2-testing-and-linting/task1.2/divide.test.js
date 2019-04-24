describe('check the arithmetic operation of the divided', function Divided() {
  it('check divided by integers', function checkDivide() {
    expect(4 / 2).toBe(2);
  });
  it('check floating-point check divided by integers', function checkDivide() {
    expect(0.4 / 2).toBeCloseTo(0.2, 5);
  });
  it('check floating-point check divided by floating-point number', function checkDivide() {
    expect(0.4 / 0.3).toBeCloseTo(1.333, 3);
  });
});
