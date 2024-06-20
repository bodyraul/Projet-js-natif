
const allBlock = document.querySelectorAll(".bloc");

 
allBlock.forEach((element,index) => {
    element.addEventListener("click",()=>{
        for (let k = 0; k < allBlock.length; k++) {
            if(k===index){
                allBlock[k].classList.add("actif");
                allBlock[k].classList.remove("inactif");
            }else{
                allBlock[k].classList.add("inactif");
                allBlock[k].classList.remove("actif");
            }
        }
    })
});