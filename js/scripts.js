window.addEventListener('DOMContentLoaded', event => {

    // Function to toggle the description for services
    const serviceItems = document.querySelectorAll('.list-group-item');
    serviceItems.forEach(item => {
        item.addEventListener('click', function() {
            const description = this.querySelector('.description');
            if (description) {
                if (description.style.display === 'none' || description.style.display === '') {
                    description.style.display = 'block';
                } else {
                    description.style.display = 'none';
                }
            }
        });
    });

    // Handle review text expansion
    document.querySelectorAll('.review-text').forEach(function(review) {
        review.addEventListener('click', function() {
            this.classList.toggle('expanded');
        });
    });

    // Dynamically add images to the carousel
    const images = [
        'assets/img/1.jpg',
        'assets/img/2.jpg',
        'assets/img/3.jpg',
        'assets/img/4.jpg',
        'assets/img/5.jpg',
        'assets/img/6.jpg',
        'assets/img/7.jpg',
        'assets/img/8.jpg',
        'assets/img/9.jpg',
        'assets/img/10.jpg',
        'assets/img/11.jpg',
        'assets/img/12.jpg',
    ];

    const carouselInner = document.querySelector('.carousel-inner');

    if (carouselInner) {
        images.forEach((imageSrc, index) => {
            const carouselItem = document.createElement('div');
            carouselItem.classList.add('carousel-item');
            if (index === 0) {
                carouselItem.classList.add('active');
            }

            const img = document.createElement('img');
            img.src = imageSrc;
            img.classList.add('d-block', 'w-100');
            img.alt = `Gallery image ${index + 1}`;

            carouselItem.appendChild(img);
            carouselInner.appendChild(carouselItem);
        });
    }
});
