
const allSmallWater = document.querySelectorAll(".waterSmallContainer");
const smallContainer =document.querySelectorAll(".smallcontainer");
const contenuSmallContainer =document.querySelectorAll(".contenuSmallContainer");
const bigContenu =document.querySelectorAll('.bigWater');
const contenuBigWater= document.querySelectorAll('.contenuBigContainer');
const paradonnees = document.getElementById("donnees");

let unite = 600/8;
let augmentationBigWater=0;
let litre =0;

smallContainer.forEach((element,index) => {
    element.addEventListener('click',()=>{
        litre=((2000-(250*(index+1)))/2000)*2;
        paradonnees.textContent =`${litre}L`;
        augmentationBigWater=600-((index+1)*unite);
        bigContenu[0].style.transform =`translateY(${augmentationBigWater}px)`;
        if(index>=3){
            contenuBigWater[0].style.color="white";
        }
        if(index<3){
            contenuBigWater[0].style.color="#1849B5";
        }
       for (let k = 0; k <= index; k++) {
          allSmallWater[k].style.transform ="translateY(0%)";
          contenuSmallContainer[k].style.color="white";
       }
       for (let j = index+1; j <= smallContainer.length; j++) {
        allSmallWater[j].style.transform ="translateY(100%)";
        contenuSmallContainer[j].style.color="#1849B5";
     }
    })

});