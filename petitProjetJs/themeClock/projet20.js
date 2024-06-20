const aiguilleSecondes = document.querySelector('.secondes');const aiguilleMinutes = document.querySelector('.minutes');const aiguilleHeures = document.querySelector('.heures');const affichageJour = document.querySelector('.affichage-jour');const uniteHeures = document.querySelector('.unite-heure');const dizaineHeures=document.querySelector('.dizaine-heure'); const dizaineMinutes = document.querySelector('.dizaine-minute');const uniteMinutes= document.querySelector('.unite-minute');const dizainSecondes = document.querySelector('.dizaine-seconde');const uniteSecondes = document.querySelector('.unite-seconde');const afficheHeure = document.querySelector('.affichage-heure');
const boutton = document.querySelector('.btnLight');
const horloge = document.querySelector('.horloge');
const milieu =document.querySelector('.milieu');
const tabMois =["Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Decembre"];
const tabJour = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
const date = new Date();const jour = date.getDay();const numeroJour =date.getDate();const mois= date.getMonth();
const nbSecondes =date.getSeconds();const nbMinutes = date.getMinutes();const nbHeures = date.getHours();
let rotateSecondes = nbSecondes*6;let rotateMinutes = nbMinutes*6;let rotateHeures = nbHeures*30;
let majNbHeures=0;let nbDizaineHeures = 0; let nbUniteHeures = 0;
let majNbMinutes=0;let nbDizaineMnt = 0; let nbUniteMinutes = 0;
let majNbSecondes=0;let nbDizaineSecondes = 0; let nbUniteSecondes = 0;
const enfant = afficheHeure.children;

function verificationSeconde(){
    if(nbSecondes<10){
        majNbSecondes="0"+nbSecondes;
        
    }
    else{
        majNbSecondes=nbSecondes;
    }
    
}

function verificationMinute(){
    if(nbMinutes<10){
        majNbMinutes="0"+nbMinutes;
        
    }
    else{
        majNbMinutes=nbMinutes;
    }
    
}

function verificationHeure(){
    if(nbHeures<10){
        majNbHeures="0"+nbHeures;
        
    }
    else{
        majNbHeures=nbHeures;
    }
    
}

function starter(){
    nbDizaineHeures = Math.trunc(majNbHeures/10); 
    nbUniteHeures= (majNbHeures.toString().substring(1));
    nbDizaineMnt = Math.trunc(majNbMinutes/10); 
    nbUniteMinutes = (majNbMinutes.toString().substring(1));
    nbDizaineSecondes = Math.trunc(majNbSecondes/10); 
    nbUniteSecondes = (majNbSecondes.toString().substring(1));
    aiguilleSecondes.style.rotate = `${rotateSecondes-90}deg`;
    aiguilleMinutes.style.rotate = `${rotateMinutes-90}deg`;
    aiguilleHeures.style.rotate = `${rotateHeures-90}deg`;
    affichageJour.innerHTML=`${tabJour[jour]}`+` `+ ` ${numeroJour}` + ` `+ ` ${tabMois[mois]}`
    dizaineMinutes.innerHTML=`${nbDizaineMnt}`;
    uniteMinutes.innerHTML=`${nbUniteMinutes}`;
    dizainSecondes.innerHTML=`${nbDizaineSecondes}`;
    uniteSecondes.innerHTML=`${nbUniteSecondes}`;
    uniteHeures.innerHTML=`${nbUniteHeures}`;
    dizaineHeures.innerHTML=`${nbDizaineHeures}`;
}

function majHorloge(){
    const gestionSecondes = setInterval(() => {
        rotateSecondes+=6;
        aiguilleSecondes.style.rotate = `${rotateSecondes-90}deg`;
        if(rotateSecondes%360===0){
            rotateMinutes+=6;
            aiguilleMinutes.style.rotate = `${rotateMinutes-90}deg`;
            if(rotateMinutes%360===0){
                rotateHeures+=30;
                aiguilleHeures.style.rotate = `${rotateHeures-90}deg`;
            }
        }
    }, 1000);
}

function majReveil(){
    let uniteseconde = parseInt(nbUniteSecondes);
    let dizaineseconde = parseInt(nbDizaineSecondes);
    let uniteminute = parseInt(nbUniteMinutes);
    let dizaineminute = parseInt(nbDizaineMnt);
    let uniteheure = parseInt(nbUniteHeures);
    let dizaineheure = parseInt(nbDizaineHeures);

    const interval =setInterval(() => {
        uniteseconde+=1;
        if(uniteseconde>9){
            uniteseconde=0;
            dizaineseconde+=1;
            if(dizaineseconde>5){
                dizaineseconde=0;
                uniteminute+=1;
                if(uniteminute>9){
                    uniteminute=0;
                    dizaineminute+=1;
                    if(dizaineminute>5){
                        dizaineminute=0;
                        uniteheure+=1;
                        if(uniteheure=== 4 && dizaineheure=== 2){
                            uniteheure=0; 
                            dizaineheure=0;
                            setTimeout(() => {
                                uniteHeures.style.transform=`translateY(100%)`
                                dizaineHeures.style.transform=`translateY(100%)`
                            }, 0);
                            setTimeout(() => {
                                uniteHeures.innerHTML=uniteheure;
                                uniteHeures.style.transform=`translateY(0%)`
                                dizaineHeures.innerHTML=dizaineheure;
                                dizaineHeures.style.transform=`translateY(0%)`
                            }, 100);
                        }
                        if(uniteheure!== 4 || dizaineheure!== 2){
                            if(uniteheure>9){
                                uniteheure=0;
                                dizaineheure+=1;
                                setTimeout(() => {
                                    dizaineHeures.style.transform=`translateY(100%)`
                                }, 0);
                                setTimeout(() => {
                                    dizaineHeures.innerHTML=dizaineheure;
                                    dizaineHeures.style.transform=`translateY(0%)`
                                }, 100);
                            }
                            setTimeout(() => {
                                uniteHeures.style.transform=`translateY(100%)`
                            }, 0);
                            setTimeout(() => {
                                uniteHeures.innerHTML=uniteheure;
                                uniteHeures.style.transform=`translateY(0%)`
                            }, 100);
                        }
                    }
                    setTimeout(() => {
                        dizaineMinutes.style.transform=`translateY(100%)`
                    }, 0);
                    setTimeout(() => {
                        dizaineMinutes.innerHTML=dizaineminute;
                        dizaineMinutes.style.transform=`translateY(0%)`
                    }, 100);
                }
                setTimeout(() => {
                    uniteMinutes.style.transform=`translateY(100%)`
                }, 0);
                setTimeout(() => {
                    uniteMinutes.innerHTML=uniteminute;
                    uniteMinutes.style.transform=`translateY(0%)`
                }, 100);
            }
            setTimeout(() => {
                dizainSecondes.style.transform=`translateY(100%)`
            }, 0);
            setTimeout(() => {
                dizainSecondes.innerHTML=dizaineseconde;
                dizainSecondes.style.transform=`translateY(0%)`
            }, 100);
        }
        setTimeout(() => {
            uniteSecondes.style.transform=`translateY(100%)`
        }, 0);
        setTimeout(() => {
            uniteSecondes.innerHTML=uniteseconde;
            uniteSecondes.style.transform=`translateY(0%)`
        }, 100);

    }, 1000);
}

verificationMinute();
verificationSeconde();
verificationHeure();
starter();
majHorloge();
majReveil();

boutton.addEventListener('click',()=>{
    document.body.classList.toggle("couleur-blanc-noir");
    horloge.classList.toggle("couleur-blanc-noir");
    horloge.classList.toggle("border-brown-blanc");
    milieu.classList.toggle("border-brown-blanc");
    aiguilleSecondes.classList.toggle("couleur-brown-blanc");
    aiguilleMinutes.classList.toggle("couleur-borwn-grey");
    aiguilleHeures.classList.toggle("couleur-borwn-grey");
    afficheHeure.classList.toggle("border-noir-blanc");
    affichageJour.classList.toggle("couleurs-noir-blanc");
    for (let k = 0; k < enfant.length; k++) {
        enfant[k].classList.toggle("couleurs-noir-blanc");
    }
})


