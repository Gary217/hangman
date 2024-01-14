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
	}
	for (let i = 1; i <= 6; i++) {
		createEl('span', `hangman__Buster${i}`, hangman);
	}

	const hangmanTitle = createEl('h1', 'hangman__title', hangmanContainer);
	hangmanTitle.textContent = 'HANGMAN GAME';

	//keyboard-container
	const keyboardContainer = createEl('div', 'keyboard-container', main);

	const display = createEl('div', 'display', keyboardContainer);
	display.textContent = '_';

	const question = createEl('div', 'question', keyboardContainer);
	question.textContent = 'Hint: ';

	const guesses = createEl('div', 'guesses', keyboardContainer);
	guesses.textContent = 'Incorrect guesses: 0 / 6';

	const keyboard = createEl('div', 'keyboard', keyboardContainer);
	
	const keyboardArr = [
		'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
		'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
		'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
	];

	for (let i = 0; i < keyboardArr.length; i++) {
		const keyboardBtn = createEl('button', 'keyboard__btn', keyboard);
		keyboardBtn.textContent = keyboardArr[i];
	}
});