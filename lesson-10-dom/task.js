function THashStorage() {
  var drinkCard = {};

  this.addValue = function (key, value) {
    return drinkCard[key] = value;
  };

  this.getValue = function (key) {
    return drinkCard[key] ? (key in drinkCard) : 'Напиток не найден';
  };

  this.deleteValue = function (key) {
    if (key in drinkCard) {
      delete drinkCard[key];
      return true;
    } else return false;
  };

  this.getKeys = function () {
    return Object.keys(drinkCard);
  }
}

var drinkStorage = new THashStorage();

document.querySelector('.btn-add-drink').addEventListener('click', function () {
  var drinkName = prompt('Введите название напитка', '');
  var isAlcohol = prompt('Напиток алкогольный или нет?', '');
  var energyValue = prompt('Введите калорийность напитка на порцию, ККал', '');
  var ingredientsDrink = prompt('Введите ингридиенты напитка', ' ');
  var receipDrink = prompt('Введите инструкцию приготовления напитка', '');
  drinkStorage.addValue(drinkName, {
    drinkName: 'Напиток: ' + drinkName + '\n',
    isAlcohol: 'Алкогольный: ' + isAlcohol + '\n',
    energyValue: 'Калорийность напитка: ' + energyValue + 'ККал' + '\n',
    ingredientsDrink: 'Ингридиенты: ' + ingredientsDrink + '\n',
    receipDrink: 'Инструкцию приготовления: ' + receipDrink
  });
});

document.querySelector('.btn-get-drink').addEventListener('click', function () {
  var drinkName = prompt('Введите название напитка', '');
  var drinkNameLower = drinkName.toLowerCase();
  var getDrink = drinkStorage.getValue(drinkNameLower);
  document.querySelector('.info-drink').innerHTML = Object.values(getDrink).join('');
});

document.querySelector('.btn-delete-drink').addEventListener('click', function () {
  var drinkName = prompt('Введите название напитка ', ' ');
  var drinkNameLower = drinkName.toLowerCase();
  if (drinkStorage.deleteValue(drinkNameLower) === true) {
    document.querySelector('.info-drink').innerHTML = 'Напиток ' + drinkName + ' удален!';
  } else document.querySelector('.info-drink').innerHTML = 'Напиток ' + drinkName + ' не найден!';
});

document.querySelector('.btn-all-drink').addEventListener('click', function () {
  if (drinkStorage.getKeys().length !== 0) {
    document.querySelector('.info-drink').innerHTML = drinkStorage.getKeys();
  } else document.querySelector('.info-drink').innerHTML = 'Карта напитков пуста!'
});
