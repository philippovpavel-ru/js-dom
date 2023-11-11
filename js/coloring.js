const quantitySelector = document.querySelector('.quantity-selector'),
	colorSelector = document.querySelector('.color-selector'),
	blocksContainer = document.querySelector('.blocks');

let changed = false;

quantitySelector.addEventListener('change', (e) => {
	const quantity = e.target.value,
		markup = createMarkup(quantity);

	blocksContainer.innerHTML = markup;
});

colorSelector.addEventListener('change', (e) => {
	const color = e.target.value,
		items = blocksContainer.querySelectorAll('.item');

	changed = !changed;

	for (let i = 0; i < items.length; i++) {
		const currentBlock = items[i],
			blockNumber = i + 1;

		let colorToApply = '';

		if (changed) {
			colorToApply = blockNumber % 2 !== 0 ? color : '#fff';
		} else {
			colorToApply = blockNumber % 2 === 0 ? color : '#fff';
		}

		currentBlock.style.backgroundColor = colorToApply;
	}
});

function createMarkup(quantity) {
	let markup = '';

	for (let i = 0; i < quantity; i++) {
		const block = document.createElement('div');
		block.className = 'item';
		block.innerText = i + 1;

		markup += block.outerHTML;
	}

	return markup;
}