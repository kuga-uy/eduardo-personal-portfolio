

/*phone screen on effect*/

const phoneScreen = document.querySelectorAll(".phone_screen");
const projectsBtn = document.querySelector("#projects_btn");
const scrollY = window.pageYOffset;


projectsBtn.addEventListener("click", phoneScreen.forEach(
    screen => screen.classList.toggle('screenOn'))) ;


    
