// Navbar animation
var prevScrollPos = window.pageYOffset;
window.onscroll = function () {
    var curScrollPos = window.pageYOffset;
    if (prevScrollPos > curScrollPos) {
        document.getElementById('navbar').style.top = '0';
    }
    else {
        document.getElementById('navbar').style.top = '-52px';
    }

    prevScrollPos = curScrollPos
    
    if (menu_box.classList.contains("menu-hidden")){
        return
    }
    else{
        menu_box.classList.toggle("menu-hidden")
    }
}

//Menu Option button
let menu_toggle = document.querySelector(".menu-toggle");
let menu_box = document.querySelector(".menu-box")
menu_toggle.addEventListener("click", function menuToggle() {
    if (menu_box.classList.contains("menu-hidden")){
        menu_box.style.top = '180px';
        menu_toggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }  
    else{
        menu_box.style.top = '-150px';
        menu_toggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
    menu_box.classList.toggle("menu-hidden")
});

// TODO: Hide menubar automatically on scroll

// Experience bar animation
// Getting all the bars
const bars = document.querySelectorAll('.experience-bar');

// Create the observer
// Defining widths for experience bar
experienceBarWidth = {"experience-bar-1": 60,
                      "experience-bar-2": 80,
                      "experience-bar-3": 70,
                      "experience-bar-4": 10}

const barObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting){    
            entry.target.style.width = experienceBarWidth[entry.target.id] + '%';
            
            //entry.isIntersecting tells is the element is visible on screen or not
            //if it is true, this will add fill-bar class and if it is false, then removes the class
            entry.target.classList.add('fill-bar')
        }
    });
}, {
    threshold: 1
})

bars.forEach(bar => {
    barObserver.observe(bar)
})

// Toggling the go up button
const exploreSectionObserver = new IntersectionObserver(entry => {
    if (entry.isIntersecting){
        document.querySelector(".go-up").classList.toggle("display");
        console.log("Hit explore")
    }
})

exploreSectionObserver.observe(document.getElementById("explore"));