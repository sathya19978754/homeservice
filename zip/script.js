// JavaScript functionality for Home Services App

// Service selection and booking
function selectService(serviceId) {
    const serviceName = getServiceName(serviceId);
    showServiceAlert(serviceName);
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

function showServiceAlert(serviceName) {
    if (confirm(`Would you like to book ${serviceName}?`)) {
        alert(`Great! We'll contact you soon to schedule your ${serviceName} service.`);
    }
}

// Booking popup functions
function openBookingPopup() {
    const popup = document.getElementById('bookingPopup');
    popup.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeBookingPopup() {
    const popup = document.getElementById('bookingPopup');
    popup.classList.remove('show');
    document.body.style.overflow = 'auto';
}

function bookService(serviceName) {
    closeBookingPopup();
    alert(`Booking confirmed for ${serviceName}! We'll contact you within 24 hours.`);
}

// Navigation functions
function scrollToContact() {
    window.location.href = 'contact.html';
}

function showLogin() {
    window.location.href = 'login.html';
}

// Password toggle functionality for login page
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const passwordIcon = document.getElementById('passwordIcon');
    
    if (passwordInput && passwordIcon) {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            passwordIcon.classList.remove('fa-eye-slash');
            passwordIcon.classList.add('fa-eye');
        } else {
            passwordInput.type = 'password';
            passwordIcon.classList.remove('fa-eye');
            passwordIcon.classList.add('fa-eye-slash');
        }
    }
}

// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-input');
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter' && searchInput.value.trim()) {
                performSearch(searchInput.value.trim());
            }
        });
    }
});

function performSearch(query) {
    const services = ['cleaning', 'ac', 'salon', 'handyman', 'healthcare'];
    const foundService = services.find(service => 
        query.toLowerCase().includes(service) || 
        service.includes(query.toLowerCase())
    );
    
    if (foundService) {
        alert(`Found service: ${foundService}. Opening booking options...`);
        openBookingPopup();
    } else {
        alert('Service not found. Please try: cleaning, AC, salon, handyman, or healthcare');
    }
}

// Close popup when clicking outside
document.addEventListener('click', function(event) {
    const popup = document.getElementById('bookingPopup');
    const popupContent = document.querySelector('.popup-content');
    
    if (popup && popup.classList.contains('show') && popupContent) {
        if (!popupContent.contains(event.target)) {
            closeBookingPopup();
        }
    }
});

// Close popup on escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeBookingPopup();
    }
});

// Amazon Email Slider Functionality
function showEmailForm() {
    const initialContent = document.getElementById('amazonInitial');
    const emailForm = document.getElementById('amazonForm');
    
    if (initialContent && emailForm) {
        initialContent.style.display = 'none';
        emailForm.style.display = 'flex';
    }
}

// Email form submission
document.addEventListener('DOMContentLoaded', function() {
    const emailSubmitBtn = document.querySelector('.email-submit-btn');
    
    if (emailSubmitBtn) {
        emailSubmitBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const emailInput = document.querySelector('.email-input');
            const email = emailInput?.value;
            
            if (email && email.includes('@')) {
                alert('Account linked successfully! You will now earn 5% TouchPoints on every booking.');
                emailInput.value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }
});

// Service hover effects
document.addEventListener('DOMContentLoaded', function() {
    const serviceItems = document.querySelectorAll('.service-item');
    
    serviceItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Responsive navigation handling
function toggleMobileMenu() {
    // Add mobile menu functionality if needed
    const actionsSection = document.querySelector('.actions-section');
    if (window.innerWidth <= 768) {
        actionsSection.style.flexDirection = 'row';
        actionsSection.style.gap = '15px';
    }
}

// Window resize handler
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        const contactSection = document.getElementById('contact');
        if (contactSection.style.display === 'block') {
            contactSection.style.display = 'none';
        }
    }
});

// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation for service clicks
function addLoadingEffect(element) {
    element.style.opacity = '0.7';
    element.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'scale(1)';
    }, 200);
}

// Enhanced service selection with loading effect
document.addEventListener('DOMContentLoaded', function() {
    const serviceItems = document.querySelectorAll('.service-item');
    
    serviceItems.forEach(item => {
        item.addEventListener('click', function() {
            addLoadingEffect(this);
        });
    });
});

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    console.log('Home Services App initialized successfully!');
    
    // Hide contact section by default
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.style.display = 'none';
    }
    
    // Add fade-in animation to services
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            item.style.transition = 'all 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });
});