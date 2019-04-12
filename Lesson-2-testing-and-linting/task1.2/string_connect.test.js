describe('check string operations', function checkString() {
  test('check string connect', function checkStringConnect() {
    expect('Vasya ' + 'Ivanov').toBe('Vasya Ivanov');
  });
  test('check string assignment', function checkStringAssignment() {
    var a = 'Vasya';
    expect(a += ' Ivanov').toBe('Vasya Ivanov');
  });
});
