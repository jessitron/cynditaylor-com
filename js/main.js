// Update copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Gallery filtering
document.addEventListener('DOMContentLoaded', function() {
    // Only run this code on the gallery page
    if (document.querySelector('.gallery-grid')) {
        const categoryButtons = document.querySelectorAll('.category-btn');
        const galleryItems = document.querySelectorAll('.gallery-item');
        
        // Add click event to category buttons
        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                // Get category value
                const category = button.getAttribute('data-category');
                
                // Filter gallery items
                galleryItems.forEach(item => {
                    if (category === 'all' || item.getAttribute('data-category') === category) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
});

// Form submission handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // In a real implementation, you would send the form data to a server
        // For this static site, we'll just show a success message
        
        const formData = new FormData(contactForm);
        let formValues = {};
        
        for (let [key, value] of formData.entries()) {
            formValues[key] = value;
        }
        
        // Log form data to console (for demonstration)
        console.log('Form submitted:', formValues);
        
        // Show success message
        contactForm.innerHTML = `
            <div class="success-message">
                <h3>Thank You!</h3>
                <p>Your message has been sent successfully. I'll get back to you as soon as possible.</p>
            </div>
        `;
    });
}

// Simple responsive navigation for mobile
const createMobileNav = () => {
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    
    if (header && nav && window.innerWidth < 768) {
        // Create mobile menu button if it doesn't exist
        if (!document.querySelector('.mobile-menu-btn')) {
            const mobileMenuBtn = document.createElement('button');
            mobileMenuBtn.classList.add('mobile-menu-btn');
            mobileMenuBtn.innerHTML = '<span></span><span></span><span></span>';
            mobileMenuBtn.setAttribute('aria-label', 'Toggle navigation menu');
            
            // Insert button before nav
            header.insertBefore(mobileMenuBtn, nav);
            
            // Add click event
            mobileMenuBtn.addEventListener('click', () => {
                nav.classList.toggle('active');
                mobileMenuBtn.classList.toggle('active');
            });
            
            // Add styles
            const style = document.createElement('style');
            style.textContent = `
                .mobile-menu-btn {
                    display: none;
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 10px;
                }
                
                @media (max-width: 767px) {
                    header {
                        position: relative;
                    }
                    
                    .mobile-menu-btn {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        width: 30px;
                        height: 20px;
                    }
                    
                    .mobile-menu-btn span {
                        height: 2px;
                        width: 100%;
                        background-color: var(--primary-color);
                        transition: all 0.3s ease;
                    }
                    
                    .mobile-menu-btn.active span:nth-child(1) {
                        transform: translateY(9px) rotate(45deg);
                    }
                    
                    .mobile-menu-btn.active span:nth-child(2) {
                        opacity: 0;
                    }
                    
                    .mobile-menu-btn.active span:nth-child(3) {
                        transform: translateY(-9px) rotate(-45deg);
                    }
                    
                    nav {
                        position: absolute;
                        top: 100%;
                        left: 0;
                        right: 0;
                        background-color: white;
                        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                        max-height: 0;
                        overflow: hidden;
                        transition: max-height 0.3s ease;
                    }
                    
                    nav.active {
                        max-height: 300px;
                    }
                    
                    nav ul {
                        flex-direction: column;
                        padding: 1rem;
                    }
                    
                    nav ul li {
                        margin: 0.5rem 0;
                    }
                }
            `;
            
            document.head.appendChild(style);
        }
    }
};

// Initialize mobile nav
window.addEventListener('DOMContentLoaded', createMobileNav);
window.addEventListener('resize', createMobileNav);
