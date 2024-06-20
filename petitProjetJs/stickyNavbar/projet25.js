const navbar = document.querySelector('.nav');
const para = document.getElementById('para2');
const tailleEcran = window.innerHeight;

function animation(){
    const positionPara = para.getBoundingClientRect().top;
    console.log(positionPara)
    console.log(tailleEcran)
    console.log(window.scrollY +"scrolly")
    console.log(para.offsetHeight + "offse")
    if(positionPara<tailleEcran){
        navbar.classList.add('nav2')
    }
    else if(positionPara>tailleEcran){
        navbar.classList.remove('nav2')
    }
}

window.addEventListener('scroll',animation);