# Hangman Game

The web application is a classic Hangman game built with pure Vanilla JavaScript, without the use of third-party frameworks or libraries. All user interface elements are dynamically generated via JavaScript.

## 🚀 Live Demo
* **Deployment:** [https://gary217.github.io/hangman/](https://gary217.github.io/hangman/)

---

## 🛠️ Tech Stack
* **HTML5** (dynamic DOM generation)
* **SASS / SCSS** (responsive layout, custom animations)
* **Vanilla JavaScript** (ES6+, modular structure, state management)
* **Linting & Formatting:** ESLint, Prettier

---

## 📌 Key Features

### 🎯 Gameplay Logic
* **Randomized Content:** The game selects a random question-answer pair from a pool of 10+ unique options. Words do not repeat within a single session.
* **Dual Keyboard Support:** Players can use either the on-screen virtual keyboard (mouse clicks) or their physical hardware keyboard.
* **Guess Tracking:** 
  * Correct guesses instantly reveal all instances of the letter across the secret word.
  * Incorrect guesses update the mistake counter and progressively draw one of the 6 body parts on the gallows (head, body, left arm, right arm, left leg, right leg).
  * Used letters are automatically disabled and visually changed in the UI to prevent duplicate inputs.

### 🏆 Game Over & Reset
* A modal window appears immediately when the player wins or runs out of attempts (6 mistakes).
* The modal displays a congratulations/failure message, reveals the secret word, and offers a "Play Again" button.
* Restarting completely resets the state: the mistake counter goes back to 0, the gallows clears, and a new random word is selected.

### 📱 Responsive Layout
* The application is fully adaptive across three distinct breakpoints:
  * **Desktop:** ≥ 1440px
  * **Tablet:** 768px – 1439px
  * **Mobile:** 360px – 767px
* No content overflows, breaks, or disappears when resizing the viewport.

---

## 📐 Architecture & Constraints

* **Zero-HTML Initial State:** The `index.html` file contains an empty `<body>` tag. All game elements, layout structures, and wrappers are built programmatically at runtime.
* **Strict Vanilla Implementation:** Built entirely without external frameworks, CSS libraries, or third-party utility scripts.
* **Code Quality:** Configured with strict ESLint rules and Prettier formatting to ensure clean, maintainable, and industry-standard code.

---

## 🔧 Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/Gary217/hangman.git
   ```
2. Navigate to the project folder:
   ```bash
   cd .\hangman\
   ```
3. Install dependencies (ESLint & Prettier):
   ```bash
   npm install
   ```
4. Open the project:
   * Open `index.html` using the **Live Server** extension in VS Code (or any preferred local static server).