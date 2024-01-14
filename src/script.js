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

	createEl('main', 'container', wrapper);
	const main = document.querySelector('.container');
	createEl('div', 'hangman-container', main);
	const hangmanContainer = document.querySelector('.hangman-container');
	createEl('div', 'hangman', hangmanContainer);
	const hangman = document.querySelector('.hangman');

	for (let i = 1; i <= 5; i++) {
		createEl('span', `hangman__gallows${i}`, hangman);
	}
	for (let i = 1; i <= 6; i++) {
		createEl('span', `hangman__Buster${i}`, hangman);
	}

	createEl('h1', 'hangman__title', hangmanContainer);
	const hangmanTitle = document.querySelector('.hangman__title');
	hangmanTitle.textContent = 'HANGMAN GAME';
	createEl('div', 'keyboard-container', main);
	const keyboardContainer = document.querySelector('.keyboard-container');
	createEl('div', 'display', keyboardContainer);
	createEl('div', 'keyboard', keyboardContainer);
});