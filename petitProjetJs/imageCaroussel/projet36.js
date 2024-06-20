const btnPre = document.querySelector('#pre');
const btnSuiv = document.querySelector('#suiv');
const containerImg = document.querySelector('.img')
let indice =0;
let transitionX=0;
let interval = "";

function avancer(){
    indice++;
    transitionX-=25;
    console.log(transitionX);
    if(indice===4){
        indice=0;
        transitionX=0;
        containerImg.style.transform = `translateX(${transitionX}%)`;
        return;
    }
    containerImg.style.transform = `translateX(${transitionX}%)`;
}

function reculer(){
    indice--;
    transitionX+=25;
    if(indice===-1){
        indice=3;
        transitionX=-75;
        containerImg.style.transform = `translateX(${transitionX}%)`;
        return;
    }
    containerImg.style.transform = `translateX(${transitionX}%)`;
}

btnSuiv.addEventListener('click',()=>{
    clearInterval(interval);
    avancer();
    automatiqueSuivant();
})

btnPre.addEventListener('click',()=>{
    clearInterval(interval);
   reculer();
   automatiquePrecedent();
})

function automatiqueSuivant(){
    interval= setInterval(() => {
        avancer();
    }, 2000);
}


function automatiquePrecedent(){
    interval= setInterval(() => {
        reculer();
    }, 2000);
}

automatiqueSuivant();