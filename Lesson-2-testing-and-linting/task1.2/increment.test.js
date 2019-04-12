describe('check arithmetic increment', function checkIncrement() {
  it('check pre-increment', function checkPreIncrement() {
    var a = 5;
    expect(++a).toBe(6);
  });
  it('check post-increment', function checkPostIncrement() {
    var a = 5;
    expect(a++).toBe(5);
    expect(a).toBe(6);
  });
});
