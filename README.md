# 🧠 Simon Says Game 🎮

A fun memory-based game built using **HTML, CSS, and JavaScript** where players must repeat an increasing sequence of colors. Test and improve your memory skills as the game gets harder with each level!

---

## 🚀 Features

* 🎯 Memory-based gameplay
* 🎨 Color flashing animation
* 📈 Level progression system
* 🏆 Highest score tracking
* ❌ Game over feedback with animation
* ⚡ Smooth and responsive UI

---

## 🛠️ Tech Stack

* HTML5
* CSS3
* JavaScript (Vanilla JS)

---
## 🎯 How to Play

1. Press any key to start the game
2. Watch the color sequence carefully 👀
3. Repeat the sequence by clicking buttons
4. Each level adds a new color to the sequence
5. If you click the wrong color → Game Over ❌

---

## ⚙️ How It Works

* The game generates a random color sequence (`gameSeq`)
* Player inputs are stored in `userSeq`
* Each click is checked with the original sequence
* If correct → next level
* If wrong → game resets and shows score

---

## 🧠 Key Concepts Used

* DOM Manipulation
* Event Handling (keypress & click)
* Arrays & Sequence Matching
* Async behavior using `setTimeout`
* Game state management

---

## ▶️ Run Locally

1. Clone the repository:

```id="clone-cmd"
git clone https://github.com/Mokshith2c/Simon-Says-Game.git
```

2. Open the project folder:

```id="cd-cmd"
cd simon-game
```

3. Open `index.html` in your browser

---


## 🏆 Scoring System

* Score = Level reached
* Highest score is stored during session

---

