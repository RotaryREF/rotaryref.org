// Sticky Header with Scroll Effect
(function() {
    document.addEventListener('DOMContentLoaded', () => {
        const header = document.querySelector('header');
        
        if (header) {
            let lastScrollTop = 0;
            
            const handleScroll = () => {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                
                // Add shadow when scrolled down
                if (scrollTop > 10) {
                    header.classList.add('shadow-md');
                    header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                } else {
                    header.classList.remove('shadow-md');
                    header.style.backgroundColor = '';
                }
                
                lastScrollTop = scrollTop;
            };
            
            // Throttle scroll events for better performance
            let ticking = false;
            window.addEventListener('scroll', () => {
                if (!ticking) {
                    window.requestAnimationFrame(() => {
                        handleScroll();
                        ticking = false;
                    });
                    ticking = true;
                }
            });
            
            // Initial check
            handleScroll();
        }
    });
})();

