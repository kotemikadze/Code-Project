document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.navbar ul');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "☰";
    toggleButton.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        margin-left: auto;
        display: none;
    `;
    navbar.parentElement.insertBefore(toggleButton, navbar);

  
    toggleButton.addEventListener("click", () => {
        navbar.classList.toggle("show");
    });


    const updateNavbar = () => {
        if (window.innerWidth <= 768) {
            toggleButton.style.display = "block";
            navbar.style.display = "none";
            navbar.classList.remove("show");
        } else {
            toggleButton.style.display = "none";
            navbar.style.display = "flex";
        }
    };

    updateNavbar();
    window.addEventListener("resize", updateNavbar);
});
document.addEventListener("DOMContentLoaded", () => {
    const skillBars = document.querySelectorAll('.skill-bar');
    window.addEventListener('scroll', () => {
        skillBars.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                bar.style.width = bar.getAttribute('style').split(':')[1].trim();
            }
        });
    });
});

// Lightbox functionality
const images = document.querySelectorAll('.gallery-img');
const lightboxModal = document.getElementById('lightbox-modal');
const lightboxImg = document.getElementById('lightbox-img');

images.forEach(image => {
    image.addEventListener('click', () => {
        lightboxModal.style.display = 'flex';
        lightboxImg.src = image.src;
    });
});

function closeLightbox() {
    lightboxModal.style.display = 'none';
}