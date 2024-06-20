const allDiv=document.querySelectorAll('.container-dessus p');
const allCouleur = ["#e74c3c","#8e44ad","#3498db","#e67e22","#2ecc71"];
let nbAleatoire = 0;
for (let k = 0; k < allDiv.length-1; k++) {
    allDiv[k].addEventListener('mouseover',()=>{
        allDiv[k].classList.remove('animation');
        nbAleatoire= Math.floor(Math.random()*allCouleur.length);
        allDiv[k].style.backgroundColor = allCouleur[nbAleatoire];
        allDiv[k].style.boxShadow = `0 0 2px ${allCouleur[nbAleatoire]},0 0 10px ${allCouleur[nbAleatoire]}`
    })

    allDiv[k].addEventListener('mouseout',()=>{
       allDiv[k].classList.add('animation');
    })
}