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
	hangmanTitle.textContent = 'HANGMAN GAME';

	//keyboard-container
	const keyboardContainer = createEl('div', 'keyboard-container', main);
	let display = createEl('div', 'display', keyboardContainer);

	const answers = [
		['M','A','S','T','E','R'],
		['D','U','N','G','E','O','N'],
		['G','Y','M'],
		['F','A','N','T','A','S','Y'],
		['L', 'E', 'A', 'T', 'H', 'E', 'R'],
		['B', 'O', 'S', 'S'],
		['F', 'I', 'N', 'G', 'E', 'R'],
		['D', 'A', 'R', 'K', 'E', 'N'],
		['D', 'E', 'E', 'P'],
		['C', 'E', 'L', 'E', 'B', 'R', 'A', 'T', 'E'],
		['D', 'O', 'O', 'R']
	];

	let startWord = answers[0].join('');

	//hidden startWord
	for (let i = 0; i < answers[0].length; i++) {
		let letterContainer = createEl('div', 'display__letter-container_hidden', display);
		letterContainer.textContent = startWord[i];
	}
	console.log(startWord);

	const question = createEl('div', 'question', keyboardContainer);
	question.textContent = 'Hint: ';

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
		const winTitle = createEl('h2', 'modal-win__title', modalWin);
		winTitle.textContent = 'YOU WON!';
		const winAnswer = createEl('h3', 'modal-win__answer', modalWin);
		winAnswer.textContent = startWord;
		const winBtn = createEl('button', 'modal-win__btn', modalWin);
		winBtn.textContent = 'play again';
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
			count = 0;
			guesses.textContent = `Incorrect guesses: ${count} / 6`;
			modalLose.style.visibility = 'hidden';
		}));
	};

	let keyboardBtn;
	for (let i = 0; i < keyboardArr.length; i++) {
		//generate btns
		keyboardBtn = createEl('button', 'keyboard__btn', keyboard);
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
				};

				//win
				if (letterContainer.classList.contains('display__letter-container_active')) {
					activeLettersCount++;
					if (activeLettersCount === startWord.length) {
						win();
					}
				};
			};

			//lose-counter
			if (!isMatch && count < 6) {
				count++;
				guesses.textContent = `Incorrect guesses: ${count} / 6`;

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