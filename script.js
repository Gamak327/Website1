// Activate sidebar nav
const sidebarLinks = document.querySelectorAll('.sidebar .nav-link');
sidebarLinks.forEach(link => {
    link.addEventListener('click', function() {
        sidebarLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// Highlight active section in sidebar
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.sidebar .nav-link');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Dark mode functionality
const darkModeToggle = document.getElementById('darkModeToggle');
const theme = localStorage.getItem('theme');

// Check for saved theme preference
if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
}

// Toggle dark mode
darkModeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');

    if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
    }
});

// Modal functionality
function openImageModal(imgSrc, imgAlt) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('expandedImage');
}
