let btnactif =0;
const btnNavP2 =document.querySelectorAll('.btn-nav-deuxieme-partie');
const elementsP2 =document.querySelectorAll('.all-p-p2');

for (let k = 0; k < btnNavP2.length; k++) {
    btnNavP2[k].addEventListener('click',()=>{
        if(btnactif===k){
            return;
        }
        if(btnactif!==k){
            console.log(btnactif);
            elementsP2[btnactif].classList.remove("fadeInP2");
            elementsP2[btnactif].classList.add("fadeOutP2");
            setTimeout(() => {
                elementsP2[k].classList.add("fadeInP2");
            }, 300);
            btnactif=k;
        }
    })
    
}