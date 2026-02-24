document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scrolling for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Play button interaction (placeholder)
    const playBtn = document.querySelector('.play-btn');
    if (playBtn)
        https://naveenkumarravi1711-bot.github.io/naveeensonu/
        playBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Play video feature coming soon!');
        });
    }

    // Header scroll background
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

