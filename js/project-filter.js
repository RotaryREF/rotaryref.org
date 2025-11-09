// Project Filter and Search Functionality
(function() {
    document.addEventListener('DOMContentLoaded', () => {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');
        const searchInput = document.getElementById('searchInput');
        let currentFilter = 'all';

        // Filter function
        const filterProjects = (category, searchTerm = '') => {
            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                const cardName = card.getAttribute('data-name').toLowerCase();
                const searchLower = searchTerm.toLowerCase();

                const matchesCategory = category === 'all' || cardCategory === category;
                const matchesSearch = searchTerm === '' || cardName.includes(searchLower);

                if (matchesCategory && matchesSearch) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        };

        // Filter button click handlers
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Update active button styling
                filterButtons.forEach(btn => {
                    btn.classList.remove('bg-primary', 'text-white');
                    btn.classList.add('hover:bg-background-light');
                    const p = btn.querySelector('p');
                    if (p) {
                        p.classList.remove('text-white');
                        p.classList.add('text-text-light-primary');
                    }
                });

                // Set active button
                button.classList.add('bg-primary', 'text-white');
                button.classList.remove('hover:bg-background-light');
                const p = button.querySelector('p');
                if (p) {
                    p.classList.add('text-white');
                    p.classList.remove('text-text-light-primary');
                }

                // Get filter category
                currentFilter = button.getAttribute('data-filter') || 'all';
                const searchTerm = searchInput ? searchInput.value : '';
                filterProjects(currentFilter, searchTerm);
            });
        });

        // Search input handler
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const searchTerm = e.target.value;
                filterProjects(currentFilter, searchTerm);
            });
        }
    });
})();

