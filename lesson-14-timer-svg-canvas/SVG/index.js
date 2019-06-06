'use strict';
const baseRadius = 300; //радиус циферблата
const numbersBaseRadius = baseRadius / 2.5; //радиус оси цифр циферблата
const circleRadius = 30; // радиус кружков с цифрами
const dotSize = 14; //размер точки в центре часов
const wrapper = document.getElementById('wrapper');

wrapper.appendChild(createWatch());
setInterval(tickTimer, 1000);

// UI

function createWatch() {
  var blockSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  blockSVG.setAttribute('id', 'clock');
  blockSVG.setAttribute('width', baseRadius);
  blockSVG.setAttribute('hight', baseRadius);
  blockSVG.appendChild(createSVGClock('white smoke', 10, 'white'));
  blockSVG.appendChild(createSVGClockFace());
  blockSVG.appendChild(createSVGDigitalWatch());
  blockSVG.appendChild(createArrow('hours', 6, 70, 3, 3, 'black', 'black'));
  blockSVG.appendChild(createArrow('minutes', 4, 100, 3, 3, 'black', 'black'));
  blockSVG.appendChild(createArrow('seconds', 2, 140, 3, 3, 'red', 'red'));
  blockSVG.appendChild(createSVGDecorativeDot(dotSize));
  return blockSVG;
}

function createSVGClock(stroke, strokeWidth, fill) {
  var baseCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  baseCircle.setAttribute('stroke', stroke);
  baseCircle.setAttribute('stroke-width', strokeWidth); // ширина бордера входит или нет
  baseCircle.setAttribute('fill', fill);
  baseCircle.setAttribute('r', baseRadius /2);
  baseCircle.setAttribute('cx', baseRadius /2);
  baseCircle.setAttribute('cy', baseRadius /2);
  return baseCircle;
}

//??
function createSVGClockFace() {
  var clockFace = document.createElementNS("http://www.w3.org/2000/svg", "g");
  for (var number = 1; number <= 12; number++){
    var angle = number * 30 / 180 * Math.PI;
    var x = ((baseRadius - circleRadius) / 2) + Math.round(Math.sin(angle) * numbersBaseRadius);
    var y = ((baseRadius - circleRadius) / 2) - Math.round(Math.cos(angle) * numbersBaseRadius);
    clockFace.appendChild(createSVGHourCircle(x, y, number));
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

function createSVGDigitalWatch() {
  var textClock = document.createElementNS("http://www.w3.org/2000/svg", "text");
  textClock.setAttribute('id', 'textclock' );
  textClock.setAttribute('x', baseRadius / 2 - 50 );
  textClock.setAttribute('y', baseRadius / 2 + baseRadius / 10 );
  ['hourstext', 'minutestext', 'secondstext'].map(watchDigits => {
    var digits = createElementNS("http://www.w3.org/2000/svg", "tsspan");
    digits.setAttribute('id', watchDigits);
    textClock.appendChild(digits);
  });
  return textClock;
}

function createSVGArrow(arrowType, arrowWidth, arrowHight, radiusRX, radiusRY, stroke, fill){
  var arrow = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  arrow.setAttribute('id', arrowType + ' arrow');
  arrow.setAttribute('x', baseRadius / 2 - (arrowWidth / 2));
  arrow.setAttribute('y', baseRadius / 2);
  arrow.setAttribute('width', arrowWidth);
  arrow.setAttribute('hight', arrowHight);
  arrow.setAttribute('rx', radiusRX);
  arrow.setAttribute('ry', radiusRY);
  arrow.setAttribute('stroke', stroke);
  arrow.setAttribute('fill', fill);
  var arrowAnimate = document.createElementNS("http://www.w3.org/2000/svg", "animateTransform");
  arrowAnimate.setAttribute('attributeName', 'transform');
  arrowAnimate.setAttribute('type', 'rotate');
  arrowAnimate.setAttribute('from', '0' + ' ' + '0' + ' ' + '0');
  arrowAnimate.setAttribute('to', '360' + ' ' + '0' + ' ' + arrowWidth/2);
  arrow.appendChild(arrowAnimate);
  return arrow;
}

function createSVGDecorativeDot(size){
  var dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  arrow.setAttribute('id', 'dot');
  arrow.setAttribute('cx', baseRadius / 2 - size / 2);
  arrow.setAttribute('cy', baseRadius / 2 - size / 2);
  arrow.setAttribute('r', size / 2);
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
  arrow.style.transform = `rotate(${degree}deg)`;
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