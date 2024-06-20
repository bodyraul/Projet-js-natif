const text = document.getElementById('text');
const secondes = document.getElementById('speed');
const phrase = `We all love coding because it's fun !!!`;
let index =1;
let speed = 300/secondes.value;

secondes.addEventListener('input',(e)=>{
    speed = 300 / e.target.value;
})

function affichage (){
    const slice = phrase.slice(0,index);
    index++;
    text.innerText=slice;
    if(index === phrase.length+1){
        index=1;
    }
    setTimeout(() => {
        affichage();
    }, speed);
}

affichage();