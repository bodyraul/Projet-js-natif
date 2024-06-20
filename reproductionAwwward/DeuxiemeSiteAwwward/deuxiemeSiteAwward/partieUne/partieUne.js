const imgNav =document.querySelectorAll('.img-nav');

imgNav.forEach(img => {
    
    img.addEventListener('mouseenter',()=>{
        img.src=img.dataset.in;
    })
    img.addEventListener('mouseleave',()=>{
        img.src=img.dataset.out;
    })
});

let spanDeg= -74;
const spanCercleInvisible = document.querySelectorAll('.cercle-invisible-span');

spanCercleInvisible.forEach(span => {
    span.style.transform = `rotate(${spanDeg}deg)`;
    spanDeg+=8;
});


const navp2 =document.querySelector('.nav-deuxieme-partie');
const enfantNavp2 =document.querySelector('.nav-deuxieme-partie').children;
const bouge =document.querySelector('.bouge-nav-p2');

for (let k = 0; k < enfantNavp2.length-1; k++) {
    enfantNavp2[k].addEventListener('click',()=>{
        let widthEnfant = enfantNavp2[k].clientWidth;
        let positionDiv =navp2.getBoundingClientRect().left;
        let positionEnfant = enfantNavp2[k].getBoundingClientRect().left;
        let positionBouge = (positionEnfant-positionDiv)-(widthEnfant*0.5/100);
        bouge.style.left=`${positionBouge}px`
        bouge.style.width =`${widthEnfant}px`;
    })
}


const btnOeil = document.querySelectorAll('.btn-oeil-p3');

btnOeil.forEach(e => {
    e.addEventListener('click',()=>{
        
    })
});





