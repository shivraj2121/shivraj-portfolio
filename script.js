const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");
const links = document.querySelectorAll("#sideMenu a");

// OPEN/CLOSE MENU FUNCTION
function toggleMenu() {
    sideMenu.classList.toggle("showMenu");
    overlay.classList.toggle("show");
}

// OPEN/CLOSE BUTTON
menuBtn.addEventListener("click", toggleMenu);

// CLICK OUTSIDE CLOSE
overlay.addEventListener("click", toggleMenu);

// CLICK MENU LINK CLOSE MENU
links.forEach(link => {
    link.addEventListener("click", () => {
        sideMenu.classList.remove("showMenu");
        overlay.classList.remove("show");
    });
});

const btn = document.getElementById("themeBtn");

btn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        btn.textContent = "☀️";
    }else{
        btn.textContent = "🌙";
    }

});


const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

sections.forEach(section => {
    observer.observe(section);
});