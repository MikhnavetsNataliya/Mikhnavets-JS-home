'use strict';
var gameBlock; // блок игры: кнопка старт, счет, игровое поле
var buttonStart; // кнопка старт
var score; // блок со счетом
var court; // игровое поле
var player; // игроки

var gameBlockWight = 1000; // ширины игры
var gameBlockHeight = 700; // высота игры
var buttonStartWight = 150; // ширина кнопки "старт"
var buttonStartHeight = 50; // высота кнопки "старт"
var scoreWidth = 1000; // ширина табло со счетом
var scoreHeight = 100; // высота табло со счетом
var courtWidth = 1000; // ширина корта
var courtHeight = 750; // высота корта

var ball; // теннисный мяч
var ballSize = 30; // размер теннисного мяча

var score1 = 0; // счет первого игрока
var score2 = 0; // счет второго игрока

var playerWidth = 15; // ширина ракетки игрока
var playerHeight = 100; // длина ракетки игрока

var leftPlayer; //  левый игрок
var reightPlayer; // правый игрок

var wrapper = document.getElementById('wrapper'); // контейнер с игрой

//Определяем, какой вариант requestAnimationFrame доступен
var RequestAnimationFrame =
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  }
;

wrapper.appendChild(createGame());
RequestAnimationFrame(Tick);

// UI

function createGame() {
  gameBlock = document.createElement("div");
  gameBlock.id = 'gameBlock';
  gameBlock.style.width = gameBlockWight + 'px';
  gameBlock.style.height = gameBlockHeight + 'px';
  gameBlock.style.top = scoreHeight * 1.5 + 'px';

  gameBlock.appendChild(createButtonStart());
  gameBlock.appendChild(createScore());
  gameBlock.appendChild(creatTennisCourt());
  return gameBlock;
}

function createButtonStart() {
  buttonStart = document.createElement("input");
  buttonStart.id = 'buttonStart';
  buttonStart.style.position = 'absolute';
  buttonStart.type = 'button';
  buttonStart.value = 'старт!';
  buttonStart.fontSize = 35 + 'px';
  buttonStart.style.width = buttonStartWight + 'px';
  buttonStart.style.height = buttonStartHeight + 'px';
  buttonStart.style.top = buttonStartHeight / 2 + 'px';

  buttonStart.onclick = startGame;
  return buttonStart;
}

function createScore() {
  score = document.createElement("div");
  score.id = 'gameScore';
  score.style.position = 'relative';
  score.style.width = scoreWidth + 'px';
  score.style.height = scoreHeight + 'px';
  score.style.left = gameBlockWight / 2 + 'px';
  score.style.fontSize = 35 + 'px';
  displayScore();
  return score;
}

function displayScore() {
  score.innerHTML = score1 + ':' + score2;
}

function creatTennisCourt() {
  court = document.createElement('div');
  court.id = 'court';
  court.style.position = 'relative';
  court.boxSizing = 'content-box';
  court.style.borderWidth = 2 + 'px';
  court.style.borderStyle = 'solid';
  court.style.borderColor = 'black';
  court.style.backgroundColor = 'rgba(255,255,0, 0.5';
  court.style.width = courtWidth + 'px';
  court.style.height = courtHeight + 'px';
  court.appendChild(createBall(ballSize));
  court.appendChild(createPlayer(leftPlayer));
  court.appendChild(createPlayer(reightPlayer));
  return court;
}

function createBall(size) {
  ball = document.createElement('div');
  ball.id = 'ball';
  ball.style.position = 'absolute';
  ball.style.borderRadius = 50 + '%';
  ball.style.backgroundColor = 'rgba(255, 0, 0, 0.8)';
  ball.style.width = size + 'px';
  ball.style.height = size + 'px';
  ball.style.top = courtHeight / 2 - size / 2 + 'px';
  ball.style.left = courtWidth / 2 - size / 2 + 'px';
  return ball;
}

function createPlayer() {
  player = document.createElement('div');
  player.style.position = 'absolute';
  player.style.width = playerWidth + 'px';
  player.style.height = playerHeight + 'px';
  return player;
}

var actionPlayer = createPlayer();

//не уверена , что так можно делать
function Player(idPlayer, colorPlayer) {
  var self = this;
  self.actionPlayer.id = idPlayer;
  self.actionPlayer.style.backgroundColor = colorPlayer;
  self.actionPlayer.posX = function () {
    if (colorPlayer === 'green') {
      self.actionPlayer.posX = court.offsetLeft;
    } else {
      self.actionPlayer.posX = courtWidth - playerWidth;
    }
  };
  self.actionPlayer.posY = courtHeight / 2 - playerHeight / 2;
  self.actionPlayer.speed = speed;

  self.update = function() {
    var playerObj = document.getElementById(self.idPlayer);
    playerObj.style.left = self.posX + "px";
    playerObj.style.top = self.posY + "px";
  }
}

function PlayerAreaH(width, height) {
  var self = this;
  self.width = width;
  self.height = height;
}

var firstPlayer = new Player('leftPlayer', 'green');
var secondPlayer = new Player('rightPlayer', 'blue');
var PlayerArea = new PlayerAreaH(courtWidth, courtHeight);

firstPlayer.update();
secondPlayer.update();

function Ball(width, height, speedX, speedY) {
  var self = this;
  self.width = width;
  self.height = height;
  self.posX = court.offsetWidth / 2 - ball.offsetWidth / 2;
  self.posY = court.offsetHeight / 2 - ball.offsetHeight / 2;
  self.speedX = speedX;
  self.speedY = speedY;

  self.update = function () {
    var BallObj = document.getElementById('ball');
    BallObj.style.transform = 'translateX(' + self.PosX + 'px) translateY(' + self.PosY + 'px)';
  }
}


function BallAreaH(width, height) {
  var self = this;
  self.width = width;
  self.height = height;
}

// управление клавиатурой
window.addEventListener('keydown', function (EO) {
  EO = EO || window.event;
  EO.preventDefault();

  if (EO.keyCode === 16) {
    playerH.player1Speed = 5;
  }
  if (EO.keyCode === 17) {
    playerH.player1Speed = 5;
  }
  if (EO.keyCode === 38) {
    playerH.player2Speed = 5;
  }
  if (EO.keyCode === 40) {
    playerH.player2Speed = 5;
  }
});

window.addEventListener('keyup', function (EO) {
  EO = EO || window.event;
  EO.preventDefault();

  if (EO.keyCode === 16) {
    playerH.player1Speed = 0;
  }
  if (EO.keyCode === 17) {
    playerH.player1Speed = 0;
  }
  if (EO.keyCode === 38) {
    playerH.player2Speed = 0;
  }
  if (EO.keyCode === 40) {
    playerH.player2Speed = 0;
  }
});


// не расчитала время на ДЗ , не успела его исправить :((((
// все что ниже не пересматривала, и соответственно не связала с верхней частью


// Logic

function startGame() {
  RequestAnimationFrame(Tick);
}

// граница движения мяча до боковых стенок
function Tick() {
ballH.posX += ballH.speedX;
//вылетел ли мяч правее стены
if ((ballH.posX + ballH.width >= ballAreaH.width) &&
  ((ballH.posY + ballH.height) < playerH.player2PosY) || (ballH.posY > playerH.player2PosY + playerH.height)) {
  score1 += 1;
  displayCount();
  ballH.speedX = 0;
  ballH.speedY = 0;
} else {
  ballH.speedX = -ballH.speedX;
  ballH.posX = ballAreaH.width - ballH.width - playerH.width;
}

//вылетел ли мяч левее стены
if ((ballH.posX <= playerH.width) &&
  ((ballH.posY + ballH.height) < playerH.player1PosY) || ballH.posY > (playerH.player1PosY + playerH.height)) {
  score2 += 1;
  displayCount();
  ballH.speedX = 0;
  ballH.speedY = 0;
} else {
  ballH.speedX = -ballH.speedX;
  ballH.posX = playerH.width;
}

// границы движения мяча до по высоте
ballH.posY += ballH.speedY;
if (ballH.posY + ballH.height > ballAreaH.height) {
  ballH.speedY = -ballH.speedY;
}
if (ballH.posY < 0) {
  ballH.speedY = -ballH.speedY;
  ballH.posY = 0
}
ballH.update();

// контроль положения player1 в пределах корта
playerH.player1PosY += playerH.player1Speed;

if (playerH.player1PosY + playerH.height > playerAreaH.height) {
  playerH.player1PosY = playerAreaH.height - playerH.height - 2;
}
if (playerH.player1PosY < 0) {
  playerH.player1PosY = 0;
}

// контроль положения player2 в пределах корта
playerH.player2PosY += playerH.player2Speed;

if (playerH.player2PosY + playerH.height > playerAreaH.height) {
  playerH.player2PosY = playerAreaH.height - playerH.height - 2;
}

if (playerH.player2PosY < 0) {
  playerH.player2PosY = 0;
}
playerH.update();

RequestAnimationFrame(Tick);
}


