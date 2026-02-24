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
    if (playBtn) {
        playBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Play video feature coming soon!');
        });
    }

    // Typing Effect for Title
    const title = document.querySelector('.hero h1');
    const text = title.innerText;
    title.innerText = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            title.innerText += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    setTimeout(typeWriter, 500);

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section, .skill-card, .resume-item').forEach(el => {
        el.classList.add('hide');
        observer.observe(el);
    });

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
