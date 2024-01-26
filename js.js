


const checkboxes = document.querySelectorAll('input');

console.log('1');
checkboxes.forEach((checkbox) => {
	console.log('2');
	checkbox.addEventListener('change', () => {
		console.log('3');
		checkboxes.forEach((other) => {
			console.log('4');
			if (other !== checkbox) {
				console.log('5');
				other.checked = false;
			}
		});
	});
});

