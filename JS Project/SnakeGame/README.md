# 🐍 Snake Game using JavaScript

A simple and classic Snake Game built using HTML, CSS, and JavaScript. This project demonstrates DOM manipulation, keyboard event handling and game loops — perfect for beginners learning web development or game logic.

---

## 🚀 Features
- Smooth snake movement
- Food generation at random positions
- Score tracking
- Game over detection
- Simple and clean UI
- Fully playable in the browser (no libraries required)

---

## 🛠️ Technologies Used
- HTML5 – Game structure
- CSS3 – Styling the board and snake
- JavaScript (ES6) – Game logic, controls, collision detection, animations

---

## 📂 Project Structure
├── index.html
├── style.css
└── script.js

---

### ▶️ How to Play

- Open index.html in any modern browser.
- Use the keyboard arrow keys to move the snake:

  ⬆️ Up  

  ⬇️ Down  

  ⬅️ Left  

  ➡️ Right  

- Eat food to grow and increase your score.
- Avoid hitting the walls or your own tail — or the game ends.

---

### 🧠 How It Works (Game Logic Summary)

- A game loop runs at a fixed speed using setInterval() or requestAnimationFrame().
- The snake is represented as an array of coordinates.
- Movement happens by adding a new head position and removing the tail (unless food is eaten).
- Collision checks:
  - Wall collision

- Random food is generated at grid points.

---

### 🧩 Future Improvements
 
- Add sound effects
- Add difficulty levels
- Improve UI and animations
- Add pause/resume button
- Add mobile touch controls