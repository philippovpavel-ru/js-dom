const leftBTN = document.getElementById('left'),
	rightBTN = document.getElementById('right'),
	itemsList = document.getElementById('items'),
	items = document.querySelectorAll('.item');

const itemWidth = getComputedStyle(items[0]).width,
	step = parseInt(itemWidth),
	preShownItems = 300 / step,
	minRight = 0,
	maxRight = (items.length - preShownItems) * step;

let currentRight = 0;
itemsList.style.right = currentRight;

rightBTN.addEventListener('click', (e) => {
	e.preventDefault();

	if (currentRight < maxRight) {
		currentRight += step;
		itemsList.style.right = `${currentRight}px`;
	}
});

leftBTN.addEventListener('click', (e) => {
	e.preventDefault();

	if (currentRight > minRight) {
		currentRight -= step;
		itemsList.style.right = `${currentRight}px`;
	}
});
