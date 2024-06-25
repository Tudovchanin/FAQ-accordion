
const elements = document.querySelectorAll('input');

elements.forEach(v => v.addEventListener('change', (e) => {
  elements.forEach((v) => {
    e.target !== v ? v.checked = false : v.checked = true;
  });
}));

