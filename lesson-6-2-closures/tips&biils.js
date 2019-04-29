'use strict';

var familyJohn = {
  name: 'John',
  bills: [124, 48, 268, 180, 42],
  arrTips: [],
  arrBillsTips: [],
  calcTips: function () {
    var percentage;
    for (var i = 0; i < this.bills.length; i++) {
      if (this.bills[i] < 50) {
        percentage = 0.2;
      } else if (this.bills[i] >= 50 && this.bills[i] < 200) {
        percentage = 0.15;
      } else {
        percentage = 0.1;
      }
      var tips = Math.round(this.bills[i] * percentage);
      this.arrTips.push(tips);
      this.arrBillsTips.push(this.bills[i] + tips);
    }
  }
};

familyJohn.calcTips();

alert('Расходы семьи Джона на чаевые в ресторане: ' + familyJohn.arrTips + '\n' +
  'Итого расходы семьи Джона в ресторане с учетом чаевых: ' + familyJohn.arrBillsTips);


var familyMark = {
  name: 'Mark',
  bills: [77, 375, 110, 45],
  arrTips: [],
  arrBillsTips: [],
  calcTips: function () {
    var percentage;
    for (var i = 0; i < this.bills.length; i++) {
      console.log(this.bills[i]);
      if (this.bills[i] < 100) {
        percentage = 0.2;
      } else if (this.bills[i] >= 100 && this.bills[i] < 300) {
        percentage = 0.10;
      } else {
        percentage = 0.25;
      }
      var tips = Math.round(this.bills[i] * percentage);
      this.arrTips.push(tips);
      this.arrBillsTips.push(this.bills[i] + tips);
    }
  }
};

familyMark.calcTips();

alert('Расходы семьи Марка на чаевые в ресторане: ' + familyMark.arrTips + '\n' +
  'Итого расходы семьи Марка в ресторане с учетом чаевых: ' + familyMark.arrBillsTips);

function averageTips(arrTips) {
  var sum = 0;
  var resultAverage;
  for (var j = 0; j < arrTips.length; j++) {
    sum += arrTips[j];
  }
  resultAverage = sum / arrTips.length;
  return resultAverage;
}

alert('В среднес семья Джона тратит на чаевые ' + averageTips(familyJohn.arrTips) + '\n' +
  'а семья Марка в среднем ' + averageTips(familyMark.arrTips));

if (averageTips(familyJohn.arrTips) > averageTips(familyMark.arrTips)) {
  alert('Семья Джона на чаевые в ресторане тратит больше семьи Марка.');
} else if (averageTips(familyJohn.arrTips) < averageTips(familyMark.arrTips)) {
  alert('Семья Марка на чаевые в ресторане тратит больше семьи Джона.');
} else {
  alert('Затраты на чаевые в ресторане в семьях Джона и Марка равны');
}

module.export = averageTips;
