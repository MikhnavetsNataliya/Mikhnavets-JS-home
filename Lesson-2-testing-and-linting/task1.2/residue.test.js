describe('check remainder of the division modulo', function remaindDivided() {
  it('check remainder of the division modulo by integers', function remaindDiv() {
    var remaind = 5;
    expect(remaind % 2).toBe(1);
  });
  it('check floating-point check divided by floating-point number', function remaindDiv() {
    var remaind = 0.4;
    expect(remaind % 0.3).toBeCloseTo(0.1, 3);
  });
});
