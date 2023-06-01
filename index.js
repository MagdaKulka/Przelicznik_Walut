const select = document.querySelector('.currency');
const btn = document.getElementById('btn');
const input = document.getElementById('input');
const result = document.getElementById('result');

fetch('http://api.nbp.pl/?ref=public-apis')
	.then((data) => data.json())
	.then((data) => display(data));

function display(data) {
	const entries = Object.entries(data);
	for (var i = 0; i < entries.length; i++) {
		select.innerHTML += `<option value="${entries[i][0]}".${entries[i][0]}</option>`;
	}
}
btn.addEventListener('click', () => {
	let currency = select.value;

	let value = input.value;
});
