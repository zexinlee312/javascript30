function debounce(fn, delay) {
  let timer;
  return function(...args) {
    const context = this;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  }
} 

function throttle(fn, delay) {
  let lastTime = 0;
  return function(...args) {
    let now = new Date();
    let context = this;
    if (now - lastTime > delay) {
      fn.apply(context, args);
      lastTime = now;
    }
  }
}

function slideIn() {
  const items = document.querySelectorAll('.slide-in');
  items.forEach(item => {
    const windowHeight = window.innerHeight;
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < windowHeight - 100) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  })
}

window.addEventListener('scroll', debounce(() => {
  slideIn();
  console.log('scroll');
}, 50))
