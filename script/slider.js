const cards = document.querySelectorAll(".coverage__card");
const buttonsPrev = document.querySelectorAll(".coverage__button_type_prev");
const buttonsNext = document.querySelectorAll(".coverage__button_type_next");

let index = 0;

function activeCard(n) {
	for (card of cards) {
		card.classList.remove("coverage__card_active");
	}
	cards[n].classList.add("coverage__card_active");
}

function openNextCard() {
	if (index === cards.length - 1) {
		index = 0;
		activeCard(index);
	} else {
		index++;
		activeCard(index);
	}
}

function openPrevCard() {
	if (index === 0) {
		index = cards.length - 1;
		activeCard(index);
	} else {
		index--;
		activeCard(index);
	}
}

buttonsNext.forEach((element) => {
	element.addEventListener("click", openNextCard);
});
buttonsPrev.forEach((element) => {
	element.addEventListener("click", openPrevCard);
});
