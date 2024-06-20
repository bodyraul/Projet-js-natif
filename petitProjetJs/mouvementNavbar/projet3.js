const btnActive = document.getElementById("photoMenu");
const btnClose = document.getElementById("photoCroix");
const bulleMenu = document.getElementsByClassName("bulleMenu");
const page = document.getElementsByClassName("containerGlobal");
const nav = document.querySelector(".nav");
console.log(bulleMenu[0]);

btnActive.addEventListener("click",()=>{
    bulleMenu[0].classList.add("activeMenu");
    page[0].classList.add("rotateContainer");
    setTimeout(() => {
        nav.classList.add("animNav");
    }, 300);
})

btnClose.addEventListener("click",()=>{
    bulleMenu[0].classList.remove("activeMenu");
    page[0].classList.remove("rotateContainer");
    nav.classList.remove("animNav");
})
