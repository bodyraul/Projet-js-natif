const boxes = document.querySelectorAll('.box');


window.addEventListener('scroll',checkBoxes);

checkBoxes();

function checkBoxes(){
    const tailleEcran = window.innerHeight*4/5;
    boxes.forEach(boxe => {
        const hauteurBoxe = boxe.getBoundingClientRect().top;
        if(hauteurBoxe<tailleEcran){
            boxe.classList.add('show');
        }
        else{
            boxe.classList.remove('show');
        }
    });
}