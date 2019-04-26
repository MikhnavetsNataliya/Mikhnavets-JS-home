var str = '';
var elemStr = prompt('Введите количество символов в строке');
var row = prompt('Введите количество стpок');

while (true) {
  var elemStrS = parseInt(elemStr);
  var rowS = parseInt(row);
  if (!isNaN(elemStrS) && !isNaN(rowS)) {
    break;
  }
  elemStr = prompt('Введите количество символов в строке в верном формате');
  row = prompt('Введите количество строк в верном формате');
}

for (var i = 0; i < row; i++) {
  for (var j = 0; j < elemStr; j++) {
    ((i + j) % 2 === 0) ? str += '#' : str += ' ';
  }
  str += '\n';
}

alert(str);