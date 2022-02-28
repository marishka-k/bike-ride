const bikeSliders = document.querySelectorAll(".bike__sliders");
const bikeTipes = document.querySelectorAll(".bike__tipe");
const bikesHighway = document.querySelector("#bikes-highway");
const bikesGravel = document.querySelector("#bikes-gravel");
const bikesTt = document.querySelector("#bikes-tt");
const bikeList = document.querySelector(".bike__list");
const bikePlaceHighway = document.querySelector(".bike__tipe_place_highway");
const bikePlaceGravel = document.querySelector(".bike__tipe_place_gravel");
const bikePlaceTt = document.querySelector(".bike__tipe_place_tt");

function activeBikeSliders() {
	for (slide of bikeSliders) {
		slide.classList.remove("bike__sliders_active");
	}
	for (tipe of bikeTipes) {
		tipe.classList.remove("bike__tipe_active");
	}
}

function removeActivThemeDark(n) {
	if (page.classList.contains("page_theme_dark")) {
		bikeTipes.forEach((element) => {
			element.classList.remove("bike__tipe_theme_dark-active");
		});
		n.classList.add("bike__tipe_theme_dark-active");
	}
}

function openBikesHighway() {
	activeBikeSliders();
	bikesHighway.classList.add("bike__sliders_active");
	bikePlaceHighway.classList.add("bike__tipe_active");
	removeActivThemeDark(bikePlaceHighway);
	bikeList.value = "Шоссе";
}

function openBikesGravel() {
	activeBikeSliders();
	bikesGravel.classList.add("bike__sliders_active");
	bikePlaceGravel.classList.add("bike__tipe_active");
	removeActivThemeDark(bikePlaceGravel);
	bikeList.value = "Грэвел";
}

function openBikesTt() {
	activeBikeSliders();
	bikesTt.classList.add("bike__sliders_active");
	bikePlaceTt.classList.add("bike__tipe_active");
	removeActivThemeDark(bikePlaceTt);
	bikeList.value = "TT";
}

function changeBikeWithBikeListValue() {
	if (bikeList.value === "Шоссе") {
		openBikesHighway();
	} else if (bikeList.value === "Грэвел") {
		openBikesGravel();
	} else if (bikeList.value === "TT") {
		openBikesTt();
	}
}

new Swiper(".bike__sliders", {
	pagination: {
		el: ".swiper-pagination",
		type: "bullets",
		clickable: true,
	},


	breakpoints: {
		320: { slidesPerView: 1 },
		480: { slidesPerView: 2, spaceBetween: 10 },
		992: { slidesPerView: 3, spaceBetween: 30 },
	},

	preloadImages: false,

	lazy: {
		loadPrevNext: false,
	},

	watchOverflow: true,
});

bikeList.addEventListener("input", changeBikeWithBikeListValue);

bikePlaceHighway.addEventListener("click", openBikesHighway);

bikePlaceGravel.addEventListener("click", openBikesGravel);

bikePlaceTt.addEventListener("click", openBikesTt);

console.log(bikeList.value);
