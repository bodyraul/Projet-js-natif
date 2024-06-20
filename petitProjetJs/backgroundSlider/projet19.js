const image = ["https://www.pixelstalk.net/wp-content/uploads/2016/07/Nature-wallpapers-hd-backgroud-1080p.jpg","https://th.bing.com/th/id/R.33d02c67b4a6e90abe2d7a58f764edd8?rik=gA%2fesQP2%2f0%2b5uw&riu=http%3a%2f%2fwww.snut.fr%2fwp-content%2fuploads%2f2015%2f12%2fimage-de-nature-9.jpg&ehk=4oiNLekZZh50XowVszovQmq8w%2fH0S6GIwQYqeKknWaM%3d&risl=&pid=ImgRaw&r=0","https://thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg","https://www.rd.com/wp-content/uploads/2020/04/GettyImages-471926619.jpg"];
const flecheDroite = document.querySelector('.flecheDroite');
const flecheGauche = document.querySelector('.flecheGauche');
const background =document.querySelector('.background');
const imageCentral=document.querySelector('.image-central');

console.log(flecheDroite)
console.log(flecheGauche)

let numero = 0;

flecheDroite.addEventListener('click',()=>{
    numero+=1;
    if(numero>0){
        flecheGauche.disabled=false;
    }
    if(numero>=3){
        flecheDroite.disabled = true;
    }
    background.style.backgroundImage = `url(${image[numero]})`;
    imageCentral.style.backgroundImage = `url(${image[numero]})`;
})

flecheGauche.addEventListener('click',()=>{
    numero-=1;
    if(numero<3){
        flecheDroite.disabled=false;
    }
    if(numero<=0){
        flecheGauche.disabled = true;
    }
    background.style.backgroundImage = `url(${image[numero]})`;
    imageCentral.style.backgroundImage = `url(${image[numero]})`;
})
