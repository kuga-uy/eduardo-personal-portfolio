

/*phone screen on effect*/

const phoneScreen = document.querySelectorAll(".phone_screen");
const projectsBtn = document.querySelector(".projects_link");


projectsBtn.addEventListener("click", phoneScreen.forEach(screen => screen.style.animation = 'screenOn 10s forwards'));
