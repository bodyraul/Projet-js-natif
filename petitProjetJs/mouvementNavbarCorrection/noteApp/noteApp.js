const btn =document.getElementById('btn');
const body = document.getElementById('body');
let allNoteEnrengistrees =[];
let btnSupprimer =[];
let btnModifier =[];
let btnEnrengister =[];
let textearea = [];
let tabAllDonnees = [];
let nbNote =0;


const getDataOnLoading =()=>{
    let getData= window.localStorage.getItem('tabDeDonnes');
    if(getData.length===0){
        return;
    }
    getData=getData+",";
    let indiceVirgule =0;
    if(!getData){
        return;
    }
    while (indiceVirgule!==-1) {
        indiceVirgule= getData.indexOf(',');
        tabAllDonnees.push(getData.substring(0,[indiceVirgule]));
        getData=getData.replace(getData.substring(0,[indiceVirgule+1]),"");
    }
    tabAllDonnees.splice(getData.length-1,1);

    tabAllDonnees.forEach((element,index) => {
        const saveNote = document.createElement('div');
           saveNote.classList.add('enrengistrer');
           saveNote.innerHTML=(`<p class="entete">
                                    <img class="img3" src="ben.png" alt="">
                                    <img class="img4" src="pen.png" alt="">
                                </p>
                                <p class="paraSaveNote">
                                    ${tabAllDonnees[index]}
                                </p>`)
            body.appendChild(saveNote);
    });
    allNoteEnrengistrees =document.querySelectorAll('.enrengistrer');
    btnSupprimer =document.querySelectorAll('.img3');
    btnModifier =document.querySelectorAll('.img4');
}

const newNote = ()=>{
    btn.addEventListener('click',()=>{
        if(nbNote>=1){
            return;
        }
        const newNote = document.createElement('div');
        newNote.classList.add("newNote");
        newNote.innerHTML=(` <p class="entete">
                                <img class="img1" src="ben.png" alt="">
                                <img class="img2" src="pen.png" alt="">
                            </p>
                            <p class="textArea">
                                <textarea rows="30" cols="38" id="donnees"></textarea>
                            </p>`)
        body.appendChild(newNote);
        nbNote++;
        btnEnrengister= document.querySelectorAll('.img2');
        textearea= document.querySelectorAll('#donnees');
        enrengistrerNote(newNote);
    })
}

const enrengistrerNote = (newNote)=>{
    btnEnrengister.forEach((element) => {
            element.addEventListener('click',()=>{
            textearea[textearea.length-1].value;
           tabAllDonnees.push(textearea[textearea.length-1].value); 
           const saveNote = document.createElement('div');
           saveNote.classList.add('enrengistrer');
           saveNote.innerHTML=(`<p class="entete">
                                    <img class="img3" src="ben.png" alt="">
                                    <img class="img4" src="pen.png" alt="">
                                </p>
                                <p class="paraSaveNote">
                                    ${tabAllDonnees[tabAllDonnees.length-1]}
                                </p>`)
            body.appendChild(saveNote);
            newNote.remove();
            nbNote--;
            window.localStorage.setItem("tabDeDonnes", tabAllDonnees);
            allNoteEnrengistrees =document.querySelectorAll('.enrengistrer');
            btnSupprimer =document.querySelectorAll('.img3');
            btnModifier =document.querySelectorAll('.img4');
            SupprimerNoteEnrengistrer();
            modifNoteEnrengistrer();
        })
    });
    
}

const SupprimerNoteEnrengistrer =()=>{
    btnSupprimer.forEach((element,index) => {
        element.addEventListener('click',()=>{
            console.log("supprimer");
            allNoteEnrengistrees[index].remove();
            tabAllDonnees.splice(index,1);
            window.localStorage.removeItem('tabDeDonnes');
            window.localStorage.setItem('tabDeDonnes',tabAllDonnees);
        }) 
    });
}

const modifNoteEnrengistrer =()=>{
    btnModifier.forEach((element,index) => {
        element.addEventListener('click',()=>{
            allNoteEnrengistrees[index].remove();
            const note = document.createElement('div');
            note.classList.add("newNote");
            note.innerHTML=(` <p class="entete">
                                    <img class="img1" src="ben.png" alt="">
                                    <img class="img2" src="pen.png" alt="">
                                </p>
                                <p class="textArea">
                                    <textarea rows="30" cols="38" id="donnees">${tabAllDonnees[index]}</textarea>
                                </p>`)
            body.appendChild(note);
            tabAllDonnees.splice(index,1);
            window.localStorage.removeItem('tabDeDonnes');
            window.localStorage.setItem('tabDeDonnes',tabAllDonnees);
            nbNote++;
            btnEnrengister= document.querySelectorAll('.img2');
            textearea= document.querySelectorAll('#donnees');
            enrengistrerNote(note);
        })
    });
}

getDataOnLoading();
newNote();
SupprimerNoteEnrengistrer();
modifNoteEnrengistrer();