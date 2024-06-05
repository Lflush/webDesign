document.addEventListener('DOMContentLoaded', function () {
    // JavaScript代码实现模态框点击效果
    document.querySelectorAll('.blog-box').forEach(box => {
        box.addEventListener('click', function () {
            document.getElementById('modalTitle').innerText = this.querySelector('.blog-title p').innerText;
            document.getElementById('modalImage').src = this.querySelector('.blog-cover img').src;
            document.getElementById('modalImage').alt = this.querySelector('.blog-cover img').alt;
            document.getElementById('modalImage').title = this.querySelector('.blog-title p').innerText;
            document.getElementById('modalDescription').innerText = this.querySelector('.blog-description p').innerText;
            document.getElementById('blogModal').style.display = 'block';
        });
    });

    document.querySelector('.modal .close').addEventListener('click', function () {
        document.getElementById('blogModal').style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == document.getElementById('blogModal')) {
            document.getElementById('blogModal').style.display = 'none';
        }
    });

    // JavaScript代码实现滚动淡入效果
    const blogBoxes = document.querySelectorAll('.blog-box');

    const isVisible = (elem) => {
        const rect = elem.getBoundingClientRect();
        const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
    };

    const scrollHandler = () => {
        blogBoxes.forEach(box => {
            if (isVisible(box)) {
                box.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', scrollHandler);
    scrollHandler(); // 初始化页面时也运行一次
});
