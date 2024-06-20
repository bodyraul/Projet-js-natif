const btnImg = document.querySelectorAll('.btn-img');
const affichageImg =document.querySelectorAll('.affiche-img');
const allImg = [];

window.onload = ()=>{
    btnImg.forEach(element => {
        let img = {
            couleurGrise : element.src,
            couleurViolette : element.dataset.source,
            active :false
        }
        allImg.push(img);
    });
    btnImg[0].src = allImg[0].couleurViolette;
    allImg[0].active=true;
}


btnImg.forEach((element,index) => {
    element.addEventListener('click', ()=>{
        for (let k = 0; k < btnImg.length; k++) {
            if(k===index){
                btnImg[k].src = allImg[k].couleurViolette;
                allImg[k].active=true;
            }
            else{
                btnImg[k].src = allImg[k].couleurGrise;
                allImg[k].active=false;
            }
        }
      
        for (let k = 0; k < affichageImg.length; k++) {
            if(k===index){
                affichageImg[k].style.zIndex=10;
            }
            else{
                affichageImg[k].style.zIndex=2;
            }
        }
        console.log(allImg);
    })

    element.addEventListener('mouseenter',()=>{
        element.src = allImg[index].couleurViolette;
    })

    element.addEventListener('mouseleave',()=>{
        if(allImg[index].active === false){
            element.src = allImg[index].couleurGrise;
        }
        else if(allImg[index].active === true){
            element.src = allImg[index].couleurViolette;
        }
    })
});