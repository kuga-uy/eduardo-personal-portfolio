

/*phone screen on effect*/

const phoneScreen = document.querySelectorAll(".phone_screen");
const projectsBtn = document.querySelector("#projects_btn");
const project1 = document.querySelector("#project1"); 
const projectImg1 = document.querySelector(".project_imgs1"); 
const project2 = document.querySelector("#project2");
const projectImg2 = document.querySelector(".project_imgs2"); 
const project3 = document.querySelector("#project3"); 
const project4 = document.querySelector("#project4"); 
const project5 = document.querySelector("#project5");
const project6 = document.querySelector("#project6");
const form = document.querySelector(".form_section");



projectsBtn.addEventListener("click", function () {
    document.querySelectorAll('.project').forEach(project => project.style.display = 'grid');
    form.style.display = "flex";
});




    
