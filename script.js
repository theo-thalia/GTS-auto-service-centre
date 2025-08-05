
// Smooth scrolling function
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Form submission handler
function handleFormSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const form = event.target;
    const formData = new FormData(form);
    
    // Show success message
    alert('Thank you for your message! We will contact you within 24 hours to schedule your appointment.');
    
    // Reset form
    form.reset();
}

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(26, 26, 26, 0.95)';
    } else {
        header.style.background = '#1a1a1a';
    }
});

// Animate service cards on scroll
function animateOnScroll() {
    const cards = document.querySelectorAll('.service-card');
    
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const cardVisible = 150;
        
        if (cardTop < window.innerHeight - cardVisible) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
}

// Initialize animations
document.addEventListener('DOMContentLoaded', function() {
    // Set initial state for service cards
    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Add scroll listener
    window.addEventListener('scroll', animateOnScroll);
    
    // Run animation on load
    animateOnScroll();
});

// Mobile menu functionality (if needed for future enhancements)
function toggleMobileMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('mobile-active');
}

// Add click-to-call functionality
document.addEventListener('DOMContentLoaded', function() {
    const phoneNumbers = document.querySelectorAll('.phone span');
    phoneNumbers.forEach(phone => {
        phone.style.cursor = 'pointer';
        phone.addEventListener('click', function() {
            window.location.href = 'tel:' + phone.textContent;
        });
    });
});

// Service price calculator (basic example)
function calculateEstimate(serviceType) {
    const prices = {
        'oil-change': 29.99,
        'engine-repair': 89.99,
        'battery-service': 49.99,
        'tire-service': 19.99,
        'brake-repair': 79.99,
        'ac-service': 59.99
    };
    
    return prices[serviceType] || 0;
}

// Add floating action button for quick contact
document.addEventListener('DOMContentLoaded', function() {
    const fab = document.createElement('div');
    fab.innerHTML = '<i class="fas fa-phone"></i>';
    fab.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 60px;
        height: 60px;
        background: #ff6b35;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 20px;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(255, 107, 53, 0.4);
        z-index: 1000;
        transition: transform 0.3s ease;
    `;
    
    fab.addEventListener('click', function() {
        window.location.href = 'tel:(555) 123-4567';
    });
    
    fab.addEventListener('mouseenter', function() {
        fab.style.transform = 'scale(1.1)';
    });
    
    fab.addEventListener('mouseleave', function() {
        fab.style.transform = 'scale(1)';
    });
    
    document.body.appendChild(fab);
});
