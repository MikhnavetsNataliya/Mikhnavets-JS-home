var taskComlet = {'Anna': 29, 'Serg': 75, 'Elena': 1, 'Anton': 99};
function tasksQuantity(tasksComleted) {
  var max = 0;
  var maxRate = '';
  for (var rate in tasksComleted) {
    var value = taskComlet[rate];
    if (max < tasksComleted[rate]) {
      max = tasksComleted[rate];
      maxRate = rate;
    }
  }
  return maxRate[value] || 'задачи не решены';
}

tasksQuantity(taskComlet);

module.exports = tasksQuantity;
