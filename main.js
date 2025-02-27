let toTop= document.querySelector(".top-scroll-shortcut-icon");

window.addEventListener("scroll",function() {
    if(window.scrollY > 200){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
});

let animateMenu = document.querySelector("#fixed-header");

window.addEventListener("scroll", function(){
    if(window.scrollY > 100){
        animateMenu.classList.add("active");
    }
    else if(window.scrollY <= 100){
        animateMenu.classList.remove("active");
    }
});

// let animateMenu = document.querySelector("#fixed-header");

// window.addEventListener("scroll", function(){
//     requestAnimationFrame(() => { // Ensures immediate execution
//         if (window.scrollY > 100) {
//             if (!animateMenu.classList.contains("active")) { 
//                 animateMenu.classList.add("active");
//             }
//         } else {
//             animateMenu.classList.remove("active");
//         }
//     });
// });
