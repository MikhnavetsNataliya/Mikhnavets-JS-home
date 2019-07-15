'use strict';

function TLocalStorage(isName) {
  var self = this;

  self.storageHash = {};

  self.reset = function () {
    if (window.localStorage.getItem(isName)){
      if (isName === 'drinks') {
        self.storageHash = JSON.parse(localStorage.drinks);
      }
      if (isName === 'dishes') {
        self.storageHash = JSON.parse(localStorage.dishes);
      }
    }
  };

  self.addValue = function (key, value) {
    self.storageHash[key] = value;
    window.localStorage.setItem(isName, JSON.stringify(storageHash))
  };

  self.getValue = function (key) {
    return self.storageHash[key]
  };

  self.deleteValue = function (key) {
    delete storageHash[key];
    window.localStorage.setItem(isName, JSON.stringify(storageHash));
  };

  self.getValue = function () {
    return (Object.keys(storageHash));
  };
}