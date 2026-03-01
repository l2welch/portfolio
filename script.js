const divider = document.querySelector('.divider');
const leftPanel = document.querySelector('.panel.left');
const rightPanel = document.querySelector('.panel.right');
let isDragging = false;

divider.addEventListener('mousedown', () => isDragging = true);
document.addEventListener('mouseup', () => isDragging = false);
document.addEventListener('mousemove', drag);

function drag(e) {
  if (!isDragging) return;

  const containerWidth = divider.parentElement.offsetWidth;
  let newLeft = e.clientX;

  // Clamp the divider between 0 and container width
  if (newLeft < 0) newLeft = 0;
  if (newLeft > containerWidth) newLeft = containerWidth;

  // Move divider
  divider.style.left = newLeft - divider.offsetWidth/2 + 'px';

  // Resize panels
  leftPanel.style.width = newLeft + 'px';
  rightPanel.style.width = containerWidth - newLeft + 'px';
  rightPanel.style.left = newLeft + 'px';

  // Check for full coverage
  if (newLeft <= 0) {
    window.location.href = rightPanel.dataset.url; // Right covers left
  } else if (newLeft >= containerWidth) {
    window.location.href = leftPanel.dataset.url; // Left covers right
  }
}
