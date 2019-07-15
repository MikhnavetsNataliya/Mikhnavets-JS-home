'use strict';

//---------DRINK---------
var drinkStorage = new TLocalStorage('drinks');
drinkStorage.reset();

function addDrink() {
  var drinkName = prompt('Введите название напитка', 'Test Drink').toLowerCase().trim();
  var fHash = {};

  if (drinkName) {
    fHash.recipe = prompt('Введите рецепт приготовления напитка', 'Test Recipe');
    fHash.alcohol = confirm('Ваш напиток алкогольный?') ? 'да' : 'нет';
    return drinkStorage.addValue(drinkName, fHash);
  } else {
    alert('Ввод отменен!')
  }
}

function showDrinkInfo() {
  var drinkName = prompt('Введите название напитка: ','').toLowerCase().trim();
  var getDrinkInfo = (drinkName) ? drinkStorage.getValue(drinkName) : 0;
  var resultHTML = '';

  if (getDrinkInfo) {
    var print1 = 'Напиток: ' + drinkName + '<br>';
    var print2 = 'Алкогольный: ' + getDrinkInfo.alcohol + '<br>';
    var print3 = 'Рецепт приготовления: ' + getDrinkInfo.recipe + '<br>';

    resultHTML = print1 + print2 + print3;
  } else {
    resultHTML = 'Ошибка! Нет такого напитка';
  }
  document.getElementById('messageDrink').innerHTML = resultHTML;
}

function removeDrink() {
  var drinkName = prompt('Какой напиток удалить?').toLowerCase().trim();
  var delDrinkInfo = drinkStorage.deleteValue(drinkName);
  var resultHTML = '';

  if (delDrinkInfo) {
    resultHTML = 'Информация о напитке ' + drinkName + ' удалена';
  } else {
    resultHTML = 'Ошибка! Нет такого напитка';
  }
  document.getElementById('messageDrink').innerHTML = resultHTML;
}

function showDrinksMenu() {
  var showMenuInfo = drinkStorage.getKeys();
  var resultHTML = '';

  if (showMenuInfo.length) {
    for (var i = 0; i < showMenuInfo.length; i++) {
      resultHTML += (i + 1) + '. ' + showMenuInfo[i] + '<br>';
    }
  } else {
    resultHTML = 'Меню пустое, добавьте напитки.';
  }
  document.getElementById('messageDrink').innerHTML = resultHTML;
}

//---------DISH---------
var dishStorage = new TLocalStorage('dishes');
dishStorage.reset();

function addDish() {
  var dishName = prompt('Введите название блюда', 'Test Dish').toLowerCase().trim();
  var fHash = {};

  if (dishName) {
    fHash.recipe = prompt('Введите рецепт приготовления блюда', 'Test Recipe');
    fHash.kitchen = confirm('Блюдо белорусской кухни?') ? 'да' : 'нет';
    return dishStorage.addValue(dishName, fHash);
  } else {
    alert('Ввод отменен!')
  }
}

function showDishInfo() {
  var dishName = prompt('Введите название блюда: ','').toLowerCase().trim();
  var getDishInfo = (dishName) ? dishStorage.getValue(dishName) : 0;
  var resultHTML = '';

  if (getDishInfo) {
    var print1 = 'Блюдо: ' + dishName + '<br>';
    var print2 = 'Белорусская кухня: ' + getDishInfo.kitchen + '<br>';
    var print3 = 'Рецепт приготовления: ' + getDishInfo.recipe + '<br>';

    resultHTML = print1 + print2 + print3;
  } else {
    resultHTML = 'Ошибка! Нет такого блюда';
  }
  document.getElementById('messageDish').innerHTML = resultHTML;
}

function removeDish() {
  var dishName = prompt('Какое блюдо удалить?').toLowerCase().trim();
  var delDishInfo = dishStorage.deleteValue(dishName);
  var resultHTML = '';

  if (delDishInfo) {
    resultHTML = 'Информация о блюде ' + dishName + ' удалена';
  } else {
    resultHTML = 'Ошибка! Нет такого блюда';
  }
  document.getElementById('messageDish').innerHTML = resultHTML;
}

function showDishMenu() {
  var showMenuInfo = dishStorage.getKeys();
  var resultHTML = '';

  if (showMenuInfo.length) {
    for (var i = 0; i < showMenuInfo.length; i++) {
      resultHTML += (i + 1) + '. ' + showMenuInfo[i] + '<br>';
    }
  } else {
    resultHTML = 'Меню пустое, добавьте блюдо.';
  }
  document.getElementById('messageDish').innerHTML = resultHTML;
}

