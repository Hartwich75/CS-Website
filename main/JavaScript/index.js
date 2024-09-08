document.addEventListener("DOMContentLoaded", function() {
    fetch('/main/HTML/pageHeader.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('pageHeader').innerHTML = data;
        });
});


function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
}

function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
}

function showSidebar1() {
    const sidebar1 = document.querySelector(".sidebar1");
    sidebar1.style.display = "flex";
}

function hideSidebar1() {
    const sidebar1 = document.querySelector(".sidebar1");
    sidebar1.style.display = "none";
}

function hideDefaultWeaponImages() {
    const weaponContainer = document.querySelector(".defaultWeaponImages");
    weaponContainer.style.display = 'none';
}

const slides = document.querySelectorAll('.slides img');
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider());

function initializeSlider() {

    if(slides.length > 0) {
        slides[slideIndex].classList.add('displaySlide');
        intervalId = setInterval(nextSlide, 5000);
    }

}

function showSlide(index){

    if(index >= slides.length - 1) {

        slideIndex = 0;

    }
    else if(index < 0) {

        slideIndex = slides.length - 1;

    }

    slides.forEach(slide => {
        slide.classList.remove('displaySlide');
    });

    slides[index].classList.add('displaySlide');

}

function prevSlide() {
    
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);

}

function nextSlide() {

    slideIndex++;
    showSlide(slideIndex);

}