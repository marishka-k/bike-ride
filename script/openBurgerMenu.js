const headerBurger = document.querySelector(".header__burger");
const headerLinkBurger = headerBurger.querySelectorAll(".header__link");

function OpenBurger() {
	headerBurgerOpen.classList.remove("header__burger-open_active");
	headerBurgerClose.classList.add("header__burger-close_active");
	headerListPlaseBurger.classList.add("header__list_plase_burger-active");
}

function closeBurger() {
	headerBurgerOpen.classList.add("header__burger-open_active");
	headerBurgerClose.classList.remove("header__burger-close_active");
	headerListPlaseBurger.classList.remove("header__list_plase_burger-active");
}

headerBurgerOpen.addEventListener("click", OpenBurger);
headerBurgerClose.addEventListener("click", closeBurger);
headerLinkBurger.forEach(element => {
	element.addEventListener("click", closeBurger);
});
