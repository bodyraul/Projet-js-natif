const paracliquable = document.querySelectorAll('.para-cliquable');
const btn = document.querySelector('.btn');
const containerGlobal = document.querySelector('.container-global');
let indexPara = -1;

paracliquable.forEach((element,index) => {
    element.addEventListener('click',()=>{
        for (let k = 0; k < paracliquable.length; k++) {
           if(k===index){
                paracliquable[k].classList.add('active');
                indexPara=k;
           }
            else{
                paracliquable[k].classList.remove('active');
            }
        }
    })
});

btn.addEventListener('click',()=>{
    if(indexPara===-1){
        return;
    }
    else{
        console.log(containerGlobal)
        containerGlobal.style.display = "none";
        const div = document.createElement('div');
        div.classList.add('satisfaction');
        div.innerHTML=`
            <img src="./coeur2.png" alt="">
            <p>Thank you</p>
            <p>Feedbakc : ${paracliquable[indexPara].dataset.texte}</p>
            <p>We'll use your feedback to improve our customer support</p>
        `
        document.body.appendChild(div);
    }
})