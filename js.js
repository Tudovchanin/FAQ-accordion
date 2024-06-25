
const checkboxes = document.querySelectorAll('input');

checkboxes.forEach((checkbox) => {
	checkbox.addEventListener('change', () => {
		checkboxes.forEach((other) => {
			if (other !== checkbox) {
				other.checked = false;
			}
		});
	});
});

