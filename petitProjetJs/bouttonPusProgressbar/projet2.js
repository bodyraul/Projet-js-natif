const bouttonDroite=document.getElementById("buttonNext");
const bouttonGauche=document.getElementById("buttonPrev");
const bulles = document.querySelectorAll('.bulle');
const ligne = document.getElementById('ligneInvisible');

let compteur =1;
console.log(ligne)
bouttonDroite.addEventListener('click',()=>{
    

   bulles.forEach((bulle,index) => {
      if(index===compteur){
        ligne.style.width = (compteur/(bulles.length-1)*100)+'%'
        setTimeout(() => {
            bulles[index].classList.add('active');
        }, 200);
      }
    
   }); 

   compteur+=1;
    if(compteur === 4){
        compteur=4;
        bouttonDroite.disabled=true;
    }
    else{
        bouttonGauche.disabled=false;
    }
})




bouttonGauche.addEventListener('click',()=>{
    compteur-=1;

    bulles.forEach((bulle,index) => {
        if(index===compteur){
          bulles[index].classList.remove('active');
            console.log(compteur, index, bulles.length)
            console.log(((compteur-1)/(bulles.length-1)*100)+'%')
            ligne.style.width =((compteur-1)/(bulles.length-1)*100)+'%'

        }
      
     }); 

     if(compteur === 1){
         compteur=1;
         bouttonGauche.disabled=true;
     }
     else{
         bouttonDroite.disabled=false;
     }
 })