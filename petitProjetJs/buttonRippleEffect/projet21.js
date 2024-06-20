boutton = document.querySelectorAll('.btn');

boutton.forEach(btn => {
    btn.addEventListener("click",(e)=>{
        const cliqueX = e.clientX;
        const cliqueY = e.clientY;
        const positionBtnY= e.target.offsetTop;
        const positionBtnX= e.target.offsetLeft;
        const positionBouleX = cliqueX-positionBtnX;
        const positionBouleY = cliqueY-positionBtnY;
        
        const boule = document.createElement("p");
        boule.style.top =`${positionBouleY}px`;
        boule.style.left =`${positionBouleX}px`;
        e.target.appendChild(boule);
        boule.classList.add('boule');
    })
});