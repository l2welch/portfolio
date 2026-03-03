const container = document.querySelector('.container');
const leftPanel = document.querySelector('.left');
const rightPanel = document.querySelector('.right');

function updatePanels(x) {
  const rect = container.getBoundingClientRect();
  let cursorX = x - rect.left;

  if (cursorX < 0) cursorX = 0;
  if (cursorX > rect.width) cursorX = rect.width;

  leftPanel.style.width = cursorX + 'px';
  rightPanel.style.left = cursorX + 'px';
  rightPanel.style.width = rect.width - cursorX + 'px';

  // Swap stacking order
  if (cursorX < rect.width / 2) {
    rightPanel.style.zIndex = 2;
    leftPanel.style.zIndex = 1;
  } else {
    leftPanel.style.zIndex = 2;
    rightPanel.style.zIndex = 1;
  }

  const threshold = 5;

  if (cursorX <= threshold) {
    window.location.href = rightPanel.dataset.url;
  } 
  else if (cursorX >= rect.width - threshold) {
    window.location.href = leftPanel.dataset.url;
  }
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

