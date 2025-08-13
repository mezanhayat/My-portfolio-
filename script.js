document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.createElement('div');
    mobileNav.className = 'mobile-nav';
    
    // Add mobile nav links
    mobileNav.innerHTML = `
        <a href="index.html">Home</a>
        <a href="#projects">Projects</a>
        <a href="about.html">About</a>
    `;
    
    document.body.appendChild(mobileNav);
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileNav.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            mobileNav.classList.remove('active');
        });
    });
    
    // Scroll to top button
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('active');
        } else {
            scrollToTopBtn.classList.remove('active');
        }
    });
    
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Social ball toggle
    const socialBall = document.querySelector('.social-ball');
    
    socialBall.addEventListener('click', function() {
        socialBall.classList.toggle('active');
    });
    
    // Make social ball follow scroll
    let lastScrollPosition = 0;
    const socialBallInitialBottom = 32;
    
    window.addEventListener('scroll', function() {
        const currentScrollPosition = window.pageYOffset;
        
        if (currentScrollPosition > lastScrollPosition) {
            // Scrolling down
            const newBottom = Math.max(10, socialBallInitialBottom - (currentScrollPosition - lastScrollPosition) / 2);
            socialBall.style.bottom = `${newBottom}px`;
        } else {
            // Scrolling up
            const newBottom = Math.min(socialBallInitialBottom, socialBallInitialBottom + (lastScrollPosition - currentScrollPosition) / 2);
            socialBall.style.bottom = `${newBottom}px`;
        }
        
        lastScrollPosition = currentScrollPosition;
    });
    
    // Project data
    const projects = [
        {
            title: "Classicnews",
            description: "Your trusted source for breaking news, in-depth analysis, and comprehensive coverage of global events.",
            image: "news.jpg",
            link: "https://classicnews.live/"
        },
        {
            title: "AtEnginering",
            description: "A responsive Earth_movers site  template for creative professionals.",
            image: "At.jpg",
            link:"https://atengineering.tech/"
        },
        {
            title: "EduBlog",
            description: "Your Gateway to Educational Excellence",
            image: "edu1.jpg",
            link:"https://mezanhayat.github.io/EduBlog-/"
        },
        {
            title: "EduBlog(Under Construction)",
            description: "Your Gateway to Educational Excellence",
            image: "edu2.jpg",
            link:"https://md-rehanullah.github.io/EduBlog/index.html"
        },
        {
            title: "Namrata's Studio(In Progress)",
            description: "Kolkata's Premier Makeup Destination",
            image: "nam.jpg",
            link:"https://md-rehanullah.github.io/Namrata-studio-/#home"
        }
        
    ];
    
    // Generate project cards
    const projectsGrid = document.querySelector('.projects-grid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <div class="project-image" style="background-image: url('${project.image}')"></div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" class="visit-btn">Visit Project</a>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
    
    // Add click effect to project cards
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'var(--card-shadow)';
        });
    });
});
