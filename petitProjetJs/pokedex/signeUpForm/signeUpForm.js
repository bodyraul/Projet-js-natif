const btn = document.getElementById("btnPGauche");
const pContenupGauche = document.getElementsByClassName("titreContenuPgauch");
const pGauche = document.getElementsByClassName("pGauche");
const pDroite = document.getElementsByClassName("pDroite");



let btnActif = false;

btn.addEventListener("click",()=>{
    btnActif=!btnActif;
    if(btnActif){
        pContenupGauche[0].classList.add("animTitreContenuPgauches");
        pGauche[0].classList.add("animPgauche");
        pDroite[0].classList.add("animPdroite");
        pContenupGauche[0].classList.remove("animTitreContenuPgauchesRetour");
        pGauche[0].classList.remove("animPgaucheRetour");
        pDroite[0].classList.remove("animPdroiteRetour");
    }
    if(!btnActif){
        pContenupGauche[0].classList.add("animTitreContenuPgauchesRetour");
        pGauche[0].classList.add("animPgaucheRetour");
        pDroite[0].classList.add("animPdroiteRetour");
        pContenupGauche[0].classList.remove("animTitreContenuPgauches");
        pGauche[0].classList.remove("animPgauche");
        pDroite[0].classList.remove("animPdroite");
    }
})

