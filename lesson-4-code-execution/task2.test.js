var multiplyNumeric = require('./task2');

describe('check changing object ', function multyNumeric() {
  it('check multiply number in object ', function countTasks() {
    var image = {width: 100, height: 400, title: 'Cool image'};
    var multiplyElem = multiplyNumeric(image);
    expect(multiplyElem).toEqual({width: 200, height: 800, title: 'Cool image'});
  });
  it('check object in null', function countNull() {
    var image = {width: 100, height: null, title: 'Cool image'};
    expect(multiplyNumeric(image)).toEqual({width: 100, height: null, title: 'Cool image'});
  });
});
