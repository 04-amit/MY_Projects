const grid = document.querySelector(".grid");
const scoreDisplay = document.querySelector("#score");
const blockWidth = 200;
const blockHeight = 35;
const gridWidth = 846;
const gridHeight = 600;
const ballDiameter = 30;

const userStart = [335, 10];
let currUser = userStart;

const ballStart = [420, 60];
let currball = ballStart;

let xDirection = -2;
let yDirection = 2;

let score = 0;

class Block {
  constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis];
    this.bottomRight = [xAxis + blockWidth, yAxis];
    this.topLeft = [xAxis, yAxis + blockHeight];
    this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
  }
}

const blocks = [
  new Block(10, 550),
  new Block(220, 550),
  new Block(430, 550),
  new Block(640, 550),
  new Block(10, 500),
  new Block(220, 500),
  new Block(430, 500),
  new Block(640, 500),
  new Block(10, 450),
  new Block(220, 450),
  new Block(430, 450),
  new Block(640, 450),
  new Block(10, 400),
  new Block(220, 400),
  new Block(430, 400),
  new Block(640, 400),
];

function addBlock() {
  for (let i = 0; i < blocks.length; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    block.style.left = blocks[i].bottomLeft[0] + "px";
    block.style.bottom = blocks[i].bottomLeft[1] + "px";
    grid.appendChild(block);
  }
}

addBlock();

//user block
const user = document.createElement("div");
user.classList.add("user");
drawUser();
grid.appendChild(user);

function drawUser() {
  user.style.left = currUser[0] + "px";
  user.style.bottom = currUser[1] + "px";
}

//move user
function moveUser(e) {
  switch (e.key) {
    case "ArrowLeft":
      if (currUser[0] > 4) {
        currUser[0] -= 10;
        drawUser();
      }
      break;
    case "ArrowRight":
      if (currUser[0] < gridWidth - blockWidth) {
        currUser[0] += 10;
        drawUser();
      }
      break;
  }
}

document.addEventListener("keydown", moveUser);

//draw ball
function drawBall() {
  ball.style.left = currball[0] + "px";
  ball.style.bottom = currball[1] + "px";
}

//add ball
const ball = document.createElement("div");
ball.classList.add("ball");
drawBall();
grid.appendChild(ball);

//move ball
function moveBall() {
  currball[0] += xDirection;
  currball[1] += yDirection;
  drawBall();
  checkForColloisions();
}

let timeriD = setInterval(moveBall, 15);

//check for colloisions
function checkForColloisions() {
  //check for block colloisions
  for (let i = 0; i < blocks.length; i++) {
    if (
      currball[0] + ballDiameter > blocks[i].bottomLeft[0] &&
      currball[0] < blocks[i].bottomRight[0] &&
      currball[1] + ballDiameter > blocks[i].bottomLeft[1] &&
      currball[1] < blocks[i].bottomRight[1]
    ) {
      const allBlocks = Array.from(document.querySelectorAll(".block"));
      allBlocks[i].classList.remove("block");
      blocks.splice(i, 1);
      changeDirection();
      score++;
      scoreDisplay.innerHTML = score;

      //check for win conditon
      if (blocks.length === 0) {
        scoreDisplay.innerHTML = "YOU WIN !! 🥳";
        clearInterval(timeriD);
        document.removeEventListener("keydown", moveUser);
      }
    }
  }

  //check for user colloisions
  if (
    currball[0] > currUser[0] &&
    currball[0] < currUser[0] + blockWidth &&
    currball[1] > currUser[1] &&
    currball[1] < currUser[1] + blockHeight
  ) {
    changeDirection();
  }

  //check for wall colloisions
  if (
    currball[0] >= gridWidth - ballDiameter ||
    currball[1] >= gridHeight - ballDiameter ||
    currball[0] <= 0
  ) {
    changeDirection();
    return;
  }

  //check for game over
  if (currball[1] <= 0) {
    clearInterval(timeriD);
    scoreDisplay.innerHTML = "GAME OVER !!";
    document.body.style.backgroundColor = "rgb(196, 12, 12)";
    removeEventListener("keydown", moveUser);
  }
}

//change the direction
function changeDirection() {
  if (xDirection === 2 && yDirection === 2) {
    yDirection = -2;
    return;
  }
  if (xDirection === 2 && yDirection === -2) {
    xDirection = -2;
    return;
  }
  if (xDirection === -2 && yDirection === -2) {
    yDirection = 2;
    return;
  }
  if (xDirection === -2 && yDirection === 2) {
    xDirection = 2;
    return;
  }
}
