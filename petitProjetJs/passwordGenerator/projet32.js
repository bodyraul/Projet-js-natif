const bouton = document.getElementById("btn");
const inputNumber = document.getElementById("inputNumber");
const checkUpper = document.getElementById("checkUpper");
const checkLower = document.getElementById("checkLower");
const checkNumber = document.getElementById("checkNumber");
const checkSymbol = document.getElementById("checkSymbol");
const affichePassword = document.getElementById("affichePassword");
const tabLower =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const tabUpper =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const tabNumber = ["0","1","2","3","4","5","6","7","8","9"];
const tabSymbol = ["&","@","#","*"];
const tabLowerVide =[];
const tabUpperVide =[];
const tabNumberVide =[];
const tabSymboleVide =[];
let taillePassword = 0;
let indexChecked =0;
let allTab =[];
let randomNombre=0;
let finalPassword = [];
nombreCharPassword =0;

function initialisation(){
    affichePassword.innerText="";
    taillePassword = 0;
    indexChecked =0;
    allTab =[];
    randomNombre=0;
    finalPassword = [];
    nombreCharPassword =0;
}

function recupNbCharPassword(){
    nombreCharPassword= inputNumber.value;
}

function lowerChecked(){
    if(checkLower.checked===true){
        indexChecked+=1;
        return tabLower;
    }
    else{
        return tabLowerVide;
    }
}


function upperChecked(){
    if(checkUpper.checked===true){
        indexChecked+=1;
        return tabUpper;
    }
    else{
        return tabUpperVide;
    }
}

function numberCheked(){
    if(checkNumber.checked===true){
        indexChecked+=1;
        return tabNumber;
    }
    else{
        return tabNumberVide;
    }
}

function symbolChecked(){
    if(checkSymbol.checked===true){
        indexChecked+=1;
        return tabSymbol;
    }
    else{
        return tabSymboleVide;
    }
}

function firstStepPassword(){
    allTab = allTab.filter(element=>element.length>0);
    for (let k = 0; k < indexChecked; k++) {
            let array=allTab[k];
            randomNombre=Math.floor(Math.random()*(allTab[k].length));
            finalPassword.push(array[randomNombre]);
    }
}

function secondStepPassword(){
    let lettreRestante = nombreCharPassword - indexChecked;
    for (let k = 0; k < lettreRestante; k++) {
        let random1 = Math.floor(Math.random() * indexChecked);
        let tabRandom = allTab[random1];
        let random2= Math.floor(Math.random() * tabRandom.length);
        finalPassword.push(tabRandom[random2]);
    }
}

function finalStepPassword(){
    console.log(finalPassword);
    finalPassword.sort(()=> Math.random() -0.5);
    for (let k = 0; k<finalPassword.length-1; k++) {
        affichePassword.innerText += finalPassword[k];
        
    }
}

bouton.addEventListener('click',()=>{
    initialisation();
    recupNbCharPassword();
    const lower =lowerChecked();
    const upper =upperChecked();
    const symbol =symbolChecked();
    const number =numberCheked();
    allTab=[lower,upper,symbol,number];
    firstStepPassword();
    secondStepPassword();
    finalStepPassword();
})