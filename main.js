/*const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click",() =>{
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".img-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function(manual){
    btns.forEach((btn) =>{
        btn.classList.remove("active");
    });

    slides.forEach((slide) =>{
        slide.classList.remove("active");
    });

    contents.forEach((content) =>{
        content.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
}

    btns.forEach((btn, i) => {
        btn.addEventListener("click",() =>{
            sliderNav(i)
        });
    });*/

    const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".img-slide");
const contents = document.querySelectorAll(".content");

let currentSlide = 0; // Track the index of the current slide

// Function to switch to the next slide
const nextSlide = () => {
    // Remove active classes from all buttons, slides, and contents
    btns.forEach(btn => btn.classList.remove("active"));
    slides.forEach(slide => slide.classList.remove("active"));
    contents.forEach(content => content.classList.remove("active"));

    // Increment currentSlide and loop back to 0 if it exceeds the number of slides
    currentSlide = (currentSlide + 1) % slides.length;

    // Add active classes to the corresponding button, slide, and content
    btns[currentSlide].classList.add("active");
    slides[currentSlide].classList.add("active");
    contents[currentSlide].classList.add("active");
};

// Call nextSlide function every 5 seconds (adjust interval as needed)
const slideInterval = setInterval(nextSlide, 10000);

// Stop the automatic slideshow when a button is clicked
btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        clearInterval(slideInterval); // Stop the interval
        sliderNav(i);
    });
});







const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));









