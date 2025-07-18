document.addEventListener('DOMContentLoaded', () => {
  const imgs = document.querySelectorAll('.zoomable');
  imgs.forEach(img => {
    img.addEventListener('click', () => {
      img.classList.toggle('zoomed');
    });
  });
});
fetch('Vercel.json')