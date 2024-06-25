document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('img01');
    const closeBtn = document.querySelector('.close');
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        const coverImg = item.querySelector('.cover');
        const mainImg = item.querySelector('.main-img');
        const fileInput = item.querySelector('.file-input');
        const editButton = item.querySelector('.edit-button');

        coverImg.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = mainImg.src;
            setTimeout(() => {
                modal.classList.add('show');
            }, 10);
        });

        closeBtn.addEventListener('click', () => {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 500);
        });

        });
    });