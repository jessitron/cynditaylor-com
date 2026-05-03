// Update copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Add a "copy reference" button next to every gallery item's title.
// Copies the picture's name and absolute image URL to the clipboard.
const COPY_ICON_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>';
const CHECK_ICON_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>';

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.gallery-item').forEach(item => {
        const img = item.querySelector('img');
        const title = item.querySelector('.overlay h3');
        if (!img || !title) return;

        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'copy-btn';
        button.innerHTML = COPY_ICON_SVG;
        button.setAttribute('aria-label', `Copy reference to "${title.textContent.trim()}"`);

        button.addEventListener('click', async () => {
            const url = img.src; // browser resolves to absolute URL
            try {
                await navigator.clipboard.writeText(url);
                button.classList.add('copied');
                button.innerHTML = CHECK_ICON_SVG;
                setTimeout(() => {
                    button.classList.remove('copied');
                    button.innerHTML = COPY_ICON_SVG;
                }, 1500);
            } catch (err) {
                console.error('Copy failed:', err);
            }
        });

        title.appendChild(button);
    });
});

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
                
                // Filter gallery items - support space-separated categories
                galleryItems.forEach(item => {
                    const itemCategories = item.getAttribute('data-category').split(' ');
                    if (category === 'all' || itemCategories.includes(category)) {
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
