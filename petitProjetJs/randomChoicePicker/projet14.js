const texteArea = document.querySelector('#texte');
const boutton = document.querySelector('.boutton');
const btn = document.querySelector('.btn');
let allphrase ="";
let mot = "";
k=0;


texteArea.addEventListener('keydown',(e)=>{

    if(e.key === 'Backspace'){
        let texteLastChild = boutton.lastChild.innerText;
        if(texteLastChild.length===1){
            allphrase=allphrase.slice(0,allphrase.length-1);
           boutton.lastChild.remove();
           mot="";
           return;
        }
        if(allphrase[allphrase.length-1] ===','){
            allphrase=allphrase.slice(0,allphrase.length-1);
            console.log('oui')
            return;
        }
        if(texteLastChild.length>1){
            allphrase=allphrase.slice(0,allphrase.length-1);
            console.log('la')
            let newTexte =texteLastChild.slice(0,texteLastChild.length-1);
            boutton.lastChild.innerText=newTexte;
            mot=newTexte;
        }
        
    }

    if(e.key===','){
        allphrase+=',';
    }

    if(e.key==='Enter'){
        if(!allphrase){
            return;
        }
        if(allphrase){
            let allBtn = document.querySelectorAll('.btn');
            let nbBtn = allBtn.length;
            texteArea.value='';
            allphrase="";
            mot="";
            k=0;
            texteArea.disabled=true;
            let interval = setInterval(() => {
            let nbAleatoire = Math.floor(Math.random()*nbBtn);
                for (let k = 0; k < nbBtn; k++) {
                    if(k===nbAleatoire){
                    allBtn[k].style.backgroundColor = '#23366B';
                    }
                    else{
                    allBtn[k].style.backgroundColor = 'rgb(248,141,48)';
                    }
                    
                }
            }, 100);
            setTimeout(() => {
                clearInterval(interval);
            }, 3000);
        }
    }
})

texteArea.addEventListener('keypress',(e)=>{
    
    if(e.key != ','){
        allphrase+=e.key;
        mot+=e.key;
        if(mot.length===1){
            const button = document.createElement('button');
            button.classList.add('btn');
            button.innerText=mot;
            boutton.appendChild(button);
        }
        if(mot.length>1){
           boutton.lastChild.innerText=mot;
        }
    }
    if(e.key === ','){
        mot="";
        k=0;
    }
    
   
})