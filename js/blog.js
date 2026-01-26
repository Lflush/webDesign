document.addEventListener('DOMContentLoaded', function () {
    // Modal functionality
    const modal = document.getElementById('blogModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalDescription = document.getElementById('modalDescription');
    const closeBtn = document.querySelector('.modal .close');

    // Add click event to all blog boxes
    document.querySelectorAll('.blog-box').forEach(box => {
        box.addEventListener('click', function () {
            const titleText = this.querySelector('.blog-title p')?.innerText || '';
            const imageSrc = this.querySelector('.blog-cover img')?.src || '';
            const imageAlt = this.querySelector('.blog-cover img')?.alt || '';
            const descriptionText = this.querySelector('.blog-description p')?.innerText || '';

            modalTitle.textContent = titleText;
            modalImage.src = imageSrc;
            modalImage.alt = imageAlt;
            modalImage.title = titleText;
            modalDescription.textContent = descriptionText;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    // Close modal when clicking close button
    closeBtn.addEventListener('click', closeModal);

    // Close modal when clicking outside
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Close modal on escape key
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Scroll animation for blog boxes
    const blogBoxes = document.querySelectorAll('.blog-box');
    let ticking = false;

    const isVisible = (elem) => {
        const rect = elem.getBoundingClientRect();
        const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        const elemTop = rect.top;
        const elemBottom = rect.bottom;
        
        return elemTop < viewHeight - 100 && elemBottom > 0;
    };

    const scrollHandler = () => {
        blogBoxes.forEach(box => {
            if (isVisible(box)) {
                box.classList.add('visible');
            }
        });
        ticking = false;
    };

    window.addEventListener('scroll', function () {
        if (!ticking) {
            window.requestAnimationFrame(scrollHandler);
            ticking = true;
        }
    });

    // Initial check for visible elements
    setTimeout(scrollHandler, 100);
});
