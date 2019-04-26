var str = '';
var row = prompt('Введите количество символов в строке');
var col = prompt('Введите количество сток');

while (true) {
  var colS = parseInt(col);
  var rowS = parseInt(row);
  if (!isNaN(colS) && !isNaN(rowS)) {
    break;
  }
  row = prompt('Введите количество символов в строке в верном формате');
  col = prompt('Введите количество строк в верном формате');
}

for (var i = 0; i < row; i++) {
  for (var j = 0; j < col; j++) {
    ((i + j) % 2 === 0) ? str += '#' : str += ' ';
  }
  str += '\n';
}

alert(str);