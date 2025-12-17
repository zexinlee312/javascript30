document.querySelectorAll('.photo').forEach(p => {
  p.addEventListener('click', () => {
    p.classList.toggle('active');
  })
})