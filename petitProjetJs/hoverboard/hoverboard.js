const couleur=["#e74c3c","#8e44ad","#3498db","#e67e22","#2ecc71"];
const parent = document.querySelectorAll(".container");
let nombre = 0; 



for (let index = 0; index < 496; index++) {
    const para = document.createElement('p');
    para.classList.add('carre');
    parent[0].appendChild(para);
}

const allCarre = document.querySelectorAll(".carre");

allCarre.forEach(element => {
    element.addEventListener("mouseover",()=>{
        nombre = (Math.floor(Math.random() * (5 - 1 + 1) + 1))-1;
        element.style.backgroundColor = `${couleur[nombre]}`;
        element.style.transition = `all 0s`;
    })
    element.addEventListener("mouseout",()=>{
        element.style.backgroundColor = `#1B1B1B`;
        element.style.transition = `all 2s ease`;
    })
});