const switchBtns = document.querySelectorAll(".switch__btn");
const page = document.querySelector(".page");
const footer = document.querySelector(".footer");
const footerInput = document.querySelector(".footer__input");
const footerCaption = document.querySelector(".footer__caption");
const subtitleSections = document.querySelectorAll(".section-subtitle");
const merckxProfession = document.querySelector(".merckx__profession");
const activeBikeTipes = document.querySelectorAll(".bike__tipe_active");
const switchContents = document.querySelectorAll(".switch__content");

function switchTheme () {
	page.classList.toggle("page_theme_dark");
	footer.classList.toggle("footer_theme_dark");
	footerInput.classList.toggle("footer__input_theme_dark");
	footerCaption.classList.toggle("footer__caption_theme_dark");
	switchBtns.forEach(element => {
		element.classList.toggle("switch__btn_switch_dark");
	});
	subtitleSections.forEach(element => {
		element.classList.toggle("section-subtitle_theme_dark");
	});
	merckxProfession.classList.toggle("merckx__profession_theme_dark");
	bikeTipes.forEach(element => {
		element.classList.toggle("bike__tipe_theme_dark");
	});
	activeBikeTipes.forEach(element => {
		element.classList.toggle("bike__tipe_theme_dark-active");
	});
	switchContents.forEach(element => {
		element.classList.toggle("switch__content_theme_dark");
	});
}



switchBtns.forEach(element => {
	element.addEventListener("click", switchTheme);
});
