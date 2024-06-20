const img=document.querySelector('.clique-img');
const containerImg = document.querySelector('.container-img');
const nombre =document.querySelector('.number');
let nbClique =0;

// <img class="like animation" src="./coeur.png" alt=""></img>

img.addEventListener('dblclick',(e)=>{
    let cliqueX = e.clientX;
    let cliqueY = e.clientY;
    let hautDiv = containerImg.offsetTop;
    let gaucheDiv =containerImg.offsetLeft;
    let emplacementImgX = +cliqueX-gaucheDiv;
    let emplacementImgY = +cliqueY-hautDiv;
    nbClique++;
    nombre.innerText = nbClique;
    const newImg = document.createElement('img');
    newImg.classList.add('like');
    newImg.src = "./coeur.png";
    newImg.style.top = `${emplacementImgY}px`;
    newImg.style.left = `${emplacementImgX}px`;
    containerImg.appendChild(newImg);
    newImg.classList.add('animation'); 
    setTimeout(() => {
        newImg.style.display = "none";
    }, 1000);
})