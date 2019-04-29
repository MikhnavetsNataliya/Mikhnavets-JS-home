var averageTips = require('./tips');

describe('Average values', function averageTipsCalc() {
  it('check average tips', function averageTip() {
    var arrTips = [2, 3, 4, 5, 6];
    var resultAverage = averageTips(arrTips);
    expect(resultAverage).toEqual(4);
  });
  it('negativ check average tips', function negatAverageTip() {
    var arrTips = [2, 3, 4, 5, 6];
    var resultAverage = averageTips(arrTips);
    expect(resultAverage).not.toEqual(5);
  });
});
