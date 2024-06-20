const divAllCercle = document.querySelector('.creationCercle');
const clock = document.querySelector('.time');
const score = document.querySelector('.score');
const newScore = document.querySelector('.newScore');
const record = document.querySelector('.record');
const btn = document.querySelector(".jouer");
const widthDivCercle = divAllCercle.clientWidth;
const heightDivCercle = divAllCercle.clientHeight;
const widthUnCercle = 0;
const heightUnCercle = 0;
let emplacementX =0;
let emplacementY =0;
let compteurTimer = 0;
let compteurScore = 0;
let allCercle =[];
let widthFirstCercle =0;
let heightFirstCercle =0;

function onLoad(){
    const firstCercle = document.getElementById('firstCercle');
    widthFirstCercle=firstCercle.offsetWidth;
    heightFirstCercle=firstCercle.offsetHeight;
    firstCercle.remove();
    if(!window.localStorage.getItem('record')){
        record.textContent=(`record : 0`)
    }
    else{
        record.textContent=(`Record : ${window.localStorage.getItem('record')}`)
    }
    if(!window.localStorage.getItem('newscore')){
        newScore.textContent=(`Dernier-score : 0`)
    }
    else{
        newScore.textContent=(`Dernier-score : ${window.localStorage.getItem('newscore')}`)
    }
}

function listenner(){
    compteurScore+=1;
    score.textContent=`Score en cours : ${compteurScore}`;
}


function creerUnCercle(){
    emplacementX=Math.floor(Math.random() * ((widthDivCercle-widthFirstCercle) - 1 + 1) + 1);
    emplacementY=Math.floor(Math.random() * ((heightDivCercle-heightFirstCercle) - 1 + 1) + 1);
    for (let k = 0; k < allCercle.length; k++) {
        if((emplacementX>=allCercle[k].offsetLeft-(widthFirstCercle+5) && emplacementX<=allCercle[k].offsetLeft+(widthFirstCercle+5))&&(emplacementY>=allCercle[k].offsetTop-(heightFirstCercle+5) && emplacementY<=allCercle[k].offsetTop+(heightFirstCercle+5))){
            emplacementX=Math.floor(Math.random() * ((widthDivCercle-widthFirstCercle) - 1 + 1) + 1);
            emplacementY=Math.floor(Math.random() * ((heightDivCercle-heightFirstCercle) - 1 + 1) + 1);
            console.log(allCercle[k].offsetTop);
            console.log(allCercle[k].getBoundingClientRect().top);
            k=-1;
        }
        
    }
    let creerCercle = document.createElement('div');
    creerCercle.classList.add('cercle');
    creerCercle.style.top=`${emplacementY}px`;
    creerCercle.style.left=`${emplacementX}px`;
    divAllCercle.appendChild(creerCercle);
    allCercle = document.querySelectorAll('.cercle');
    gestionScore();
}

function timer(intervalStopGame){
    let intervalTimer = setInterval(() => {
        if(compteurTimer===30){
            allCercle.forEach(element => {
                element.remove();
            });
            clock.textContent=`Time: 00:00`;
            score.textContent=`Time: 00:00`;
            clearInterval(intervalTimer); 
            clearInterval(intervalStopGame);
            btn.style.display ="block";
            newScore.textContent=`dernier-score : ${compteurScore}`;
            if(compteurScore>Number(window.localStorage.getItem('record'))){
                window.localStorage.removeItem('record');
                window.localStorage.setItem('record',compteurScore);
                record.textContent=`Record : ${compteurScore}`;
            }
            window.localStorage.removeItem('newscore');
            window.localStorage.setItem('newscore',compteurScore);
            compteurTimer=0;
            compteurScore=0;
        }
        else{
            compteurTimer+=1;
            if(compteurTimer<=9){
                clock.textContent=`Time : 00:0${compteurTimer}`;
            }
            if(compteurTimer>9){
                clock.textContent=`Time : 00:${compteurTimer}`;
            }
        }
    }, 1000);
}

function gestionScore(){
    allCercle.forEach((element) => {
        element.removeEventListener('click',listenner);
    });
    allCercle.forEach((element) => {
        element.addEventListener('click',listenner);
        element.addEventListener('click',()=>{
             element.remove();
        });
    });
}

onLoad();



btn.addEventListener("click",()=>{
    btn.style.display ="none";
    let intervalStopGame =  setInterval(() => {
        creerUnCercle();
    }, 300);
    timer(intervalStopGame);
    creerUnCercle();

})