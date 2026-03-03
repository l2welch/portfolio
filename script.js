const divider = document.querySelector('.divider');
const leftPanel = document.querySelector('.panel.left');
const rightPanel = document.querySelector('.panel.right');

document.addEventListener('mousemove', (e) => {
  const containerWidth = divider.parentElement.offsetWidth;
  let cursorX = e.clientX;

  // Clamp cursor between 0 and container width
  if (cursorX < 0) cursorX = 0;
  if (cursorX > containerWidth) cursorX = containerWidth;

  // Move divider to follow cursor
  divider.style.left = cursorX - divider.offsetWidth/2 + 'px';

    // Adjust panel widths
  leftPanel.style.width = cursorX + 'px';
  rightPanel.style.width = containerWidth - cursorX + 'px';
  rightPanel.style.left = cursorX + 'px';

  // Full coverage detection
  if (cursorX <= 0) {
    window.location.href = rightPanel.dataset.url; // Right covers left
  } else if (cursorX >= containerWidth) {
    window.location.href = leftPanel.dataset.url; // Left covers right
  }
});
