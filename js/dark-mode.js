// Dark Mode Toggle Functionality
(function() {
    // Check for saved theme preference or default to light mode
    const getTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme;
        }
        // Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    };

    // Apply theme
    const applyTheme = (theme) => {
        const html = document.documentElement;
        if (theme === 'dark') {
            html.classList.add('dark');
            html.classList.remove('light');
        } else {
            html.classList.add('light');
            html.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    };

    // Initialize theme on page load
    const initTheme = () => {
        const theme = getTheme();
        applyTheme(theme);
    };

    // Toggle theme
    const toggleTheme = () => {
        const html = document.documentElement;
        const currentTheme = html.classList.contains('dark') ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
    };

    // Initialize on DOM load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTheme);
    } else {
        initTheme();
    }

    // Add event listeners to all dark mode toggle buttons
    document.addEventListener('DOMContentLoaded', () => {
        const toggleButtons = document.querySelectorAll('#darkModeToggle, #darkModeToggleMobile');
        toggleButtons.forEach(button => {
            if (button) {
                button.addEventListener('click', toggleTheme);
            }
        });
    });

    // Make toggleTheme available globally for inline onclick handlers if needed
    window.toggleTheme = toggleTheme;
})();

