const footerButton = document.querySelector(".footer__button");

footerInput.onblur = function () {
	footerInputBlock.classList.remove("footer__input-block_active");
};

footerInput.onfocus = function () {
	footerInputBlock.classList.add("footer__input-block_active");
	footerButton.classList.add("footer__button_active");
	if (footerInputBlock.classList.contains("footer__input-block_type_invalid")) {
		footerInputBlock.classList.remove("footer__input-block_type_invalid");
		error.innerHTML = "";
	}
};

function sendEmail() {
	if (
		!footerInput.value.includes("@") ||
			footerInput.value.includes("/[а-я]/i") ||
			footerInput.value.includes(" ") ||
		footerInput.value === ""
	) {
		footerInputBlock.classList.add("footer__input-block_type_invalid");
		error.innerHTML = "Пожалуйста, введите правильный email.";
	}
	else {
		footerInput.value = "Круто!";
		footerInput.disabled = true;
		footerButton.classList.remove("footer__button_active");
	}
}

footerButton.addEventListener("click", sendEmail);
