document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const openBtn = document.getElementById('openBtn');
    const closeBtn = document.getElementById('closeBtn');
    const searchBtn = document.getElementById('searchBtn');
    const searchBox = document.getElementById('searchBox');


    openBtn.addEventListener('click', function () {
        sidebar.style.width = '250px';
    });

    closeBtn.addEventListener('click', function () {
        sidebar.style.width = '0';
    });

    searchBtn.addEventListener('click', function () {
        searchBox.style.display = (searchBox.style.display === 'block' ? 'none' : 'block');
    });

});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', function () {
    
    if (window.scrollY > 200) {
        document.getElementById('topBtn').style.display = 'block';
    } else {
        document.getElementById('topBtn').style.display = 'none';
    }
});


