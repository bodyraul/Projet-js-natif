const textDisparitionUn = document.querySelector('#text-disparition');
const textDisparitionDeux = document.querySelector('#text-disparition-deux');
const textDisparitionTrois = document.querySelector('#text-disparition-trois');
const allTextDisparition =[textDisparitionDeux,textDisparitionTrois];
const fontBasique = document.querySelector('.font-basique');
const fontAleatoire = document.querySelector('.font-aleatoire');
const fontSpecial = document.querySelector('.font-special');
const informationGradient = document.querySelector('.information-gradient');
const containerLogo = document.querySelector('#container-logo');
const imgClover = document.querySelector('.clover');
const imgStar = document.querySelector('#star');
const tabText=["talent curation","team building","peaple connecting"];
let k =0;
let y =2;

window.onload = function () {
    informationGradient.style.transform='translateY(0px)';
    setTimeout(() => {
        informationGradient.style.transform='rotate(5deg)';
        fontAleatoire.style.transform='translateY(0px) rotate(0deg)';
    }, 200);
    setTimeout(() => {
        fontAleatoire.style.transform=' rotate(0deg)';
        fontSpecial.style.transform='translateY(0px)';
    }, 400);
    setTimeout(() => {
        fontSpecial.style.transform='rotate(0deg)';
        fontBasique.style.transform='translateY(0px)';
    }, 600);
    setTimeout(() => {
        containerLogo.style.opacity="1";
    }, 1500);
    setTimeout(() => {
        imgClover.style.left ="60%";
        imgClover.style.opacity ="1";
    }, 1700);
    setTimeout(() => {
        imgStar.style.opacity="1";
    }, 1900);
  }

setTimeout(() => {
    textDisparitionUn.classList.add('animDescendreText');
    textDisparitionDeux.classList.add('animMonterText');
    setInterval(() => {
        if(y===3){
            y=0;
        }
        allTextDisparition[k].classList.remove('animMonterText');
        allTextDisparition[k].classList.remove('animDescendreText');
        allTextDisparition[k].classList.add('animDescendreText');
        setTimeout(() => {
            allTextDisparition[k].innerText=tabText[y];
            y++;
        }, 100);
        if(k===1){
            allTextDisparition[0].classList.remove('animMonterText');
            allTextDisparition[0].classList.remove('animDescendreText');
            allTextDisparition[0].classList.add('animMonterText');
            k=0;
            return;
        }
        if(k<1){
            allTextDisparition[k+1].classList.remove('animMonterText');
            allTextDisparition[k+1].classList.remove('animDescendreText');
            allTextDisparition[k+1].classList.add('animMonterText');
            k++;
            return;
        }
    
    }, 3000);

    
}, 3000);

// deuxieme container

const containerBtnAnim = document.querySelector('.support-btn-anim');
const btnanim =document.querySelector('.element-anim');
const firstSpan =document.querySelector('.first-span')
const secondSpan =document.querySelector('.second-span')
const titresouligne = document.querySelectorAll('.titre-souligne');
const titreSouligneCache = document.querySelectorAll('.titre-souligne-cache');
const btnInformation =document.querySelector('.img-information');
const paragrapheInformation =document.querySelector('.information-deuxieme-container');
const deuxiemePage =document.querySelector('.deuxieme-container');
const supportBtnIntroP2 = document.querySelector('.support-btn-introduction')
const divDesigneBrand = document.querySelector('.div-designe-brand');
const divTechnologieEntreprise = document.querySelector('.div-technologie-entreprises');
const divManagamentStartup = document.querySelector('.div-managament-startup');
let paraInformationActive = false;
let j=0;
let gauche=true;
let droite = false;

window.addEventListener('scroll',()=>{
    const tailleEcran = window.innerHeight
    const hauteurDivTechno = divTechnologieEntreprise.getBoundingClientRect().top;
    if(hauteurDivTechno<=tailleEcran){
        supportBtnIntroP2.style.transform=`translateY(0px)`;
        supportBtnIntroP2.style.opacity=`1`;
        setTimeout(() => {
            divDesigneBrand.style.transform=`translateY(0px)`;
            divDesigneBrand.style.opacity=`1`;
        }, 100);
        setTimeout(() => {
            divTechnologieEntreprise.style.transform=`translateY(0px)`;
            divTechnologieEntreprise.style.opacity=`1`;
        }, 200);
        setTimeout(() => {
            divManagamentStartup.style.transform=`translateY(0px)`;
            divManagamentStartup.style.opacity=`1`;
        }, 300);
    }
})

btnanim.addEventListener('click',()=>{
    j++;
})

containerBtnAnim.addEventListener('click',()=>{
    if(j==1){
        j=0;
        return;
    }
    else{
        if(gauche===true){
            btnanim.classList.remove('animDroiteGaucheContainer2');
            btnanim.classList.add('animGaucheDroiteContainer2');
            btnanim.innerText = "";
            firstSpan.style.opacity ="1";
            secondSpan.style.opacity ="0";
            setTimeout(() => {
                btnanim.innerText = "The clients";
            }, 200);
            gauche=false;
            droite=true;
            titresouligne.forEach(element => {
                element.classList.remove('animTitreSouligneMonter');
            });
            titresouligne.forEach(element => {
                element.classList.add('animTitreSouligneDescend');
            });
            let j=1;
            for (let k = 0; k < titreSouligneCache.length; k++) {
                if(k===0){
                    setTimeout(() => {
                        titreSouligneCache[k].classList.remove('animTitreSouligneCacheDescend');
                        titreSouligneCache[k].classList.add('animTitreCacheSouligneMonter');
                    }, 0);
                }
                else{
                    setTimeout(() => {
                        titreSouligneCache[k].classList.remove('animTitreSouligneCacheDescend');
                        titreSouligneCache[k].classList.add('animTitreCacheSouligneMonter');
                    }, j*150);
                    j++;
                }
            }
            return;
        }
        if(droite===true){
            btnanim.classList.remove('animGaucheDroiteContainer2');
            btnanim.classList.add('animDroiteGaucheContainer2');
            btnanim.innerText = "";
            secondSpan.style.opacity ="1";
            firstSpan.style.opacity ="0";
            setTimeout(() => {
                btnanim.innerText = "The talent";
            }, 200);
            gauche=true;
            droite=false;
            titreSouligneCache.forEach(element => {
                element.classList.add('animTitreSouligneCacheDescend');
            });
            titreSouligneCache.forEach(element => {
                element.classList.remove('animTitreCacheSouligneMonter');
            });
            let j=1;
            for (let k = 0; k < titresouligne.length; k++) {
                if(k===0){
                    setTimeout(() => {
                        titresouligne[k].classList.remove('animTitreSouligneDescend');
                        titresouligne[k].classList.add('animTitreSouligneMonter');
                    }, 0);
                }
                else{
                    setTimeout(() => {
                        titresouligne[k].classList.remove('animTitreSouligneDescend');
                        titresouligne[k].classList.add('animTitreSouligneMonter');
                    }, j*150);
                    j++;
                }
            }
            return;
        }
    }
})


btnInformation.addEventListener('click',()=>{
    paraInformationActive= !paraInformationActive;
   if(paraInformationActive===true){
    paragrapheInformation.style.opacity = "1";
    document.body.style.overflowY="hidden";
   }
   if(paraInformationActive===false){
    paragrapheInformation.style.opacity = "0";
    document.body.style.overflowY="scroll";
   }

})


// troisieme container

const enteteTroisemeContainer = document.querySelector('.texte-entete-troisieme-container');
const barAnim = document.querySelectorAll('.barre-entete-troisieme-container');
const sousDivUNe =document.getElementById('sous-div-une');
const allSousDiv =document.querySelectorAll('.div-contenu-troisieme-container');
window.addEventListener('scroll',()=>{
    let tailleEcran = window.innerHeight;
    let situerEnteteTroisemeContainer = enteteTroisemeContainer.getBoundingClientRect().top;
    if(situerEnteteTroisemeContainer>=tailleEcran*75/100){
        barAnim.forEach(element => {
            element.style.height="0px";
            element.classList.remove('animBarreTroisiemeContainer');
            element.classList.add('animBarreTroisiemeContainerDeux');
        });
          
    }

    if(situerEnteteTroisemeContainer<=tailleEcran*75/100){
        barAnim.forEach(element => {
            element.style.height="3px";
            element.classList.remove('animBarreTroisiemeContainerDeux');
            element.classList.add('animBarreTroisiemeContainer');
        });
          
    }

  
})

window.addEventListener('scroll',()=>{
    let tailleEcran = window.innerHeight;
    allSousDiv.forEach(element => {
        if(element.getBoundingClientRect().top<=tailleEcran*60/100){
            element.classList.add('animSousDiv');
        }
    });
})

// container 4 

const titreContainerQuatre = document.getElementById("titre-page-4");
const containerTitrePageQuatre = document.querySelector('.top-container-principale1-p4');
const containerContenuTitrePageQuatre = document.querySelector('.titre-top-container-principale1-p4');
const containerContenuTextePageQuatre = document.querySelector('.texte-top-container-principale1-p4');
const containPrincipaleDeuxPQuatre = document.querySelector('.container-deux-principale-page-quatre');
const cacheTopPageQuatre = document.querySelector('.cache-on-top');
const cacheRightPageQuatre = document.querySelector('.cache-on-right');
const cacheLeftPageQuatre = document.querySelector('.cache-on-left');
const cacheBottomPageQuatre = document.querySelector('.cache-on-bottom');

window.addEventListener('scroll',()=>{
    let hauteurEcran = window.innerHeight*78/100;
    let hauteurDivContainerQuatre = containerTitrePageQuatre.getBoundingClientRect().top;
    let hauteurDivPrincipaleDeuxPQuatre = containPrincipaleDeuxPQuatre.getBoundingClientRect().top;
    
    if(hauteurDivContainerQuatre<=hauteurEcran){
        titreContainerQuatre.classList.add('animApparitionTexteContainerQuatre');
        setTimeout(() => {
            containerContenuTitrePageQuatre.classList.add('animApparitionTexteContainerQuatreDeux');
        }, 150);
        setTimeout(() => {
            containerContenuTextePageQuatre.classList.add('animApparitionTexteContainerQuatreDeux');
        }, 300);
    }
    if(hauteurDivPrincipaleDeuxPQuatre<=hauteurEcran*95/100){
        cacheTopPageQuatre.classList.add('animationTopElementCache');
        cacheRightPageQuatre.classList.add('animationRightElementCache');
        cacheBottomPageQuatre.classList.add('animationBottomElementCache');
        cacheLeftPageQuatre.classList.add('animationLeftElementCache');
    }
   
})