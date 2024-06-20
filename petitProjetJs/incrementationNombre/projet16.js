const twitter = document.querySelector('#twitter')
const facebook = document.querySelector('#facebook')
const youtube = document.querySelector('#youtube')
let nombreTwitter=0;
let nombreYoutube=0;
let nombrefacebbok=0;


window.onload=()=>{
    const intervalTwitter = setInterval(() => {
        nombreTwitter+=300;
        twitter.innerHTML=nombreTwitter;
    }, 50);

    const intervalYoutube = setInterval(() => {
        nombreYoutube+=125;
        youtube.innerHTML=nombreYoutube;
    }, 50);

    const intervalFacebook = setInterval(() => {
        nombrefacebbok+=187.5;
        facebook.innerHTML=Math.round(nombrefacebbok)
    }, 50);

    setTimeout(() => {
        clearInterval(intervalTwitter)
        clearInterval(intervalYoutube)
        clearInterval(intervalFacebook)
    }, 2000);
}
