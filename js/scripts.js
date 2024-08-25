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

    const carouselInner = document.querySelector('.carousel-images');

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
    
    document.addEventListener('click', function (event) {
        if (navbarCollapse.classList.contains('show') && !navbarCollapse.contains(event.target) && !navbarToggler.contains(event.target)) {
            toggleNavbar();
        }
    });

const aboutUsImages = [
    // 'assets/img/about-us.jpg',
    'assets/img/aboutus1.jpg',
    'assets/img/aboutus2.jpg',
    'assets/img/aboutus3.jpg',
]

const aboutUsCarouselInner = document.querySelector('.about-us-carousel-images');

if (aboutUsCarouselInner) {
    aboutUsImages.forEach((imageSrc, index) => {
        const aboutUsCarouselItem = document.createElement('div');
        aboutUsCarouselItem.classList.add('carousel-item');
        if (index === 0) {
            aboutUsCarouselItem.classList.add('active'); // Set the first item as active
        }

        const aboutUsImg = document.createElement('img');
        aboutUsImg.src = imageSrc;
        aboutUsImg.classList.add('d-block', 'w-100');
        aboutUsImg.alt = `About Us Gallery image ${index + 1}`;

        aboutUsCarouselItem.appendChild(aboutUsImg);
        aboutUsCarouselInner.appendChild(aboutUsCarouselItem);
    });
}

document.addEventListener('click', function (event) {
    if (navbarCollapse.classList.contains('show') && !navbarCollapse.contains(event.target) && !navbarToggler.contains(event.target)) {
        toggleNavbar();
    }
});
});
