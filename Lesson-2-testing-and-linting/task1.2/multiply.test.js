describe('check the arithmetic operation of the multiply', function checkMultiplied() {
  it('check multiply of integers', function checkMultiply() {
    expect(2 * 2).toBe(4);
  });
  it('check floating-point multiply', function checkMultiply() {
    expect(0.2 * 0.2).toBeCloseTo(0.04);
  });
  it('check floating-point multiply and integers', function checkMultiply() {
    expect(2 * 0.2).toBeCloseTo(0.4);
  });
});
