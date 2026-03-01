document.addEventListener("DOMContentLoaded", function () {

  const divider = document.querySelector('.divider');
  const leftPanel = document.querySelector('.left');
  const container = document.querySelector('.container');

  let isDragging = false;

  divider.addEventListener('mousedown', function () {
    isDragging = true;
  });

  document.addEventListener('mouseup', function () {
    isDragging = false;
  });

  document.addEventListener('mousemove', function (e) {
    if (!isDragging) return;

    const rect = container.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const percentage = (offsetX / rect.width) * 100;

    leftPanel.style.width = percentage + "%";
    divider.style.left = percentage + "%";
  });

});
