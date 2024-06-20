const tabCouleur = ["#5E378F","#0080ff","#00FF00","#FF0000"];
const tabNombre = ["Four","Three","Two","One"];
const listPara =[];
const container = document.querySelector('.container')
const btn = document.querySelector('.btn');
let nombre1=0;
let nombre2=0;

btn.addEventListener('click',apparition);

function apparition(){
    nombre1 = (Math.floor(Math.random() * 4) + 1)-1;
    nombre2 = (Math.floor(Math.random() * 4) + 1)-1;
    const paragraphe = document.createElement('p');
    listPara.push(paragraphe);
    paragraphe.classList.add('para');
    paragraphe.style.color =`${tabCouleur[nombre1]}`;
    paragraphe.style.bottom =`${(listPara.length-1)*70}px`;
    console.log((listPara.length-1)*70)
    paragraphe.innerText=`Message` + ` `+ `${tabNombre[nombre2]}`;
    container.appendChild(paragraphe);
    setTimeout(() => {
        container.removeChild(paragraphe);
    }, 3000);
}
