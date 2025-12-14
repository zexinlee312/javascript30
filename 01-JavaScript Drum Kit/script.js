// let timeout = null;
window.addEventListener('keydown', (event) => {
  // console.log(event.code)
  const validKeys = ['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL'];
  if (validKeys.includes(event.code)) {
    const audio = document.querySelector(`audio[data-key="${event.code}"]`);
    const key = document.querySelector(`div[data-key="${event.code}"]`);
    if (!audio) { return; }
    key.classList.add('playing');
    // 方法一：通过timeout实现
    // if (timeout) {
    //   clearTimeout(timeout);
    // }
    // timeout = setTimeout(() => {
    //   key.classList.remove('playing');
    // }, 500);
    audio.currentTime = 0;
    audio.play();
  } else {
    return;
  }
});


document.querySelectorAll('.key').forEach((key) => {
  key.addEventListener('transitionend', (event) => {
    console.log('event', event);
    if (event.propertyName !== 'transform') { return; }
    key.classList.remove('playing');
  });
});