/* =======================================
    * TAB SIDEBAR AND ROOMS
=========================================*/
const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");
const logo = document.getElementById("logo-sidebar");
const rooms = document.querySelectorAll("[data-room]");
const salas = document.querySelectorAll("[data-salas]");


tabs.forEach(tab => {
    tab.addEventListener("click",  ()=>{
        const target = document.querySelector(tab.dataset.tabTarget);

        if(target.id === "home"){
            document.body.classList.add("wrapper__switch");
            document.getElementById('home-posts').classList.add("nav__remove");
            
            salas.forEach(sala =>{
                sala.classList.remove("sala__active");
            });
            
        }else{
            document.body.classList.remove("wrapper__switch");
            document.getElementById('home-posts').classList.remove("nav__remove")
        }

        tabContents.forEach(tabContent => {
            tabContent.classList.remove("nav__active-list");
        });
        logo.classList.add("nav__logo-remove");
        target.classList.add("nav__active-list");

    });
});

rooms.forEach(room =>{
    room.addEventListener('click', ()=>{
        const target = document.querySelector(room.dataset.room);
        salas.forEach(sala => {
            sala.classList.remove("sala__active");
        });
        target.classList.add("sala__active");
    });
    
});

/* =======================================
    * DARK MODE
=========================================*/

const darkNigt = document.getElementById("switch");

darkNigt.addEventListener('click', ()=>{
    document.getElementById("dark-them-night").classList.toggle("dark-mode");
});