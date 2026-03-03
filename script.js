const divider = document.querySelector('.divider');
const leftPanel = document.querySelector('.panel.left');
const rightPanel = document.querySelector('.panel.right');

document.addEventListener('mousemove', (e) => {
  const container = document.querySelector('.container');
  const rect = container.getBoundingClientRect();

  let cursorX = e.clientX - rect.left;

  if (cursorX < 0) cursorX = 0;
  if (cursorX > rect.width) cursorX = rect.width;

  leftPanel.style.width = cursorX + 'px';
  rightPanel.style.left = cursorX + 'px';
  rightPanel.style.width = rect.width - cursorX + 'px';
});

  // Full coverage detection
  if (cursorX <= 0) {
    window.location.href = "art.html"; // Right covers left
  } else if (cursorX >= containerWidth) {
    window.location.href = "engineering.html"; // Left covers right
  }
});
