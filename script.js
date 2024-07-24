document.addEventListener('DOMContentLoaded', function() {
    const toggleDarkModeButton = document.getElementById('toggle-dark-mode');
    const body = document.body;

    toggleDarkModeButton.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
    });
});


window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});