const boutton = document.querySelector('.btn');
const affichageJoke = document.querySelector('.contenu-blague');
let joke ="";

const getJoke = async()=>{
    await axios.get('https://icanhazdadjoke.com/slack')
    .then(res=>{
        joke=res.data.attachments[0].fallback;
    })
    .catch(err=>{
        console.log(err)
    })
}

const affichage = async ()=>{
    affichageJoke.innerText = `${joke}`;
}

const programme = async()=>{
    await getJoke();
    await affichage();
} 

window.onload=()=>{
  programme();
}

boutton.addEventListener('click',()=>{
    programme();
})



