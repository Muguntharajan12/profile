// Card highlight toggle on click or keyboard
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', function() {
    this.classList.toggle('active');
  });
  card.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      this.classList.toggle('active');
      e.preventDefault();
    }
  });
});

// Resume file existence check (client-side simulation)
document.addEventListener('DOMContentLoaded', function() {
  const resumeLink = document.getElementById('resume-link');
  const warning = document.getElementById('resume-warning');
  fetch(resumeLink.href, { method: 'HEAD' })
    .then(response => {
      if (!response.ok) {
        warning.style.display = '';
      }
    })
    .catch(() => {
      warning.style.display = '';
    });
});
