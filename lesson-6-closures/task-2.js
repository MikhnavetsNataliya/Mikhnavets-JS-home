var obj = {
  className: 'menu open menu menu'
};

function removeClassName(obj, cls) {
  var arrClassName = obj.className.split(' ');
  for (var i = 0; i < arrClassName.length; i++) {
    if (arrClassName[i] === cls) {
      arrClassName.splice(i, 1);
      i--;
    }
  }
  obj.className.length === 0 ? obj.className = arrClassName.join('') : obj.className = arrClassName.join(' ');
}

removeClassName(obj, 'menu');
alert(obj.className);
alert('Длина строки: ' + obj.className.length);