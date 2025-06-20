// Service Selection Functions
function selectService(serviceId) {
    // Open booking popup with service pre-selected
    openServicePopup();
    
    // Pre-select the clicked service after a short delay
    setTimeout(() => {
        const serviceOption = document.getElementById(serviceId);
        if (serviceOption) {
            serviceOption.checked = true;
            // Trigger visual selection
            selectServiceOption(serviceId);
        }
    }, 300);
}

function selectServiceOption(serviceId) {
    // Clear all previous selections
    const options = document.querySelectorAll('.service-option input[type="radio"]');
    options.forEach(option => option.checked = false);
    
    // Select the clicked service
    const selectedOption = document.getElementById(serviceId);
    if (selectedOption) {
        selectedOption.checked = true;
    }
}

function getServiceName(serviceId) {
    const serviceNames = {
        'general-cleaning': 'General Cleaning',
        'ac-cleaning': 'AC Cleaning',
        'home-salon': 'Home Salon',
        'handyman': 'Handyman Services',
        'healthcare': 'Healthcare at Home'
    };
    return serviceNames[serviceId] || 'Service';
}

// Service Popup Functions
function openServicePopup() {
    const popup = document.getElementById('servicePopup');
    if (popup) {
        popup.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

function closeServicePopup() {
    const popup = document.getElementById('servicePopup');
    if (popup) {
        popup.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
}

// Smooth scroll to contact section
function scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Password toggle functionality for login page
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.getElementById('passwordToggleIcon');
    
    if (passwordInput && toggleIcon) {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            toggleIcon.className = 'fas fa-eye-slash';
        } else {
            passwordInput.type = 'password';
            toggleIcon.className = 'fas fa-eye';
        }
    }
}

// Close popup when clicking outside
document.addEventListener('click', function(event) {
    const popup = document.getElementById('servicePopup');
    const popupContent = document.querySelector('.popup-content');
    
    if (popup && popup.classList.contains('show')) {
        if (!popupContent.contains(event.target)) {
            closeServicePopup();
        }
    }
});

// Close popup on escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeServicePopup();
    }
});

// Form validation for login
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            const email = document.getElementById('email');
            const password = document.getElementById('password');
            
            if (!email.value.trim() || !password.value.trim()) {
                event.preventDefault();
                alert('Please fill in all required fields');
                return false;
            }
            
            // Basic email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value)) {
                event.preventDefault();
                alert('Please enter a valid email address');
                return false;
            }
        });
    }
});

// Search functionality (basic implementation)
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.btn-search');
    
    if (searchButton) {
        searchButton.addEventListener('click', function() {
            if (searchInput && searchInput.value.trim()) {
                // Open service popup for any search query
                openServicePopup();
            }
        });
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter' && searchInput.value.trim()) {
                openServicePopup();
            }
        });
    }
});

// Animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.feature-card, .contact-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animate');
        }
    });
}

// Add CSS for animation
const style = document.createElement('style');
style.textContent = `
    .feature-card, .contact-item {
        opacity: 0;
        transform: translateY(50px);
        transition: all 0.6s ease;
    }
    
    .feature-card.animate, .contact-item.animate {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);

// Run animation check on page load
document.addEventListener('DOMContentLoaded', animateOnScroll);

// Auto-dismiss alerts after 5 seconds
document.addEventListener('DOMContentLoaded', function() {
    const alerts = document.querySelectorAll('.alert');
    alerts.forEach(alert => {
        setTimeout(() => {
            if (alert && alert.parentNode) {
                alert.style.opacity = '0';
                setTimeout(() => {
                    alert.remove();
                }, 300);
            }
        }, 5000);
    });
});

// Include SVG icons function for Flask template
function includeSvgIcons() {
    return `
        <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
            <defs>
                <symbol id="cleaning-icon" viewBox="0 0 100 100">
                    <circle cx="50" cy="20" r="15" fill="currentColor"/>
                    <rect x="45" y="35" width="10" height="40" fill="currentColor"/>
                    <ellipse cx="50" cy="80" rx="20" ry="8" fill="currentColor"/>
                </symbol>
                
                <symbol id="ac-icon" viewBox="0 0 100 100">
                    <rect x="20" y="30" width="60" height="40" rx="5" fill="currentColor"/>
                    <line x1="30" y1="40" x2="70" y2="40" stroke="white" stroke-width="2"/>
                    <line x1="30" y1="50" x2="70" y2="50" stroke="white" stroke-width="2"/>
                    <line x1="30" y1="60" x2="70" y2="60" stroke="white" stroke-width="2"/>
                </symbol>
                
                <symbol id="salon-icon" viewBox="0 0 100 100">
                    <circle cx="50" cy="35" r="20" fill="currentColor"/>
                    <path d="M30 55 Q50 45 70 55 L70 75 Q50 85 30 75 Z" fill="currentColor"/>
                    <circle cx="42" cy="30" r="3" fill="white"/>
                    <circle cx="58" cy="30" r="3" fill="white"/>
                </symbol>
                
                <symbol id="handyman-icon" viewBox="0 0 100 100">
                    <rect x="20" y="40" width="60" height="8" fill="currentColor"/>
                    <circle cx="30" cy="44" r="6" fill="white"/>
                    <rect x="45" y="20" width="10" height="60" fill="currentColor"/>
                    <polygon points="40,15 60,15 55,25 45,25" fill="currentColor"/>
                </symbol>
                
                <symbol id="healthcare-icon" viewBox="0 0 100 100">
                    <rect x="40" y="20" width="20" height="60" fill="currentColor"/>
                    <rect x="20" y="40" width="60" height="20" fill="currentColor"/>
                    <circle cx="50" cy="50" r="35" stroke="currentColor" stroke-width="3" fill="none"/>
                </symbol>
            </defs>
        </svg>
    `;
}

// Make the function available globally for Flask template
window.includeSvgIcons = includeSvgIcons;
