let sections = document.querySelectorAll(".reveal");

window.addEventListener("scroll", function () {

    sections.forEach(function (section) {

        let position = section.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {
            section.classList.add("active");
        }

    });

});



let menuBtn = document.querySelector(".menu-btn");
let navList = document.querySelector("nav ul");

menuBtn.addEventListener("click", function() {
    navList.classList.toggle("show");
});