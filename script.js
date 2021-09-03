const r = document.querySelector(":root");
const slider = document.getElementById("PriceChoose");
const sliderPhone = document.getElementById("PriceChoosePhone");
const pageviews = document.getElementById("pageviews");
const price = document.getElementById("price");
const checkbox = document.getElementById("checkbox");

console.log(slider.style.display);

let options = [
	"10K PAGEVIEWS",
	"50K PAGEVIEWS",
	"100K PAGEVIEWS",
	"500K PAGEVIEWS",
	"1M PAGEVIEWS",
];
let prices_def = [8, 12, 16, 24, 36];
let prices = [...prices_def];
let min = slider.min;
let max = slider.max;
let value;
let Discount = 25;

slider.addEventListener("input", update);
sliderPhone.addEventListener("input", update);
checkbox.addEventListener("change", () => {
	checkbox.checked
		? prices.forEach((element) => {
				prices[prices.indexOf(element)] = element * 0.75;
		  })
		: (prices = [...prices_def]);
	update();
});

function update() {
	let SliderValue =
		window.getComputedStyle(slider).display === "flex"
			? slider.value
			: sliderPhone.value;

	window.getComputedStyle(slider).display !== "flex"
		? slider.value = SliderValue
		: sliderPhone.value = SliderValue;

	//change color of track
	value = ((SliderValue - min) * 100) / (max - min);
	r.style.setProperty("--sliderTrackProgress", value + "%");

	//update pageviews info
	pageviews.innerText = options[SliderValue - 1];
	price.innerText = prices[SliderValue - 1];
}

update();