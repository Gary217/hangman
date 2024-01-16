document.addEventListener('DOMContentLoaded', () => {
	const wrapper = document.createElement('div');
	wrapper.classList.add('wrapper');
	document.body.prepend(wrapper);

	const createEl = (htmlElement, cssClass, parent) => {
		const element = document.createElement(htmlElement);
		element.classList.add(cssClass);
		parent.appendChild(element);
		return element;
	};

	const main = createEl('main', 'container', wrapper);

	//hangman-container
	const hangmanContainer = createEl('div', 'hangman-container', main);
	const hangman = createEl('div', 'hangman', hangmanContainer);

	for (let i = 1; i <= 5; i++) {
		createEl('span', `hangman__gallows${i}`, hangman);
	};
	for (let i = 1; i <= 6; i++) {
		createEl('span', `hangman__Buster${i}_hidden`, hangman);
	};

	const hangmanTitle = createEl('h1', 'hangman__title', hangmanContainer);
	hangmanTitle.textContent = 'LEATHERMAN GAME';
	const hangmanSpan = document.createElement('span');
	hangmanSpan.classList.add('hangman__span');
	hangmanTitle.prepend(hangmanSpan);
	hangmanSpan.textContent = 'HANG';

	//keyboard-container
	const keyboardContainer = createEl('div', 'keyboard-container', main);

	let display = createEl('div', 'display', keyboardContainer);

	const questions = [
		['The old name of "main" branch in git?'],
		['A programmer in a virtual labyrinth where bugs are monsters.'],
		['To avoid getting sick at work, go to the ...!'],
		['Code weaves a digital ....... bringing imagination to life.'],
		['Every project has its final .... .'],
		['Every ...... on the keyboard is the magic of creating code.'],
		['The keyword in the context of SASS is used to change the color, making it darker.'],
		['.... study of a topic makes great programmers.'],
		["Let's ......... successful moments in the code!"],
		['Every programmer stands before an open .... to a world of possibilities.']
	];

	const answers = [
		['M','A','S','T','E','R'],
		['D','U','N','G','E','O','N'],
		['G','Y','M'],
		['F','A','N','T','A','S','Y'],
		['B', 'O', 'S', 'S'],
		['F', 'I', 'N', 'G', 'E', 'R'],
		['D', 'A', 'R', 'K', 'E', 'N'],
		['D', 'E', 'E', 'P'],
		['C', 'E', 'L', 'E', 'B', 'R', 'A', 'T', 'E'],
		['D', 'O', 'O', 'R']
	];

	//add random func
	let randomIndex;
	function getRandomWord() {
		randomIndex = Math.floor(Math.random() * answers.length);
		return answers[randomIndex].join('');
	}

	let startWord = getRandomWord();
	const question = createEl('div', 'question', keyboardContainer);

	//add reload func
	const reloadFunc = () => {
		startWord = getRandomWord();

		//hidden startWord
		display.innerHTML = '';
		question.innerHTML = '';

		let keyboardBtns = document.querySelectorAll('.keyboard__btn_inactive');
		keyboardBtns.forEach((btn) => {
			btn.classList.remove('keyboard__btn_inactive');
			btn.disabled = false;
		});

		for (let i = 0; i < startWord.length; i++) {
			let letterContainer = createEl('div', 'display__letter-container_hidden', display);
			letterContainer.textContent = startWord[i];
		}
		console.log(startWord);

		//add new question
		for (let i = 0; i < questions.length; i++) {
			if (i === randomIndex) {
				question.textContent = 'Hint: ' + questions[i];
			};
		};
	}
	reloadFunc();

	const guesses = createEl('div', 'guesses', keyboardContainer);
	let count = 0;
	guesses.textContent = `Incorrect guesses: ${count} / 6`;

	const keyboard = createEl('div', 'keyboard', keyboardContainer);
	
	const keyboardArr = [
		'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
		'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
		'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
	];

	//modal-win
	const win = () => {
		const modalWin = createEl('div', 'modal-win', main);
		modalWin.style.visibility = 'auto';
		const winTitle = createEl('h2', 'modal-win__title', modalWin);
		winTitle.textContent = 'YOU WON!';
		const winAnswer = createEl('h3', 'modal-win__answer', modalWin);
		winAnswer.textContent = startWord;
		const winBtn = createEl('button', 'modal-win__btn', modalWin);
		winBtn.textContent = 'play again';

		if (winBtn.addEventListener('click', () => {
			count = 0;
			guesses.textContent = `Incorrect guesses: ${count} / 6`;
			modalWin.style.visibility = 'hidden';

			reloadFunc();

			//remove active-mod on display-letters
			for (let j = 0; j < startWord.length; j++) {
				const letterContainer = display.children[j];
				letterContainer.classList.remove('display__letter-container_active');
			};

			//remove Busters parts
			for (let i = 1; i <= 6; i++) {
				let partOfBuster = document.querySelector(`.hangman__Buster${i}_hidden`);
				let headOfBuster = document.querySelector(`.hangman__Buster1_hidden`);

				if (partOfBuster.classList.contains('hangman__Buster_active')) {
					partOfBuster.classList.remove('hangman__Buster_active');
					//Busters head styles
					if (!headOfBuster.classList.contains('hangman__Buster_active')) {
						headOfBuster.classList.remove('hangman__Buster1_active');
					};
				};
			};

		}));
	};

	//modal-lose
	const lose = () => {
		const modalLose = createEl('div', 'modal-lose', main);
		modalLose.style.visibility = 'auto';
		const loseTitle = createEl('h2', 'modal-lose__title', modalLose);
		loseTitle.textContent = 'You lose!';
		const loseAnswer = createEl('h3', 'modal-lose__answer', modalLose);
		loseAnswer.textContent = startWord;
		const loseBtn = createEl('button', 'modal-lose__btn', modalLose);
		loseBtn.textContent = 'play again';

		if (loseBtn.addEventListener('click', () => {
			display.innerHTML = '';
			count = 0;
			guesses.textContent = `Incorrect guesses: ${count} / 6`;
			modalLose.style.visibility = 'hidden';

			reloadFunc();

			//remove active-mod on display-letters
			for (let j = 0; j < startWord.length; j++) {
				const letterContainer = display.children[j];
				letterContainer.classList.remove('display__letter-container_active');
			};

			//remove Busters parts
			for (let i = 1; i <= 6; i++) {
				let partOfBuster = document.querySelector(`.hangman__Buster${i}_hidden`);
				let headOfBuster = document.querySelector(`.hangman__Buster1_hidden`);

				if (partOfBuster.classList.contains('hangman__Buster_active')) {
					partOfBuster.classList.remove('hangman__Buster_active');
					//Busters head styles
					if (!headOfBuster.classList.contains('hangman__Buster_active')) {
						headOfBuster.classList.remove('hangman__Buster1_active');
					};
				};
			};

		}));
	};
	
	for (let i = 0; i < keyboardArr.length; i++) {
		//generate btns
		let keyboardBtn = createEl('button', 'keyboard__btn', keyboard);
		keyboardBtn.textContent = keyboardArr[i];

		keyboardBtn.addEventListener('click', (event) => {
			let isMatch = false;
			let activeLettersCount = 0;

			for (let j = 0; j < startWord.length; j++) {
				const letterContainer = display.children[j];

				if (event.target.textContent === startWord[j]) {
					//add active-mod on display-letters
					letterContainer.classList.add('display__letter-container_active');
					isMatch = true;
					keyboardBtn.classList.add('keyboard__btn_inactive');
				};

				//win
				if (letterContainer.classList.contains('display__letter-container_active')) {
					activeLettersCount++;
					if (activeLettersCount === startWord.length) {
						win();
					};
				};
			};

			//lose-counter
			if (!isMatch && count < 6) {
				count++;
				guesses.textContent = `Incorrect guesses: ${count} / 6`;
				keyboardBtn.classList.add('keyboard__btn_inactive');
				event.target.disabled = true;

				//add part of Buster
				for (let i = 1; i <= 6; i++) {
					let partOfBuster = document.querySelector(`.hangman__Buster${i}_hidden`);
					let headOfBuster = document.querySelector(`.hangman__Buster1_hidden`);
					if (!partOfBuster.classList.contains('hangman__Buster_active')) {
						partOfBuster.classList.add('hangman__Buster_active');

						//Busters head styles
						if (headOfBuster.classList.contains('hangman__Buster_active')) {
							headOfBuster.classList.add('hangman__Buster1_active');
						};
						break;
					};
				};

				//lose
				if (count === 6) {
					lose();
				};

			};

		});
	};

});