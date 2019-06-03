'use strict';

var radiusClockWrap = 200; // радиус часов
var radiusClockTime = 40; // радиус окружности под цифрой
var radiusClockNumber = 150; // расстояние от центра часов до цифер
var hourNumb = 12; //цифры часов
var angleVal = 0; //стартовый угол расположения стрелок
var angleStep = 30; //угол между цифрами на часах

var arrowHour;
var arrowMinute;
var arrowSecond;

//геометрические размеры стрелок
var arrowHourLength = 90;
var arrowHourWidth = 15;
var arrowMinuteLength = 120;
var arrowMinuteWidth = 6;
var arrowSecondLength = 150;
var arrowSecondWidth = 5;

//геометрические размеры цифровых часов
var numericalClockWidth = 120;
var numericalClockHeight = 30;
var radiusNumericalClock = 100;


// UI
var divClockWrap = document.createElement("div");
divClockWrap.style.position = 'relative';
divClockWrap.style.margin = '0 auto';
divClockWrap.style.width = radiusClockWrap * 2 + 'px';
divClockWrap.style.height = radiusClockWrap * 2 + 'px';
divClockWrap.style.backgroundColor = rgb(252, 202, 102);
divClockWrap.style.borderRadius = '50' + '%';

document.body.appendChild(divClockWrap);

//координаты центра циферблата
var divClockWrapCenterX = divClockWrap.offsetLeft + divClockWrap.offsetWidth / 2;
var divClockWrapCenterY = divClockWrap.offsetTop + divClockWrap.offsetHeight / 2;

// нумерация
function createClockFace() {
  var wrapClockFace = document.createElement("div");
  for (var i = 1; i <= hourNumb.length; i++) {
    wrapClockFace.classList.add('wrapClockFace');
    wrapClockFace.innerHTML = i;
    createClockFaceProperty();
    divClockWrap.appendChild(wrapClockFace);

    angleVal += angleStep;
    var angle = angleVal / 180 * Math.PI;

    var wrapClockFaceCenterX = divClockWrapCenterX + radiusClockNumber * Math.sin(angle);
    var wrapClockFaceCenterY = divClockWrapCenterY - radiusClockNumber * Math.cos(angle);

    wrapClockFace.style.left = Math.round(wrapClockFaceCenterX - wrapClockFace.offsetWidth / 2) + 'px';
    wrapClockFace.style.top = Math.round(wrapClockFaceCenterY - wrapClockFace.offsetHeight / 2) + 'px';
  }
  return wrapClockFace;
}

function createClockFaceProperty() {
  var clockFaceProperty = document.getElementsByClassName(wrapClockFace);
  clockFaceProperty.style.position = 'absolute';
  clockFaceProperty.style.width = radiusClockTime * 2 + 'px';
  clockFaceProperty.style.height = radiusClockTime * 2 + 'px';
  clockFaceProperty.style.backgroundColor = rgb(72, 179, 130);
  clockFaceProperty.style.borderRadius = '50' + '%';
  return clockFaceProperty;
}

function createArrowHour() {
  arrowHour = document.createElement('div');
  arrowHour.classList.add('arrowHour');
  createArrowHourProperty();
  divClockWrap.appendChild(arrowHour);
  return arrowHour;
}

function createArrowHourProperty() {
  var arrowHourProperty = document.getElementsByClassName(arrowHour);
  arrowHourProperty.style.position = 'absolute';
  arrowHourProperty.style.width = arrowHourWidth + 'px';
  arrowHourProperty.style.height = arrowHourLength + 'px';
  arrowHourProperty.style.backgroundColor = rgb(255, 255, 255);
  arrowHourProperty.style.borderRadius = 2 + 'px';
  return arrowHourProperty;
}

function createArrowMinute() {
  arrowMinute = document.createElement('div');
  arrowMinute.classList.add('arrowMinute');
  createArrowMinuteProperty();
  divClockWrap.appendChild(arrowMinute);
  return arrowMinute;
}

function createArrowMinuteProperty() {
  var arrowMinuteProperty = document.getElementsByClassName(arrowMinute);
  arrowMinuteProperty.style.position = 'absolute';
  arrowMinuteProperty.style.width = arrowMinuteWidth + 'px';
  arrowMinuteProperty.style.height = arrowMinuteLength + 'px';
  arrowMinuteProperty.style.backgroundColor = rgb(255, 255, 255);
  arrowMinuteProperty.style.borderRadius = 2 + 'px';
  return arrowMinuteProperty;
}

function createArrowSecond() {
  arrowSecond = document.createElement('div');
  arrowSecond.classList.add('arrowSecond');
  createArrowSecondProperty();
  divClockWrap.appendChild(arrowSecond);
  return divClockWrap;
}

function createArrowSecondProperty() {
  var arrowSecondProperty = document.getElementsByClassName(arrowSecond);
  arrowSecondProperty.style.position = 'absolute';
  arrowSecondProperty.style.width = arrowSecondWidth + 'px';
  arrowSecondProperty.style.height = arrowSecondLength + 'px';
  arrowSecondProperty.style.backgroundColor = rgb(194, 25, 25);
  arrowSecondProperty.style.borderRadius = 2 + 'px';
  return arrowSecondProperty;
}

function createNumericalClock() {
  var numericalClock = document.createElement('div');
  numericalClock.classList.add('numericalClock');
  createNumericalClockProperty();
  divClockWrap.appendChild(numericalClock);
  return divClockWrap;
}

function createNumericalClockProperty() {
  var numericalClockProperty = document.getElementsByClassName('numericalClock');
  numericalClockProperty.style.position = 'absolute';
  numericalClockProperty.style.width = numericalClockWidth + 'px';
  numericalClockProperty.style.height = numericalClockHeight + 'px';
  numericalClockProperty.style.textAlign = 'center';
  numericalClockProperty.style.fontSize = 25 + 'px';
  numericalClockProperty.style.lineHeight = 30 + 'px';
  numericalClockProperty.style.color = rgb(255, 255, 255);
  return numericalClockProperty;
}

var elemArrowHour = createArrowHour();
var elemArrowMinute = createArrowMinute();
var elemArrowSecond = createArrowSecond();
var elemNumericalClock = createNumericalClock();

//местоположение электронных часов (не знаю можно ли так делать, я имею ввиду таким образом прикреплять .style)
elemNumericalClock.style.left = wrapClockFaceCenterX - radiusNumericalClock.offsetWidth / 2 + 'px';
elemNumericalClock.style.top = wrapClockFaceCenterY - radiusNumericalClock + 'px';

//местоположение стрелок часа, минут, секунд
function arrrowLocation(arrow) {
  arrow.style.left = wrapClockFaceCenterX - arrow.offsetWidth / 2 + 'px';
  arrow.style.top = wrapClockFaceCenterY - arrow.offsetHeight + 'px';
}

arrrowLocation(elemArrowHour);
arrrowLocation(elemArrowMinute);
arrrowLocation(elemArrowSecond);

//LOGIC

//определяем по времени, где находится стрелка часов
function tickTimer() {
  var timeStart = new Date();
  var degHour = 30 * (time.getHours() + (1 / 60) * time.getMinutes());
  var degMinute = 6 * (time.getMinutes() + (1 / 60) * time.getSeconds());
  var degSecond = 6 * time.getSeconds() - 6;
  startnumericalClock(timeStart);
  startArrowcClock();
}

//электронные часы
function startnumericalClock(time) {
  document.querySelector('.numericalClock').innerHTML = time.toLocaleTimeString();
}

//стрелочные часы
function startArrowcClock() {
  degSecond += 6;
  elemArrowSecond.style.transform = 'rotate(' + degSecond + 'deg';

  degMinute += 6 * (1 / 60);
  elemArrowMinute.style.transform = 'rotate(' + degMinute + 'deg';

  degHour += 6 * (1 / 60);
  elemArrowHour.style.transform = 'rotate(' + degHour + 'deg';
}

setInterval(tickTimer, 1000);
