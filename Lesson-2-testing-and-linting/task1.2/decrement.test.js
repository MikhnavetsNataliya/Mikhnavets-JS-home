describe('check arithmetic decrement', function checkDecrement() {
  it('check pre-decrement', function checkPreDecrement() {
    var a = 5;
    expect(--a).toBe(4);
  });
  it('check post-decrement', function checkPostDecrement() {
    var a = 5;
    expect(a--).toBe(5);
    expect(a).toBe(4);
  });
});
