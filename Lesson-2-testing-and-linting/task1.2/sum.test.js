describe('check the arithmetic operation of the sum', function checkAddition() {
  it('check addition of integers', function checkSum() {
    expect(1 + 2).toBe(3);
  });
  it('check floating-point addition', function checkSum() {
    expect(0.1 + 0.2).toBeCloseTo(0.3);
  });
});
