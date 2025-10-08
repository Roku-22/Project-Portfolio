document.addEventListener('DOMContentLoaded', function () {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    
    // Debug: Log if elements are found
    console.log('Mobile nav toggle:', mobileNavToggle);
    console.log('Sidebar:', sidebar);
    console.log('Main content:', mainContent);

    // Toggle sidebar on button click
    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Hamburger menu clicked!');
            const isOpened = sidebar.classList.toggle('is-open');
            mobileNavToggle.setAttribute('aria-expanded', isOpened);
            // Toggle icon
            const icon = mobileNavToggle.querySelector('i');
            if (icon) {
                if (isOpened) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }

    // Close sidebar when clicking on the main content
    if (mainContent && sidebar && mobileNavToggle) {
        mainContent.addEventListener('click', (e) => {
            // Don't close if clicking on the toggle button itself
            if (!e.target.closest('.mobile-nav-toggle')) {
                if (sidebar.classList.contains('is-open')) {
                    sidebar.classList.remove('is-open');
                    mobileNavToggle.setAttribute('aria-expanded', false);
                    const icon = mobileNavToggle.querySelector('i');
                    if (icon) {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                }
            }
        });
    }

    // Close sidebar when a nav link is clicked (useful for single-page apps)
    const navLinks = document.querySelectorAll('.sidebar-nav a');
    if (navLinks.length > 0 && sidebar && mobileNavToggle) {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (sidebar.classList.contains('is-open')) {
                    sidebar.classList.remove('is-open');
                    mobileNavToggle.setAttribute('aria-expanded', false);
                    const icon = mobileNavToggle.querySelector('i');
                    if (icon) {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                }
            });
        });
    }

    // Set active class based on current page
    const currentPage = window.location.pathname.split("/").pop();
    const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
    if (sidebarLinks.length > 0) {
        if (currentPage) {
            sidebarLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === currentPage) {
                    link.classList.add('active');
                }
            });
        } else {
            // Default to home if no page is specified
            const homeLink = document.querySelector('.sidebar-nav a[href="index.html"]');
            if (homeLink) {
                homeLink.classList.add('active');
            }
        }
    }
});