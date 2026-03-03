const container = document.querySelector('.container');
const leftPanel = document.querySelector('.left');
const rightPanel = document.querySelector('.right');

function updatePanels(x) {
  const rect = container.getBoundingClientRect();
  let cursorX = x - rect.left;

  // Clamp inside container
  if (cursorX < 0) cursorX = 0;
  if (cursorX > rect.width) cursorX = rect.width;

  // Resize panels
  leftPanel.style.width = cursorX + 'px';
  rightPanel.style.left = cursorX + 'px';
  rightPanel.style.width = rect.width - cursorX + 'px';
}

// Follow cursor
document.addEventListener('mousemove', (e) => {
  updatePanels(e.clientX);
});

// Keep centered on resize
window.addEventListener('resize', () => {
  const center = container.offsetWidth / 2;
  updatePanels(center + container.getBoundingClientRect().left);
});
