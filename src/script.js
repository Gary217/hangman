document.addEventListener('DOMContentLoaded', () => {
	const wrapper = document.createElement('div');
	wrapper.classList.add('wrapper');
	document.body.prepend(wrapper);

	const createEl = (htmlElement, cssClass, child) => {
		const element = document.createElement(htmlElement);
		element.classList.add(cssClass);
		child.appendChild(element);
	};

	createEl('main', 'container', wrapper);
	const main = document.querySelector('.container');
	createEl('div', 'hangman-container', main);
	const hangmanContainer = document.querySelector('.hangman-container');
	createEl('div', 'hangman', hangmanContainer);
	const hangman = document.querySelector('.hangman');
	createEl('span', 'hangman__span1', hangman);
	createEl('span', 'hangman__span2', hangman);
	createEl('span', 'hangman__span3', hangman);
	createEl('span', 'hangman__span4', hangman);
	createEl('span', 'hangman__span5', hangman);
	createEl('h1', 'hangman__title', hangmanContainer);
	const hangmanTitle = document.querySelector('.hangman__title');
	hangmanTitle.textContent = 'HANGMAN GAME';
	createEl('div', 'keyboard-container', main);
	const keyboardContainer = document.querySelector('.keyboard-container');
	createEl('div', 'display', keyboardContainer);
	createEl('div', 'keyboard', keyboardContainer);
});