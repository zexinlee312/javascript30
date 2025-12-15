const inputs = document.querySelectorAll('.control-area input');

const update = (event) => {
  document.documentElement.style.setProperty(`--${event.target.id}`, `${event.target.value}${event.target.dataset.sizing ?? ''}`)
}

inputs.forEach(input => {
  input.addEventListener('change', update);
  input.addEventListener('mousemove', update);
})
