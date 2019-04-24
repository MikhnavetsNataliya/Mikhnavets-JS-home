describe('check the arithmetic operation of the subtraction', function checkSubtraction() {
  it('check difference of integers', function checkDifference() {
    expect(3 - 2).toBe(1);
  });
  it('check floating-point difference', function checkDifference() {
    expect(0.3 - 0.2).toBeCloseTo(0.1);
  });
});
