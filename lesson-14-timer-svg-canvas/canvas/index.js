'use strict';
var baseRadius = 200; //радиус циферблата
var numbersBaseRadius = baseRadius / 2.5; //радиус оси цифр циферблата
var circleRadius = 20; // радиус кружков с цифрами
var dotSize = 10; //размер точки в центре часов

//длины стрелок часов: секундной, минутной, часовой
var lengthSecond = baseRadius / 1.3;
var lengthMinute = baseRadius / 1.4;
var lengthHour = lengthMinute / 1.5;

var wrapper = document.getElementById('wrapper');

wrapper.appendChild(displayWatch());
setInterval(tickTimer, 1000);

// UI
var baseCanvas = document.getElementById('canvas');
var context = baseCanvas.getContext('2d');
context.strokeRect(0, 0, baseCanvas.width, baseCanvas.height);

//расчет центра часов
var centerClockX = baseCanvas.width / 2;
var centerClockY = baseCanvas.height / 2;
var radiusClock = baseCanvas.width / 2;


function displayWatch() {
  createCanvasClock('rgb(245,245,245)', 4, '#ffffff');
  createCanvasClockFace('lightskyblue', 'lightsteelblue');
  createCanvasDigitalWatch('#6b6b6b47', '#6b6b6b47', radiusClock / 2, radiusClock / 5);
  createCanvasDecorativeDot('black', 'black', 2, dotSize);
  tickTime()
}

//контур часов
function createCanvasClock(strokeStyleClock, lineWidth, fillStyleClock) {
  context.beginPath();
  context.strokeStyle = strokeStyleClock;
  context.lineWidth = lineWidth;
  context.arc(centerClockX, centerClockY, radiusClock, 0, Math.PI * 2, true);
  context.fillStyle = fillStyleClock;
  context.stroke();
  context.closePath();
}

//оцифровка циферблата
function createCanvasClockFace(fillStyleFace, strokeStyleFace) {
  for (var number = 1; number <= 12; number++) {
    context.fillStyle = fillStyleFace;
    context.strokeStyle = strokeStyleFace;
    context.textAlign('center');
    context.textBaseline('middle');

    context.beginPath();
    var angle = number * 30 / 180 * Math.PI;
    var numbX = centerClockX + numbersBaseRadius * Math.round(Math.sin(angle) + Math.PI / 2);
    var numbY = centerClockY - numbersBaseRadius * Math.round(Math.cos(angle) + Math.PI / 2);
    context.arc(numbX, numbY, circleRadius, 0, Math.PI / 2, true);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.fillStyle = 'black';
    context.font = 'normal 14px sans-serif';
    context.strokeText(number, numbX, numbY);
    context.stroke();
    context.closePath();
  }
}

//цифровые часы
function createCanvasDigitalWatch(strokeStyleDigital, fillStyleDigital, widthDigital, heightDigital) {
  var digits = timeNow.getHours() + ':' + timeNow.getMinutes() + ':' + timeNow.getSeconds();
  var digitalX = centerClockX - widthDigital / 2;
  var digitalY = centerClockY - heightDigital * 2;
  context.strokeStyle = strokeStyleDigital;
  context.strokeRect(digitalX, digitalY, widthDigital, heightDigital);

  context.font = 'normal 14px sans-serif';
  context.fillStyle = fillStyleDigital;
  context.fillText(digits, centerClockX, heightDigital * 1.5);
  context.textAlign('center');
  context.textBaseline('middle');
}

//стрелки
function createCanvasArrow(strokeStyleArrow, widthArrow, lengthType, position) {
  context.beginPath();
  context.strokeStyle = strokeStyleArrow;
  context.lineCap = 'round';
  context.lineWidth = widthArrow;
  context.moveTo(centerClockX, centerClockY);
  context.rotate(position);
  context.lineTo(centerClockX, -lengthType);
  context.stroke();
  context.rotate(-position);
  context.closePath();
}

function createCanvasDecorativeDot(strokeStyleDot, fillStyleDot, lineWidthDot, size) {
  context.beginPath();
  context.strokeStyle = strokeStyleDot;
  context.fillStyle = fillStyleDot;
  context.lineWidth = lineWidthDot;
  context.arc(centerClockX, centerClockY, size, 0, Math.PI * 2, true);
  context.stroke();
  context.closePath();
}

//Logic
function tickTime() {
  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();

  hour = hour % 12;
  hour = (hour * Math.PI / 6) + (minute * Math.PI / (6 * 60)) + (second * Math.PI / (360 * 60));
  createCanvasArrow('black', radiusClock * 0.07, lengthHour, hour);

  minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
  createCanvasArrow('black', radiusClock * 0.07, lengthMinute, minute);

  second = (second * Math.PI / 30);
  createCanvasArrow('red', radiusClock * 0.02, lengthSecond, second);
}
