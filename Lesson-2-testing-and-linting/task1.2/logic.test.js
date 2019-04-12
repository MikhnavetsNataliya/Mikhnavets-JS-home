describe('check logical && (positive and negative)', function checkLogic() {
  it('check positive logic', function checkLogicPositive() {
    var name = 'Nike';
    var age = 27;
    expect(name === 'Alex' && age < 50).toBeTruthy();
  });
  it('check negative logic', function checkLogicNegative() {
    var name = 'Nike';
    var age = 27;
    expect(name === 'Alex' && age > 50).toBeTruthy();
  });
});
