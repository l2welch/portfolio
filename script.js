const container = document.querySelector('.container');
const leftPanel = document.querySelector('.left');
const rightPanel = document.querySelector('.right');

let transitioning = false; // ✅ OUTSIDE

function triggerTransition(url, fullWidth, side) {
  if (transitioning) return;
  transitioning = true;

  if (side === "right") {
    leftPanel.style.width = "0px";
    rightPanel.style.left = "0px";
    rightPanel.style.width = fullWidth + "px";
  } else {
    leftPanel.style.width = fullWidth + "px";
    rightPanel.style.width = "0px";
  }

  setTimeout(() => {
    document.body.classList.add("fade-out");
  }, 200);

  setTimeout(() => {
    window.location.href = url;
  }, 600);
}

function updatePanels(x) {
  if (transitioning) return; // stop movement during transition

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

  const threshold = 10;

if (cursorX <= threshold) {
  // Right panel covers screen
  triggerTransition(rightPanel.dataset.url, rect.width, "right");
} 
else if (cursorX >= rect.width - threshold) {
  // Left panel covers screen
  triggerTransition(leftPanel.dataset.url, rect.width, "left");
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

const overlay = document.getElementById("welcomeOverlay");
const closeBtn = document.getElementById("closePopup");

window.addEventListener("load", () => {
  overlay.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
});
