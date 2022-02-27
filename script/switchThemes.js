const switchBtns = document.querySelectorAll(".switch__btn");
const page = document.querySelector(".page");
const headerBurgerOpen = document.querySelector(".header__burger-open");
const headerBurgerClose = document.querySelector(".header__burger-close");
const headerListPlaseBurger = document.querySelector(".header__list_plase_burger");
const footer = document.querySelector(".footer");
const footerInputBlock = document.querySelector(".footer__input-block");
const footerInput = document.querySelector(".footer__input");
const footerCaption = document.querySelector(".footer__caption");
const subtitleSections = document.querySelectorAll(".section-subtitle");
const merckxProfession = document.querySelector(".merckx__profession");
const activeBikeTipes = document.querySelectorAll(".bike__tipe_active");
const switchContents = document.querySelectorAll(".switch__content");

function switchTheme() {
	page.classList.toggle("page_theme_dark");
	headerBurgerOpen.classList.toggle("header__burger-open_theme_dark");
	headerBurgerClose.classList.toggle("header__burger-close_theme_dark");
	headerListPlaseBurger.classList.toggle("header__list_plase_burger_theme_dark");
	footer.classList.toggle("footer_theme_dark");
	footerInputBlock.classList.toggle("footer__input-block_theme_dark");
	footerInput.classList.toggle("footer__input_theme_dark");
	footerCaption.classList.toggle("footer__caption_theme_dark");
	merckxProfession.classList.toggle("merckx__profession_theme_dark");
	switchBtns.forEach((element) => {
		element.classList.toggle("switch__btn_switch_dark");
	});
	subtitleSections.forEach((element) => {
		element.classList.toggle("section-subtitle_theme_dark");
	});
	bikeTipes.forEach((element) => {
		element.classList.toggle("bike__tipe_theme_dark");
	});
	activeBikeTipes.forEach((element) => {
		element.classList.toggle("bike__tipe_theme_dark-active");
	});
	switchContents.forEach((element) => {
		element.classList.toggle("switch__content_theme_dark");
	});
}

switchBtns.forEach((element) => {
	element.addEventListener("click", switchTheme);
});
