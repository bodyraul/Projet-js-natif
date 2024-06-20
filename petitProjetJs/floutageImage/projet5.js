
const img=document.querySelector(".container-image");
const text=document.querySelector(".text")
let nombre=0;

window.onload=()=>{
    img.classList.add('classe-anim');
    interval1 =setInterval(() => {
        nombre+=1
        text.innerText = nombre+"%";
        if(nombre===100){
            clearInterval(interval1);
        }
    }, 18);
    text.classList.add('disparition');
}