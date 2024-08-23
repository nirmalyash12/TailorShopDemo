/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const navbarCollapse = document.body.querySelector('#navbarResponsive');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );

    function toggleNavbar() {
        const isExpanded = navbarToggler.getAttribute('aria-expanded') === 'true';
        navbarToggler.setAttribute('aria-expanded', !isExpanded);
        navbarCollapse.classList.toggle('show');
    }

    // Set up event listener for the toggler
    if (navbarToggler) {
        navbarToggler.addEventListener('click', toggleNavbar);
    }

    // Set up event listener for responsive nav items
    responsiveNavItems.forEach(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                toggleNavbar();
            }
        });
    });

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


    document.addEventListener('click', function (event) {
        if (navbarCollapse.classList.contains('show') && !navbarCollapse.contains(event.target) && !navbarToggler.contains(event.target)) {
            toggleNavbar();
        }
    });

    const menuButton = document.getElementById('#menu-button')
    
    menuButton.addEventListener('click', function (event) {
        if (navbarCollapse.classList.contains('show') && !navbarCollapse.contains(event.target) && !navbarToggler.contains(event.target)) {
            toggleNavbar();
        }
    });

});
