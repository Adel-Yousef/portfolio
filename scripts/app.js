document.addEventListener('DOMContentLoaded', function() {
    // ===== Typewriter Effect =====
    const texts = ["Web Developer", "Backend Developer", "Software Engineer", "Full Stack Developer"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typewriterElement = document.querySelector('.typewriter-text');
    
    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typewriterElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriterElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 1000; 
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 250;
        }
        
        setTimeout(type, typeSpeed);
    }
    
    if (typewriterElement) {
        setTimeout(type, 500);
    }

    // ===== Mobile Sidebar Toggle =====
    const hamburgIcon = document.querySelector('.hamburg');
    const cancelIcon = document.querySelector('.cancel');
    const dropdownMenu = document.querySelector('.dropdown');

    if (hamburgIcon && cancelIcon && dropdownMenu) {
        hamburgIcon.addEventListener('click', () => {
            dropdownMenu.style.display = 'flex';
        });

        cancelIcon.addEventListener('click', () => {
            dropdownMenu.style.display = 'none';
        });

        const dropdownLinks = dropdownMenu.querySelectorAll('a');
        dropdownLinks.forEach(link => {
            link.addEventListener('click', () => {
                dropdownMenu.style.display = 'none';
            });
        });
    }
});
