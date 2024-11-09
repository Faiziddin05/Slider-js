let slideIndex = 1;
function currentSlide(n){

}
function nextSlide (n) {

}

function showSlide(n){
    const dots = document.querySelectorAll('.dot');
    const slides = document.querySelectorAll('.mySlide');
    if (n < 1) {
        slideIndex = slides.slide.length - 1;
    }
    if (n > slides.length){
        slideIndex = 1;
    }
    for (let i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    for (let i = 0; i < slides.length; i++) {
        dots[i].classList.add('active');
    }
    slides[slideIndex - 1].style.display = 'block';
    slides[slideIndex - 1].classList.add('fade');
    dots[slideIndex - 1].classList.add('active');
};

document.querySelector('.prev').addEventListener('click', function(){
    nextSlide(-1);
});
document.querySelectorAll('.next').addEventListener('click', function(){
    nextSlide(1);
});