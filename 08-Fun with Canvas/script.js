const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
const clearBtn = document.querySelector('#clearBtn');
const eraserBtn = document.querySelector('#eraserBtn');
// 设置画布尺寸的函数
function setCanvasSize() {
  try {
    // 获取canvas的边框宽度（10px）
    const borderWidth = 10;
    
    // 计算canvas的实际绘制区域尺寸，减去边框宽度
    const width = window.innerWidth - (borderWidth * 2);
    const height = window.innerHeight - (borderWidth * 2);

    canvas.width = width;
    canvas.height = height;

    console.log(`Canvas size set to: ${width} x ${height}`);
  } catch (error) {
    console.error('Error setting canvas size:', error);
    // 回退到安全尺寸
    canvas.width = 800;
    canvas.height = 600;
  }
}

// 防抖函数，避免频繁重设尺寸
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// 清除画布函数
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // 重置绘图状态
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.lineWidth = 100;
  hue = 0;
  direction = true;
}

// 橡皮擦功能
let isEraserMode = false;

// 切换橡皮擦模式
function toggleEraser() {
  isEraserMode = !isEraserMode;
  
  if (isEraserMode) {
    eraserBtn.classList.add('active');
    // 橡皮擦模式：使用白色擦除
    ctx.globalCompositeOperation = 'destination-out';
    ctx.strokeStyle = 'rgba(117, 30, 30, 1)';
    ctx.lineWidth = 50; // 橡皮擦宽度
  } else {
    eraserBtn.classList.remove('active');
    // 正常绘图模式
    ctx.globalCompositeOperation = 'source-over';
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.lineWidth = 100;
  }
}

// 清除按钮事件监听
clearBtn.addEventListener('click', clearCanvas);

// 橡皮擦按钮事件监听
eraserBtn.addEventListener('click', toggleEraser);

// 初始设置
setCanvasSize(); ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;
let hue = 0;
let isDrawing = false;
let direction = true;


canvas.addEventListener('mousedown', () => {
  isDrawing = true;
});
canvas.addEventListener('mouseup', () => {
  isDrawing = false;
})
canvas.addEventListener('mousemove', (e) => {
  if (!isDrawing) {
    console.log('...')
    return;
  }
  [lastX, lastY] = [e.offsetX, e.offsetY];
  
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  
  
  // 只有在非橡皮擦模式下才改变颜色和线条宽度
  if (!isEraserMode) {
    hue = (hue + 1) % 360;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    
    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
      direction = !direction;
    }

    if(direction) {
      ctx.lineWidth++;
    } else {
      ctx.lineWidth--;
    }
  }
})