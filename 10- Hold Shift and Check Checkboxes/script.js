let isShiftPressed = false;

window.addEventListener('keydown', (e) => {
  if (e.key === 'Shift') {
    isShiftPressed = true;
  }
})

window.addEventListener('keyup', (e) => {
  if (e.key === 'Shift') {
    isShiftPressed = false;
  }
})

let inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  input.addEventListener('click', e => {
    if (isShiftPressed) {
      let lastChecked = document.querySelector('input:checked');
      if (lastChecked) {
        let start = Array.from(inputs).indexOf(lastChecked);
        let end = Array.from(inputs).indexOf(input);
        if (start < end) {
          for (let i = start; i <= end; i++) {
            inputs[i].checked = true;
          }
        } else {
          for (let i = end; i <= start; i++) {
            inputs[i].checked = true;
          }
        }
      }
    }
  })
})