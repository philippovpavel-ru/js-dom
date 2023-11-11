const body = document.body,
	openBTN = document.getElementById('openOverlay');

openBTN.addEventListener('click', (e) => {
	const modal = createModal('Hello <b>World</b>!');

	body.appendChild(modal);
	modal.showModal();
});

function createModal(content) {
	const dialogEl = document.createElement('dialog');
	dialogEl.classList.add('dialog');

	const template = document.querySelector('#modalTemplate');
	dialogEl.innerHTML = template.innerHTML;

	const contentEl = dialogEl.querySelector('.content');
	contentEl.innerHTML = content;

	const closeEl = dialogEl.querySelector('.close');
	closeEl.addEventListener('click', (e) => {
		e.preventDefault();
		body.removeChild(dialogEl);
	});

	dialogEl.addEventListener('click', ({ currentTarget, target }) => {
		const dialogEl = currentTarget,
			isClickedOnBackDrop = target === dialogEl;

		if (isClickedOnBackDrop) {
			body.removeChild(dialogEl);
		}
	});

	return dialogEl;
}