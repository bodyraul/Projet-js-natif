const input = document.querySelector('.saisir');
const allListe = document.querySelector('.allList');
let tabAllDonnees = [];
let donneesString = window.localStorage.getItem('donnesListe');

if(window.localStorage.getItem('donnesListe')){
    donneesString=donneesString+",";
    while (donneesString.indexOf(',') !=-1) {
        tabAllDonnees.push(donneesString.substring(0,donneesString.indexOf(',')));
        donneesString= donneesString.replace(donneesString.substring(0,donneesString.indexOf(',')+1),"");
    }
}

console.log(donneesString);
console.log(tabAllDonnees);

tabAllDonnees.forEach((element,index) => {
    const newListe =document.createElement('p');
        newListe.classList.add('uneListe');
        newListe.innerText=tabAllDonnees[index];
        allListe.appendChild(newListe);
});


input.addEventListener('keypress',(e)=>{
    if(e.key==="Enter"){
        tabAllDonnees.push(e.target.value);
        e.target.value="";
        const newListe =document.createElement('p');
        newListe.classList.add('uneListe');
        newListe.innerText=tabAllDonnees[tabAllDonnees.length-1];
        allListe.appendChild(newListe);
        window.localStorage.setItem('donnesListe',tabAllDonnees);
    }
});