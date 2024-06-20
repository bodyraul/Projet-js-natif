const tabAllOeilBtn = document.querySelectorAll('.container-oeil-bouton');
const tabAllRondBtn =document.querySelectorAll('.rond-boutton-p3');
const btnAddCard = document.querySelectorAll('.btn-add-card');
const containerAllCouleur = document.querySelectorAll('.container-all-couleur');
const allImagePTrois = document.querySelectorAll('.image-p3');
const allTitrePTrois =document.querySelectorAll('.titre-texte-p3');
const allTextePTrois =document.querySelectorAll('.contenu-texte-p3');
const allButtonPTrois =document.querySelectorAll('.btn-add-card');
let indiceRondBtn = 0;

  window.onload = (event) => {
    for (let index = 1; index < tabAllOeilBtn.length; index++) {
        tabAllOeilBtn[index].style.transform="scale(0)";
        tabAllRondBtn[indiceRondBtn].style.backgroundColor="#E2D3FF";
    }
  };

  tabAllRondBtn.forEach((rond,index) => {
    rond.addEventListener('click',(e)=>{
        if(index===indiceRondBtn){
            return;
        }
        if(index!==indiceRondBtn){
            tabAllOeilBtn[indiceRondBtn].style.transform="scale(0)";
            tabAllOeilBtn[index].style.transform="scale(1)";
            const bgColor = tabAllRondBtn[index].dataset.color;
            tabAllRondBtn[indiceRondBtn].style.backgroundColor='white';
            tabAllRondBtn[index].style.backgroundColor=`${bgColor}`;
            containerAllCouleur[indiceRondBtn].style.zIndex = "1";
            containerAllCouleur[index].style.zIndex = "4";
            allImagePTrois[indiceRondBtn].style.transform="translateY(50px)";
            allImagePTrois[indiceRondBtn].style.opacity="0";
            allTitrePTrois[indiceRondBtn].style.transform="translateY(50px)";
            allTitrePTrois[indiceRondBtn].style.opacity="0";
            allTextePTrois[indiceRondBtn].style.transform="translateY(50px)";
            allTextePTrois[indiceRondBtn].style.opacity="0";
            allButtonPTrois[indiceRondBtn].style.transform="translateY(50px)";
            allButtonPTrois[indiceRondBtn].style.opacity="0";
            setTimeout(() => {
              allImagePTrois[index].style.transform="translateY(0px)";
              allImagePTrois[index].style.opacity="1";
              allTitrePTrois[index].style.transform="translateY(0px)";
              allTitrePTrois[index].style.opacity="1";
            }, 150);
            setTimeout(() => {
              allTextePTrois[index].style.transform="translateY(0px)";
              allTextePTrois[index].style.opacity="1";
            }, 300);
            setTimeout(() => {
              allButtonPTrois[index].style.transform="translateY(0px)";
              allButtonPTrois[index].style.opacity="1";
            }, 450);
            indiceRondBtn=index;

        }
    })
  });



