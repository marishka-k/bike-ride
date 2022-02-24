const SwitchBtns = document.querySelectorAll(".switch__btn");
const page = document.querySelector(".page");

function switchTheme () {
	SwitchBtns.forEach(element => {
		element.classList.toggle("switch__btn_switch_dark");
	});
	page.classList.toggle("page_theme_dark")
}



SwitchBtns.forEach(element => {
	element.addEventListener("click", switchTheme);
});
