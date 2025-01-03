//Click events for button
const project = document.getElementById("project");
const projectBtn = document.getElementById("project-btn")

const skills = document.getElementById("skills");
const skillsBtn = document.getElementById("skills-btn")

projectBtn.addEventListener("click", (event) => {
    skills.style.display = "none";
    project.style.display = "flex";
    skillsBtn.classList.remove("active-btn");
    projectBtn.classList.add("active-btn");
});

skillsBtn.addEventListener("click", (event) => {
    project.style.display = "none";
    skills.style.display = "flex";
    projectBtn.classList.remove("active-btn");
    skillsBtn.classList.add("active-btn");
});

//Light and Dark Mode
document.addEventListener("DOMContentLoaded", () => {
    const themeBtn = document.getElementById("toggleTheme");
    const themeIcon = document.querySelector('img[alt = "theme icon"]');
    const githubLogo = document.querySelector('img[alt = "github logo"]');
    const LinkedinLogo = document.querySelector('img[alt = "linkedin logo"]');
    const emailLogo = document.querySelector('img[alt = "mail logo"]');

    const lightlogos = {
        github : "images/Github_logo_light.jpeg",
        linkedin : "images/linkedin_light.png",
        email : "images/mail_icon_light.png",
        theme : "images/theme_light_mode.png",
    };

    const darklogos = {
        github : "images/Github_logo_dark.jpeg",
        linkedin : "images/linkedin_dark.png",
        email : "images/mail_icon_dark.png",
        theme : "images/theme_dark_mode.png",
    };

    function setTheme(isDark){
        githubLogo.src = isDark ? darklogos.github : lightlogos.github;
        LinkedinLogo.src = isDark ? darklogos.linkedin : lightlogos.linkedin;
        emailLogo.src = isDark ? darklogos.email : lightlogos.email;
        themeIcon.src = isDark ? darklogos.theme : lightlogos.theme; // Fix: Use themeIcon instead of themeLogo
    }
    

    themeBtn.addEventListener("click", () => {
        const isDark = document.body.classList.toggle("dark-theme");
        localStorage.setItem("isDark", isDark);

        setTheme(isDark);
    })

    
    const loadTheme = () => {
        const isDark = localStorage.getItem("isDark") == "true";
        document.body.classList.toggle("dark-theme", isDark);
        setTheme(isDark);
    };
    loadTheme();
});
