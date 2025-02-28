let toTop= document.querySelector(".top-scroll-shortcut-icon");

window.addEventListener("scroll",function() {
    if(window.scrollY > 200){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
});

// let animateMenu = document.querySelector("#fixed-header");

// window.addEventListener("scroll", function(){
//     if(window.scrollY > 100){
//         animateMenu.classList.add("active");
//     }
//     else if(window.scrollY <= 100){
//         animateMenu.classList.remove("active");
//     }
// });













// Smooth scrolling only for #scrollTop button
document.getElementById("scrollTop").addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Enables smooth scrolling
    });
});

let animateMenu = document.querySelector("#fixed-header");

window.addEventListener("scroll", function() {
    if (window.scrollY > 200) {
        if (!animateMenu.classList.contains("active")) {
            animateMenu.classList.add("active");
        }
    } else {
        animateMenu.classList.remove("active");
    }
});



// let currentIndex = 0;
// const testimonials = document.querySelectorAll(".testimonial-slide");
// const dots = document.querySelectorAll(".dot");

// function showTestimonial(index) {
//     testimonials.forEach((testimonial, i) => {
//         testimonial.classList.toggle("active", i === index);
//         dots[i].classList.toggle("active", i === index);
//     });
// }

// document.querySelector(".next-btn").addEventListener("click", function () {
//     currentIndex = (currentIndex + 1) % testimonials.length;
//     showTestimonial(currentIndex);
// });

// document.querySelector(".prev-btn").addEventListener("click", function () {
//     currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
//     showTestimonial(currentIndex);
// });

// function goToTestimonial(index) {
//     currentIndex = index;
//     showTestimonial(currentIndex);
// }
