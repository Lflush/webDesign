document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const openBtn = document.getElementById('openBtn');
    const closeBtn = document.getElementById('closeBtn');
    const searchBtn = document.getElementById('searchBtn');
    const searchBox = document.getElementById('searchBox');
    const searchInput = searchBox?.querySelector('input');

    // Sidebar toggle
    openBtn.addEventListener('click', function () {
        sidebar.style.width = '250px';
        openBtn.style.opacity = '0';
    });

    closeBtn.addEventListener('click', function () {
        sidebar.style.width = '0';
        openBtn.style.opacity = '0.2';
    });

    // Search box toggle
    searchBtn.addEventListener('click', function (event) {
        event.stopPropagation();
        toggleSearchBox();
    });

    function toggleSearchBox() {
        const isHidden = searchBox.style.display === 'none' || searchBox.style.display === '';
        searchBox.style.display = isHidden ? 'block' : 'none';
        if (isHidden && searchInput) {
            searchInput.focus();
        }
    }

    // Close search box when clicking outside
    document.addEventListener('click', function (event) {
        if (!searchBox.contains(event.target) && !searchBtn.contains(event.target)) {
            searchBox.style.display = 'none';
        }
    });

    // Close sidebar when clicking outside
    document.addEventListener('click', function (event) {
        if (sidebar.style.width === '250px' && 
            !sidebar.contains(event.target) && 
            !openBtn.contains(event.target)) {
            sidebar.style.width = '0';
            openBtn.style.opacity = '0.2';
        }
    });

    // Handle escape key
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            sidebar.style.width = '0';
            searchBox.style.display = 'none';
            openBtn.style.opacity = '0.2';
        }
    });
});

// Scroll to top function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show/hide top button on scroll
let ticking = false;
window.addEventListener('scroll', function () {
    if (!ticking) {
        window.requestAnimationFrame(function () {
            const topBtn = document.getElementById('topBtn');
            if (window.scrollY > 200) {
                topBtn.style.display = 'block';
                topBtn.style.opacity = '0.6';
            } else {
                topBtn.style.display = 'none';
            }
            ticking = false;
        });
        ticking = true;
    }
});


