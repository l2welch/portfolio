const divider = document.querySelector('.divider');
const leftPanel = document.querySelector('.left');

let isDragging = false;

divider.addEventListener('mousedown', () => {
  isDragging = true;
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  const containerWidth = window.innerWidth;
  const newLeftWidth = (e.clientX / containerWidth) * 100;

  leftPanel.style.width = newLeftWidth + "%";
  divider.style.left = newLeftWidth + "%";
});
