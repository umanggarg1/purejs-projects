const board = document.querySelector('.board');
const startBtn = document.querySelector('.btn-start');
const modal = document.querySelector('.modal');
const startGameModal = document.querySelector('.start-game');
const restartgameModal = document.querySelector('.restart-game');
const restartBtn = document.querySelector('.btn-restart');

const highScoreElement = document.querySelector('#high-score');
const scoreElement = document.querySelector('#score');
const timeElement = document.querySelector('#time');


const blockHeight = 50;
const blockWidth = 50;

let score = 0;
let highScore = localStorage.getItem("highScore") || 0;
let time = `00-00`;

// highScoreElement.innerText = highScore;


const cols = Math.floor(board.clientWidth / blockWidth);
const rows = Math.floor(board.clientHeight / blockHeight);

let intervalId = null;
let timeIntervalId = null;

let food = {
  x: Math.floor(Math.random() * rows),
  y: Math.floor(Math.random() * cols)
}

const blocks = [];
let snake = [
  {
    x : 1, y: 2
  }
]

let direction = 'down'; 

for (let r = 0; r < rows; r++) {
  for (let c = 0; c < cols; c++) {
    const block = document.createElement("div");
    block.classList.add("block");
    board.appendChild(block);

    // block.innerText = `${r}-${c}`;
    
    blocks[`${r}-${c}`] = block;
  }
}


function drawSnake() {

  let head = null;
  blocks[`${food.x}-${food.y}`].classList.add("food");

  if(direction === "left") {
    head = {
      x: snake[0].x,
      y: snake[0].y - 1
    }
  }
  else if(direction === "right") {
    head = {
      x: snake[0].x,
      y: snake[0].y + 1
    }
  }
  else if(direction === "up") {
    head = {
      x: snake[0].x - 1,  
      y: snake[0].y
    }
  }
  else if(direction === "down") {
    head = {
      x: snake[0].x + 1,
      y: snake[0].y
    }
  }

  // Check for collision with walls
  if (head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols) {
    // alert("Game Over");
    clearInterval(intervalId);
    modal.style.display = "flex";
    
    startGameModal.style.display = "none";
    restartgameModal.style.display = "flex";
    return;
  }

  // Check if snake eats the food
  if ( head.x === food.x && head.y === food.y ) {
    blocks[`${food.x}-${food.y}`].classList.remove("food");
    food.x = Math.floor(Math.random() * rows);
    food.y = Math.floor(Math.random() * cols);
    blocks[`${food.x}-${food.y}`].classList.add("food");

    snake.unshift(head);

    score += 10;
    scoreElement.innerText = score;
    if (score > highScore) {
      highScore = score;
      highScoreElement.innerText = highScore;
    }
  }


  snake.forEach((segment) => {
    blocks[`${segment.x}-${segment.y}`].classList.remove("fill");
  });

  snake.unshift(head);
  snake.pop();



  snake.forEach(segment => {
    blocks[`${segment.x}-${segment.y}`].classList.add("fill");
  })

}


// intervalId =  setInterval(() => {

//   drawSnake();

// }, 300);


startBtn.addEventListener("click", () => {
  modal.style.display = "none";
  intervalId =  setInterval(() => {
    drawSnake();
  }, 300);

  timeIntervalId = setInterval(() => {
    let [mins, secs] = time.split("-").map(Number);
    
    if (secs == 59) {
      mins += 1;
      secs = 0;
    }
    else {
      secs += 1;
    }

    time = `${mins}-${secs}`;
    timeElement.innerText = time;

}, 1000);

});

restartBtn.addEventListener("click", () => {
  
  resetGame();

});

function resetGame() {

  blocks[`${food.x}-${food.y}`].classList.remove("food");
  snake.forEach((segment) => {
    blocks[`${segment.x}-${segment.y}`].classList.remove("fill");
  }
  ); 

  score = 0;
  time = `00-00`;

  scoreElement.innerText = score;
  timeElement.innerText = time;
  highScoreElement.innerText = highScore;

  modal.style.display = "none";
  snake = [
    {
      x : 1, y: 2 
    }
  ];
  direction = "down";     
  food = {
    x: Math.floor(Math.random() * rows),
    y: Math.floor(Math.random() * cols)
  }
  intervalId =  setInterval(() => {
    drawSnake();
  }, 300);


}



addEventListener("keydown", (e) => {
  if(e.key === "ArrowLeft") {
    direction = "left";
  } 
  else if(e.key === "ArrowRight") {
    direction = "right";
  }
  else if(e.key === "ArrowUp") {
    direction = "up";
  }
  else if(e.key === "ArrowDown") {
    direction = "down";
  }
})