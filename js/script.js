// small help
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // keytboard accessibility
  document.querySelectorAll('.carousel-link').forEach(link => {
    link.setAttribute('tabindex', '0');
    link.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') link.click();
    });
  });
});
