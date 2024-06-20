const btnHaut = document.querySelector('.btn-haut');
const btnBas = document.querySelector('.btn-bas');
const allTitre = document.querySelectorAll('.titre');
const allImage = document.querySelectorAll('.image');
let index =0;

btnHaut.addEventListener('click',()=>{
    btnBas.disabled =false;
    index+=1;
    allImage[index].style.transform = "translateY(0%)";
    allImage[index-1].style.transform = "translateY(-100%)";
    allTitre[index].style.transform = "translateY(0%)";
    allTitre[index-1].style.transform = "translateY(100%)";
    if(index===3){
        index===3;
        btnHaut.disabled = true;
    }
})

btnBas.addEventListener('click',()=>{
    btnHaut.disabled =false;
    index-=1;   
    allImage[index+1].style.transform = "translateY(100%)";
    allImage[index].style.transform = "translateY(0%)";
    allTitre[index+1].style.transform = "translateY(-100%)";
    allTitre[index].style.transform = "translateY(0%)";
    if(index===0){
        index===0;
        btnBas.disabled = true;
    }
})