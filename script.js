const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
const resetBtn = document.querySelector('#resetBtn');

//Counter
let counter = 0;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' +  (-size * counter ) + 'px';

//Button listeners

nextBtn.addEventListener('click', () => {
    counter++;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";  
    carouselSlide.style.transform = 'translateX(' +  (-size * counter ) + 'px';
});

prevBtn.addEventListener('click', () => {
    counter--;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    carouselSlide.style.transform = 'translateX(' +  (-size * counter ) + 'px';
});

carouselSlide.addEventListener('transitionend', () => {
    if(carouselImages[counter] == null){
        counter = 0;
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px';
    }
});

resetBtn.addEventListener('click', () => {
    counter = 0;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px';
})