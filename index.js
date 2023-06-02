const select = document.querySelector('.currency');
const btn = document.getElementById('btn');
const input = document.getElementById('input');
const result = document.getElementById('result');

fetch('https://api.nbp.pl/api/exchangerates/tables/a/')
	.then((data) => data.json())
	.then((data) => display(data));

function display(data) {
	console.log(data[0].rates);
	data[0].rates.forEach((element) => {
		const option = document.createElement('option');
		option.textContent = element.currency;
		option.value = element.mid;
		select.appendChild(option);
	});
}
btn.addEventListener('click', () => {
	let rate = select.value;
	let value = input.value;
	if (value === '' || value < 0) {
		window.alert('podaj poprawną wartość');
	} else {
		result.textContent = value * rate;
	}
});
