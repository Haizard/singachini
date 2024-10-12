document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('nav ul');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const navItems = document.querySelectorAll('nav ul li a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // ----------------------------
    // Filtering and Searching Functionality
    // ----------------------------

    const searchInput = document.getElementById('search-input');
    const durationFilter = document.getElementById('duration-filter');
    const filterButton = document.getElementById('filter-button');
    const resetButton = document.getElementById('reset-button');
    const coursesTable = document.querySelector('.courses-table tbody');
    const tableRows = coursesTable.getElementsByTagName('tr');

    // Function to filter courses
    function filterCourses() {
        const searchValue = searchInput.value.toLowerCase().trim();
        const durationValue = durationFilter.value.toLowerCase();

        for (let i = 0; i < tableRows.length; i++) {
            const courseName = tableRows[i].getElementsByTagName('td')[0].innerText.toLowerCase();
            const duration = tableRows[i].getElementsByTagName('td')[1].innerText.toLowerCase();

            // Check if course name matches search and duration matches filter
            const matchesSearch = courseName.includes(searchValue);
            const matchesDuration = (durationValue === 'all') || (duration === durationValue);

            if (matchesSearch && matchesDuration) {
                tableRows[i].style.display = '';
            } else {
                tableRows[i].style.display = 'none';
            }
        }
    }

    // Event listener for Search button
    filterButton.addEventListener('click', () => {
        filterCourses();
    });

    // Event listener for Reset button
    resetButton.addEventListener('click', () => {
        searchInput.value = '';
        durationFilter.value = 'all';
        // Show all rows
        for (let i = 0; i < tableRows.length; i++) {
            tableRows[i].style.display = '';
        }
    });

    // Optional: Enable Enter key to trigger search
    searchInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            filterCourses();
        }
    });

    // ----------------------------
    // Modal Functionality (Optional)
    // ----------------------------

    const modal = document.getElementById('course-modal');
    const modalTitle = document.getElementById('modal-course-title');
    const modalDetails = document.getElementById('modal-course-details');
    const closeButton = document.querySelector('.close-button');

    // If you add "View Details" buttons in the future, you can implement modal functionality here.
    // Currently, since there are no buttons, this section remains inactive.

    // Close modal when 'x' is clicked
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside the modal content
    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    });
});
