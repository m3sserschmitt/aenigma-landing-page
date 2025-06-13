
// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links with hash
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.feature-item, .security-point, .stat-item, .trust-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Add click handlers for buttons
    const downloadButtons = document.querySelectorAll('.btn-primary');
    const learnMoreButtons = document.querySelectorAll('.btn-outline');
    
    downloadButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Placeholder for download functionality
            console.log('Download button clicked');
            // You can add actual download logic here
            alert('Download functionality would be implemented here');
        });
    });
    
    learnMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Scroll to security section
            const securitySection = document.getElementById('security');
            if (securitySection) {
                securitySection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add parallax effect to hero background elements
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        const heroBackground = document.querySelector('.hero-background');
        if (heroBackground) {
            heroBackground.style.transform = `translateY(${rate}px)`;
        }
        
        const animatedBgs = document.querySelectorAll('.hero-animated-bg');
        animatedBgs.forEach((bg, index) => {
            const rate = scrolled * (0.2 + index * 0.1);
            bg.style.transform = `translateY(${rate}px)`;
        });
    });
    
    // Add hover effects for feature cards
    const featureCards = document.querySelectorAll('.feature-card, .feature-item');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add typing effect to hero title (optional enhancement)
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.innerHTML;
        heroTitle.innerHTML = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                heroTitle.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        
        // Uncomment the line below to enable typing effect
        // typeWriter();
        
        // For now, just show the text immediately
        heroTitle.innerHTML = text;
    }
    
    // Add smooth reveal animation for security diagram steps
    const diagramSteps = document.querySelectorAll('.diagram-step');
    
    diagramSteps.forEach((step, index) => {
        step.style.opacity = '0';
        step.style.transform = 'translateX(-20px)';
        step.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
        
        observer.observe(step);
    });
    
    // Add loading animation for stats
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        observer.observe(stat);
        
        stat.addEventListener('animationstart', function() {
            // Add counter animation if needed
            const text = this.textContent;
            if (text.includes('%')) {
                // Animate percentage
                const targetValue = parseFloat(text);
                let currentValue = 0;
                const increment = targetValue / 100;
                
                const timer = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= targetValue) {
                        currentValue = targetValue;
                        clearInterval(timer);
                    }
                    this.textContent = currentValue.toFixed(1) + '%';
                }, 20);
            }
        });
    });
});

// Add error handling for missing elements
function safeQuerySelector(selector) {
    try {
        return document.querySelector(selector);
    } catch (error) {
        console.warn(`Element not found: ${selector}`);
        return null;
    }
}

// Add resize handler for responsive adjustments
window.addEventListener('resize', function() {
    // Recalculate any dynamic layouts if needed
    const windowWidth = window.innerWidth;
    
    if (windowWidth < 768) {
        // Mobile adjustments
        document.body.classList.add('mobile');
    } else {
        document.body.classList.remove('mobile');
    }
});

// Initialize on load
window.addEventListener('load', function() {
    // Add any initialization code here
    console.log('Aenigma landing page loaded successfully');
});
