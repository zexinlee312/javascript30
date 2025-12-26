const container = document.querySelector('.container');
const h1 = document.querySelector('h1');

function shadowMove(event) {
    // 获取鼠标相对于容器的坐标
  const rect = container.getBoundingClientRect();
  const offsetX = event.clientX - rect.left;
  const offsetY = event.clientY - rect.top;
  // const { offsetX, offsetY } = event;
  const { width, height } = container.getBoundingClientRect();
  console.log(offsetX, offsetY, width, height);
  const x = offsetX / width - 0.5;
  const y = offsetY / height - 0.5;
  h1.style.textShadow = `${x * 20}px ${y * 20}px 0 rgba(0, 0, 0, 0.5)`;
}

container.addEventListener('mousemove', shadowMove);
