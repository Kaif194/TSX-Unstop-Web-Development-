function toggleDarkMode() {
  const body = document.body;
  const icon = document.getElementById('theme-icon');
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDark);
  icon.className = isDark ? 'fas fa-moon' : 'fas fa-sun';
}

window.onload = () => {
  const isDark = localStorage.getItem('darkMode') === 'true';
  if (isDark) {
    document.body.classList.add('dark-mode');
    document.getElementById('theme-icon').className = 'fas fa-moon';
  }
};

function toggleProject(id) {
  const el = document.getElementById(id);
  el.style.display = el.style.display === 'block' ? 'none' : 'block';
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#contact form');
  form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const thankYouMsg = document.createElement('div');
    thankYouMsg.className = 'alert alert-success mt-3';
    thankYouMsg.textContent = 'Thank you for reaching out! I will get back to you soon.';

    form.parentNode.insertBefore(thankYouMsg, form.nextSibling);
    
    
    form.reset();
    setTimeout(() => {
      thankYouMsg.remove();
    }, 5000); // Remove after 5 seconds
    });
});