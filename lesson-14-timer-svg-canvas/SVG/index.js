'use strict';
var baseRadius = 300; //радиус циферблата
var numbersBaseRadius = baseRadius / 2.5; //радиус оси цифр циферблата
var circleRadius = 30; // радиус кружков с цифрами
var centerBaseCircleX = baseRadius; // координаты центра циферблата по Х
var centerBaseCircleY = baseRadius; // координаты центра циферблата по У
var dotSize = 14; //размер точки в центре часов
var wrapper = document.getElementById('wrapper');

wrapper.appendChild(createWatch());
setInterval(tickTimer, 1000);

// UI

function createWatch() {
  var blockSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  blockSVG.setAttribute('id', 'clock');
  blockSVG.setAttribute('width', baseRadius * 2);
  blockSVG.setAttribute('hight', baseRadius * 2);
  blockSVG.appendChild(createSVGClock('whiteSmoke', 10, 'white'));
  blockSVG.appendChild(createSVGClockFace());
  blockSVG.appendChild(createSVGDigitalWatch(180, 80));
  blockSVG.appendChild(createSVGArrow('hours', 6, 70, 3, 3, 'black', 'black'));
  blockSVG.appendChild(createSVGArrow('minutes', 4, 100, 3, 3, 'black', 'black'));
  blockSVG.appendChild(createSVGArrow('seconds', 2, 140, 3, 3, 'red', 'red'));
  blockSVG.appendChild(createSVGDecorativeDot(dotSize));
  return blockSVG;
}

function createSVGClock(stroke, strokeWidth, fill) {
  var baseCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  baseCircle.setAttribute('stroke', stroke);
  baseCircle.setAttribute('stroke-width', strokeWidth); // ширина бордера входит или нет
  baseCircle.setAttribute('fill', fill);
  baseCircle.setAttribute('r', baseRadius/2);
  baseCircle.setAttribute('cx', baseRadius /2);
  baseCircle.setAttribute('cy', baseRadius /2);
  return baseCircle;
}

//??
function createSVGClockFace() {
  var clockFace = document.createElementNS("http://www.w3.org/2000/svg", "g");
  for (var number = 1; number <= 12; number++){
    var angle = number * 30 / 180 * Math.PI;
    var numbX = centerBaseCircleX + numbersBaseRadius * Math.round(Math.sin(angle) + Math.PI / 2);
    var numbY = centerBaseCircleY - numbersBaseRadius * Math.round(Math.cos(angle) + Math.PI / 2);
    clockFace.appendChild(createSVGHourCircle(numbX, numbY, number));
  }
  return clockFace;
}

function createSVGHourCircle(circleX, circleY, number){
  var circleNumb = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circleNumb.setAttribute('id', 'number' );
  circleNumb.setAttribute('cy', circleY);
  circleNumb.setAttribute('cx', circleX);
  circleNumb.setAttribute('r', circleRadius);
  circleNumb.appendChild(document.createTextNode(number));//???
  return circleNumb;
}

function createSVGDigitalWatch(widthDigital, heightDigital) {
  var blockDigital = document.createElementNS("http://www.w3.org/2000/svg", "g");

  var digitalBackground = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  digitalBackground.setAttribute('x', centerBaseCircleX - widthDigital / 2);
  digitalBackground.setAttribute('y', centerBaseCircleY - heightDigital * 2);
  digitalBackground.setAttribute('width', widthDigital);
  digitalBackground.setAttribute('height', heightDigital);
  digitalBackground.setAttribute('fill', 'white');
  blockDigital.appendChild(digitalBackground);
  var textDigital = document.createElementNS("http://www.w3.org/2000/svg", "text");
  textDigital.setAttribute('id', 'textclock' );
  textDigital.setAttribute('x', centerBaseCircleX);
  textDigital.setAttribute('y', heightDigital * 1.5);
  textDigital.setAttribute('text-anchor', 'middle');

  ['hourstext', 'minutestext', 'secondstext'].map(watchDigits => {
    var digits = document.createElementNS("http://www.w3.org/2000/svg", "tsspan");
    digits.setAttribute('id', watchDigits);
    textDigital.appendChild(digits);
  });

  blockDigital.appendChild(textDigital);
  return blockDigital;
}

function createSVGArrow(arrowType, arrowWidth, arrowHight, radiusRX, radiusRY, stroke, fill){
  var arrow = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  arrow.setAttribute('id', arrowType + ' arrow');
  arrow.setAttribute('x', centerBaseCircleX);
  arrow.setAttribute('y', centerBaseCircleY);
  arrow.setAttribute('width', arrowWidth);
  arrow.setAttribute('hight', arrowHight);
  arrow.setAttribute('rx', radiusRX);
  arrow.setAttribute('ry', radiusRY);
  arrow.setAttribute('stroke', stroke);
  arrow.setAttribute('fill', fill);
  var arrowAnimate = document.createElementNS("http://www.w3.org/2000/svg", "animateTransform");
  arrowAnimate.setAttribute('attributeName', 'transform');
  arrowAnimate.setAttribute('type', 'rotate');
  //вообще не уверена , что верно
  arrowAnimate.setAttribute('from', '0' + ' ' + centerBaseCircleX + ' ' + centerBaseCircleY);
  arrowAnimate.setAttribute('to', '360' + ' ' + centerBaseCircleX + ' ' + centerBaseCircleY);
  arrow.appendChild(arrowAnimate);
  return arrow;
}

function createSVGDecorativeDot(size){
  var dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  dot.setAttribute('id', 'dot');
  dot.setAttribute('cx', baseRadius / 2 - size / 2);
  dot.setAttribute('cy', baseRadius / 2 - size / 2);
  dot.setAttribute('r', size / 2);
  return dot;
}

// Logic

function tickTimer(){
  var now = new Date();
  var thisSecond = now.getSeconds();
  var thisMinute = now.getMinutes();
  var thisHour   = now.getHours();
  updateWatch(thisHour, thisMinute, thisSecond);
  updateDigitalWatch(thisHour, thisMinute, thisSecond);
}

function updateWatch(hour, minute, second){
  var thisSecondRotate = (second / 60) * 360 - 90;
  var thisMinuteRotate = (minute) / 60 * 360 - 90;
  var thisHourRotate   = (hour + minute / 60) / 12 * 360 - 90;
  rotateHandle('seconds', thisSecondRotate );
  rotateHandle('minutes', thisMinuteRotate);
  rotateHandle('hours', thisHourRotate);
}

function rotateHandle(handle, degree){
  var arrow = document.querySelector(`.${handle}`);
  var arrowAnimate = document.createElementNS("http://www.w3.org/2000/svg", "animateTransform");
  arrowAnimate.setAttribute('attributeName', 'transform');
  arrowAnimate.setAttribute('attributeType', 'XML');
  arrowAnimate.setAttribute('type', 'rotate');
  // не поняла как в svg применяется transform
  arrowAnimate.setAttribute('transform', degree + centerBaseCircleX + centerBaseCircleY);
}

function updateDigitalWatch(hour, minute, second){
  var digitalWatchSeconds = document.querySelector('#secondstext');
  var digitalWatchMinutes = document.querySelector('#minutestext');
  var digitalWatchHours = document.querySelector('#hourstext');
  digitalWatchSeconds.textContent = addZeroToNumber(second);
  digitalWatchMinutes.textContent = addZeroToNumber(minute);
  digitalWatchHours.textContent = addZeroToNumber(hour);
}

function addZeroToNumber(currentTime){
  return (`${currentTime}`.length < 2) ? (`0${currentTime}`) : currentTime;
}