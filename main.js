// Main JavaScript File
document.addEventListener('DOMContentLoaded', function() {
    // DOM is fully loaded and parsed
    console.log('Portfolio website loaded');
    
    // Initialize all functionality
    initLoader();
    initDynamicContent();
    initTypingEffect();
    initCodeEditorTyping();
    initNavbar();
    initSmoothScrolling();
    initSectionHighlighting();
    initContactForm();
    initEnhancedAnimations();
    initScrollProgress();
});

// Initialize all dynamic content
function initDynamicContent() {
    generateProjectsContent();
    generateExperienceContent();
    generateSkillsContent();
    populateContactInfo();
    updatePersonalInfo();
}

// Code Editor Character-by-Character Typing Animation
function initCodeEditorTyping() {
    const codeElements = [
        { id: 'code-name', text: 'Shaik Adil', delay: 3000 },
        { id: 'code-title', text: 'Java Full Stack Developer', delay: 3500 },
        { id: 'code-location', text: 'India', delay: 4000 },
        { id: 'code-email', text: 'shaikadil096@gmail.com', delay: 4500 },
        { id: 'code-skills', text: 'Java, MySQL, HTML, CSS, JavaScript', delay: 5000 },
        { id: 'code-experience', text: 'TAP Academy Trainee', delay: 5500 },
        { id: 'code-passion', text: 'Building innovative solutions', delay: 6000 },
        { id: 'code-status', text: 'Available for opportunities', delay: 6500 }
    ];

    codeElements.forEach(({ id, text, delay }) => {
        setTimeout(() => {
            typeCodeText(id, text);
        }, delay);
    });
}

function typeCodeText(elementId, text) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    element.textContent = '';
    element.classList.add('typing-cursor');
    
    let index = 0;
    const typeInterval = setInterval(() => {
        element.textContent += text[index];
        index++;
        
        if (index >= text.length) {
            clearInterval(typeInterval);
            setTimeout(() => {
                element.classList.remove('typing-cursor');
            }, 500);
        }
    }, 50);
}

// Enhanced Section Highlighting in Navbar
function initSectionHighlighting() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '-70px 0px -70px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const sectionId = entry.target.id;
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (entry.isIntersecting) {
                // Remove active class from all nav links
                navLinks.forEach(link => link.classList.remove('active'));
                // Add active class to current section's nav link
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    }, observerOptions);
    
    sections.forEach(section => observer.observe(section));
}

// Enhanced Animations with Intersection Observer
function initEnhancedAnimations() {
    // Section fade-in animations
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    document.querySelectorAll('section').forEach(section => {
        sectionObserver.observe(section);
    });
    
    // Timeline items animation
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.3
    });
    
    document.querySelectorAll('.timeline-item').forEach(item => {
        timelineObserver.observe(item);
    });
    
    // Skill progress bars animation
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll('.skill-progress-bar');
                progressBars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.setProperty('--progress-width', width);
                });
            }
        });
    }, {
        threshold: 0.5
    });
    
    document.querySelectorAll('.skill-category').forEach(category => {
        skillObserver.observe(category);
    });
    
    // Project cards stagger animation
    const projectObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 200);
            }
        });
    }, {
        threshold: 0.2
    });
    
    document.querySelectorAll('.project-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        projectObserver.observe(card);
    });
}

// Enhanced Smooth Scrolling
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 70;
                
                // Add smooth scroll with easing
                const startPosition = window.pageYOffset;
                const distance = offsetTop - startPosition;
                const duration = 1000;
                let start = null;
                
                function smoothScroll(timestamp) {
                    if (!start) start = timestamp;
                    const progress = timestamp - start;
                    const percentage = Math.min(progress / duration, 1);
                    
                    // Easing function
                    const ease = easeInOutCubic(percentage);
                    
                    window.scrollTo(0, startPosition + distance * ease);
                    
                    if (progress < duration) {
                        requestAnimationFrame(smoothScroll);
                    }
                }
                
                requestAnimationFrame(smoothScroll);
            }
        });
    });
}

// Easing function for smooth scrolling
function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}

// Enhanced Loader with smooth fade-out
function initLoader() {
    const loader = document.getElementById('loader');
    
    setTimeout(() => {
        loader.classList.add('fade-out');
        
        setTimeout(() => {
            loader.style.display = 'none';
            // Trigger initial animations after loader disappears
            document.querySelector('.hero').classList.add('visible');
        }, 800);
    }, LOADER_DURATION);
}

// Enhanced Scroll Progress Indicator
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 4px;
        background: linear-gradient(135deg, #a855f7, #3b82f6);
        z-index: 10001;
        transition: width 0.1s ease;
        box-shadow: 0 2px 10px rgba(168, 85, 247, 0.3);
    `;
    document.body.appendChild(progressBar);
    
    const updateProgress = debounce(() => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = Math.min((scrollTop / docHeight) * 100, 100);
        progressBar.style.width = scrollPercent + '%';
    }, 10);
    
    window.addEventListener('scroll', updateProgress);
}

// Generate Projects Section Dynamically
function generateProjectsContent() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;
    
    // Clear existing content
    projectsGrid.innerHTML = '';
    
    PROJECTS_DATA.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPiR7cHJvamVjdC50aXRsZX08L3RleHQ+PC9zdmc+'">
                <div class="project-overlay">
                    <div class="project-links">
                        <a href="${project.links.live}" class="project-link" target="_blank" title="View Live">
                            <i class="fas fa-external-link-alt"></i>
                        </a>
                        <a href="${project.links.github}" class="project-link" target="_blank" title="View Code">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Generate Experience Timeline Dynamically
function generateExperienceContent() {
    const timeline = document.querySelector('.timeline');
    if (!timeline) return;
    
    // Clear existing content
    timeline.innerHTML = '';
    
    EXPERIENCE_DATA.forEach((experience, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        timelineItem.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <div class="timeline-date">${experience.endDate}</div>
                <h3>${experience.title}</h3>
                <h4>${experience.company}</h4>
                <p>${experience.description}</p>
                <div class="timeline-skills">
                    ${experience.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
                ${experience.achievements ? `
                    <div class="timeline-achievements">
                        <h5>Key Learning Areas:</h5>
                        <ul>
                            ${experience.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
            </div>
        `;
        
        timeline.appendChild(timelineItem);
    });
}

// Generate Skills Section Dynamically
function generateSkillsContent() {
    const skillsGrid = document.querySelector('.skills-grid');
    if (!skillsGrid) return;
    
    // Clear existing content
    skillsGrid.innerHTML = '';
    
    Object.entries(SKILLS_DATA).forEach(([category, skills]) => {
        const skillCategory = document.createElement('div');
        skillCategory.className = 'skill-category';
        
        skillCategory.innerHTML = `
            <h3>${category}</h3>
            <div class="skills-list">
                ${skills.map(skill => `
                    <div class="skill-item" title="${skill.name} - ${skill.level}%">
                        <i class="${skill.icon}"></i>
                        <span>${skill.name}</span>
                        <div class="skill-progress">
                            <div class="skill-progress-bar" style="width: ${skill.level}%"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        
        skillsGrid.appendChild(skillCategory);
    });
}

// Populate Contact Information Dynamically
function populateContactInfo() {
    // Update contact items
    const contactInfo = document.querySelector('.contact-info');
    if (contactInfo) {
        contactInfo.innerHTML = `
            <div class="contact-item">
                <div class="contact-icon">
                    <i class="fas fa-envelope"></i>
                </div>
                <div class="contact-details">
                    <h3>Email</h3>
                    <p>${CONTACT_INFO.personal.email}</p>
                </div>
            </div>
            <div class="contact-item">
                <div class="contact-icon">
                    <i class="fas fa-phone"></i>
                </div>
                <div class="contact-details">
                    <h3>Phone</h3>
                    <p>${CONTACT_INFO.personal.phone}</p>
                </div>
            </div>
            <div class="contact-item">
                <div class="contact-icon">
                    <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="contact-details">
                    <h3>Location</h3>
                    <p>${CONTACT_INFO.personal.location}</p>
                </div>
            </div>
            <div class="contact-item">
                <div class="contact-icon">
                    <i class="fas fa-briefcase"></i>
                </div>
                <div class="contact-details">
                    <h3>Status</h3>
                    <p>${CONTACT_INFO.personal.availability}</p>
                </div>
            </div>
        `;
    }
    
    // Update social links
    const socialLinks = document.querySelector('.social-links');
    if (socialLinks) {
        socialLinks.innerHTML = CONTACT_INFO.social.map(social => `
            <a href="${social.url}" class="social-link" target="_blank" title="${social.name}" style="--social-color: ${social.color}">
                <i class="${social.icon}"></i>
            </a>
        `).join('');
    }
}

// Update Personal Information in Hero Section
function updatePersonalInfo() {
    // Update hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        const nameElement = heroContent.querySelector('h1 .highlight');
        if (nameElement) {
            nameElement.textContent = PERSONAL_INFO.name;
        }
        
        const descriptionElement = heroContent.querySelector('.hero-description');
        if (descriptionElement) {
            descriptionElement.textContent = PERSONAL_INFO.description;
        }
        
        // Update resume download link
        const resumeBtn = heroContent.querySelector('.btn-primary.liquid-glass');
        if (resumeBtn) {
            resumeBtn.href = CONTACT_INFO.resume.url;
            resumeBtn.download = CONTACT_INFO.resume.filename;
        }
    }
    
    // Update navbar logo
    const navLogo = document.querySelector('.nav-logo h2');
    if (navLogo) {
        navLogo.textContent = PERSONAL_INFO.name;
    }
    
    // Update page title
    document.title = `${PERSONAL_INFO.name} - ${PERSONAL_INFO.title}`;
    
    // Update footer
    const footerText = document.querySelector('.footer-text');
    if (footerText) {
        footerText.innerHTML = `
            <p>&copy; 2024 ${PERSONAL_INFO.name}. All rights reserved.</p>
            <p>${PERSONAL_INFO.title} | Portfolio Website</p>
        `;
    }
}

// Typing effect for hero section
function initTypingEffect() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;
    
    let currentTextIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    
    function typeText() {
        const currentText = TYPING_TEXTS[currentTextIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, currentCharIndex - 1);
            currentCharIndex--;
        } else {
            typingElement.textContent = currentText.substring(0, currentCharIndex + 1);
            currentCharIndex++;
        }
        
        // Determine typing speed
        let typeSpeed = isDeleting ? TYPING_SPEED / 2 : TYPING_SPEED;
        
        // Check if word is complete
        if (!isDeleting && currentCharIndex === currentText.length) {
            // Pause at end of word
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && currentCharIndex === 0) {
            isDeleting = false;
            currentTextIndex = (currentTextIndex + 1) % TYPING_TEXTS.length;
            typeSpeed = 500;
        }
        
        setTimeout(typeText, typeSpeed);
    }
    
    // Start typing effect after delay
    setTimeout(typeText, TYPING_DELAY);
}

// Navbar functionality
function initNavbar() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navbar = document.getElementById('navbar');
    
    // Hamburger menu toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        // Close menu when clicking on nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
    
    // Enhanced navbar scroll effect
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 50) {
            navbar.style.background = 'rgba(26, 15, 63, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(168, 85, 247, 0.1)';
            navbar.style.backdropFilter = 'blur(20px)';
        } else {
            navbar.style.background = 'rgba(26, 15, 63, 0.95)';
            navbar.style.boxShadow = 'none';
            navbar.style.backdropFilter = 'blur(10px)';
        }
        
        // Hide/show navbar on scroll
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });
}

// Contact form functionality
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !email || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Simulate form submission
            showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
            contactForm.reset();
        });
    }
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Enhanced notification system
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '15px 25px',
        borderRadius: '10px',
        color: 'white',
        fontWeight: '500',
        zIndex: '10000',
        transform: 'translateX(400px) scale(0.8)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        maxWidth: '300px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
    });
    
    // Set background color based on type
    if (type === 'success') {
        notification.style.background = 'linear-gradient(135deg, #10b981, #059669)';
    } else if (type === 'error') {
        notification.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
    } else {
        notification.style.background = 'linear-gradient(135deg, #3b82f6, #2563eb)';
    }
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0) scale(1)';
    }, 100);
    
    // Remove after delay
    setTimeout(() => {
        notification.style.transform = 'translateX(400px) scale(0.8)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 400);
    }, 4000);
}

// Utility function for debouncing
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===== CONTACT FORM (SAFE VERSION) =====
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email");
      return;
    }

    alert("Thank you " + name + "! Your message has been sent.");

    form.reset();
  });
});


