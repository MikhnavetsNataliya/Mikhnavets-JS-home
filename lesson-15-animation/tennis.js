'use strict';
var gameHeight = 1000; // высота игры
var gameWight = 800; // ширины игры

var court; // игровой корт
var fieldHeight = gameHeight * 2 / 5; // ширина корта
var fieldWidth = gameWight; // длина корта
var ball; // игровой мяч
var ballSize = 30; // размер теннисного мяча

var player; // игроки
var count1 = 0; // счет первого игрока
var count2 = 0; // счет второго игрока

var gameBlock; // блок игры: кнопка старт, счет, игровое поле
var wrapper = document.getElementById('wrapper');
/*
wrapper.appendChild(createGame());
requestAnimationFrame(Tick);
*/

// UI

function createGame() {
  gameBlock = document.createElement("div");
  gameBlock.id = 'gameBlock';
  gameBlock.style.width = gameWight + 'px';
  gameBlock.style.height = gameHeight + 'px';
  gameBlock.appendChild(createButtonStart());
  gameBlock.appendChild(createCount());
  gameBlock.appendChild(creatTennisCourt());
  return gameBlock;
}

function createButtonStart() {
  var buttonStart = document.createElement("input");
  buttonStart.id = 'buttonStart';
  buttonStart.type = 'button';
  buttonStart.value = 'старт!';
  buttonStart.position = 'absolute';
  // не показывает , ни через float, ни через конкретные размеры
  // buttonStart.style.cssFloat = 'left';
  //buttonStart.marginTop = 30 + 'px';
  buttonStart.fontSize = 30 + 'px';
  buttonStart.width = gameWight / 5 + 'px';
  buttonStart.top = gameBlock.offsetHeight - gameHeight + 'px';
  buttonStart.left = gameBlock.offsetWidth - gameWight + 'px';

  buttonStart.onclick = startGame;
  return buttonStart;
}

function createCount() {
  var count = document.createElement("div");
  count.id = 'countGame';
  count.style.width = gameWight / 5;
  count.style.fontSize = 50 + 'px';
  count.top = 20 + 'px';
  count.left = gameBlock.offsetWidth - gameWight / 2 + 'px';
  displayCount();
  return count;
}

function displayCount() {
  gameBlock.innerHTML = count1 + ':' + count2;
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
  court.style.width = fieldWidth + 'px';
  court.style.height = fieldHeight + 'px';
  court.appendChild(createBall(ballSize));
  court.appendChild(createPlayer('player1', 'rgba(0, 255, 0, 0.8)'));
  court.appendChild(createPlayer('player2', 'rgba(0, 0, 255, 0.8)'));
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
  ball.style.top = fieldHeight / 2 - size / 2 + 'px';
  ball.style.left = fieldWidth / 2 - size / 2 + 'px';
  return ball;
}

function createPlayer(playerNumber, colorPlayer) {
  player = document.createElement('div');
  player.id = playerNumber;
  player.style.position = 'absolute';
  player.style.backgroundColor = colorPlayer;
  player.style.width = fieldWidth * 0.025 + 'px';
  player.style.height = fieldHeight / 3 + 'px';
  return player;
}

//-----------BALL-----------//
var ballH = {
  posX: court.offsetWidth / 2 - ball.offsetWidth / 2,
  posY: court.offsetHeight / 2 - ball.offsetHeight / 2,
  speedX: 6,
  speedY: 3,
  width: ball.offsetWidth,
  height: ball.offsetHeight,
  update: function () {
    var ballObj = ball;
    ballObj.style.left = this.posX + 'px';
    ballObj.style.top = this.posY + 'px';
  }
};
var ballAreaH = {
  width: court.offsetWidth,
  height: court.offsetHeight
};

//-----------PLAYER----------//
var playerH = {
  player1PosX: court.offsetLeft,
  player1PosY: court.offsetHeight / 2 - player.offsetHeight / 2,
  player1Speed: 0,

  player2PosX: court.offsetWidth - player.offsetWidth,
  player2PosY: court.offsetHeight / 2 - player.offsetHeight / 2,
  player2Speed: 0,

  width: fieldWidth * 0.025,
  height: fieldHeight / 3,

  update: function () {
    var player1Obj = document.getElementById('player1');
    player1Obj.style.left = this.player1PosX + 'px';
    player1Obj.style.top = this.player1PosY + 'px';

    var player2Obj = document.getElementById('player2');
    player2Obj.style.left = this.player2PosX + 'px';
    player2Obj.style.top = this.player2PosY + 'px';
  }
};
var playerAreaH = {
  width: court.offsetWidth,
  height: court.offsetHeight
};

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

// Logic

function startGame() {
  requestAnimationFrame(Tick);
}

// граница движения мяча до боковых стенок
function Tick() {
  ballH.posX += ballH.speedX;
  //вылетел ли мяч правее стены
  if ((ballH.posX + ballH.width >= ballAreaH.width) &&
    ((ballH.posY + ballH.height) < playerH.player2PosY) || (ballH.posY > playerH.player2PosY + playerH.height)) {
    count1 += 1;
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
    count2 += 1;
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

  requestAnimationFrame(Tick);
}
