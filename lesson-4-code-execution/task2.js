var image = {width: 100, height: 400, title: 'Cool image'};

function multiplyNumeric(obj) {
  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  for (var key in obj) {
    if (isNumeric(obj[key]) === true) {
      obj[key] *= 2;
    }
    continue;
  }
  return obj;
}

multiplyNumeric(image);

module.exports = multiplyNumeric;