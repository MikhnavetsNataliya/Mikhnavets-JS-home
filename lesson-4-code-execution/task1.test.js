var tasksQuantity = require('./task1');

describe('check on the number of solved tasks', function countTasks() {
  it('check max in object', function maxTasks() {
    var obj = {'Anna': 29, 'Serg': 35, 'Elena': 1, 'Anton': 99};
    var maxRate = tasksQuantity(obj);
    expect(maxRate).toBe('Anton: 99');
  });
  it('check max in object', function maxTasks() {
    var obj = {'Anna': 29, 'Serg': 35, 'Elena': 1, 'Anton': 99};
    var maxRate = tasksQuantity(obj);
    expect(maxRate).toMathObject({'Anton': 99});
  });
  it('check object in string', function checkString() {
    var obj = {'Anna': 29, 'Serg': 35, 'Elena': 1, 'Anton': '99'};
    expect(tasksQuantity(obj)).toEqual('Serg: 35');
  });
});
