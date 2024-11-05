var slideIndex = 1;

function currentSlide(n) {

}

function nextSlide(n) {

}

function showSlide(n) {
    const dots = document.querySelector('.dot');
    const slides = document.querySelectorAll('.mySlide');
    if(n < 1){
        slideIndex = slides.sldie.length - 1;
    }
    if (n > slides.length){
        slideIndex = 1;
    }
    for (let i = 0; i < slides.length; i++){
        slides[i].classList.add('.fade');
        document.getElementByClassName('fade').style.display = 'block';
    }
}