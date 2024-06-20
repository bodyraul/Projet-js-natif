btnMail= document.querySelector('.bouttonMail');
btnPassword= document.querySelector('.bouttonPassword');
lettreMail=document.querySelectorAll('.lettreMail');
lettrePassword=document.querySelectorAll('.lettrePassword');
container=document.querySelector('.containerGlobal');


btnMail.addEventListener('click',()=>{
    lettreMail.forEach(lettre => {
        lettre.classList.add("anim");
    });
    lettrePassword.forEach(lettre => {
        lettre.classList.remove("anim");
    });
})

btnPassword.addEventListener('click',()=>{
    lettreMail.forEach(lettre => {
        lettre.classList.remove("anim");
    });
    lettrePassword.forEach(lettre => {
        lettre.classList.add("anim");
    });
})

