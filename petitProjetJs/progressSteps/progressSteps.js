const btnPrev =document.getElementById("btnPrev");
const btnNext =document.getElementById("btnNext");
const allCercle =document.querySelectorAll(".cercle");
const barreBleu = document.querySelector(".barreBleu");
let compteurCercle = 0;
const taille=200;
let newTaille =0

btnNext.addEventListener("click",()=>{
    if(compteurCercle===3){
        compteurCercle=3;
        return;
    }
    compteurCercle+=1;
    allCercle[compteurCercle].classList.add("actif");
    newTaille=taille*compteurCercle;
    barreBleu.style.width = `${newTaille}px`
})

btnPrev.addEventListener("click",()=>{
    if(compteurCercle===0){
        compteurCercle=0;
        return;
    }
    allCercle[compteurCercle].classList.remove("actif");
    compteurCercle-=1;
    newTaille=taille*compteurCercle;
    barreBleu.style.width = `${newTaille}px`
})