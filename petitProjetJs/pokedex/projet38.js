let tabPokemon = [];
let newPokemon ={};
const containerGlobal = document.querySelector('.container-global');


function testBgColor(type){
    let color ="";
    if(type==="grass"){
        return color="#D8F7DD";
    }
    if(type==="fire"){
        return color="#FFDFDC";
    }
    if(type==="water"){
        return color="#D8EFFD";
    }
    if(type==="bug"){
        return color=" #FCCF9B";
    }
    if(type==="poison"){
        return color="  #89C79F";
    }
    if(type==="flying "){
        return color="  #89C79F";
    }
    if(type==="normal"){
        return color="  #F4F3F4";
    }
    if(type==="ground"){
        return color=" #F6E4D7";
    }
    if(type==="fairy"){
        return color=" #FDEAFF";
    }
    if(type==="psychic"){
        return color=" #E9E59C";
    }
    if(type==="fighting "){
        return color="  #E4DBD0";
    }
    if(type==="electric "){
        return color=" #FEF4DA";
    }
}

function testID(id){
    let phrase = "";
    if(id<10){
        return phrase=`#00${id}`;
    }
    if(id>=10 && id<100){
        return phrase=`#0${id}`;
    }
    if(id>100){
        return phrase=`#${id}`;
    }
}

async function getAllPokemon(index){
     await axios.get(`https://pokeapi.co/api/v2/pokemon/${index}/`)
    .then(res=>{
         newPokemon = {
            id : res.data.id,
            name : res.data.name,
            type:  res.data.types[0].type.name
        }
        tabPokemon.push(newPokemon);
        if(index===150){
            console.log(tabPokemon)
        }
    })
    .catch(err=>console.log(err)); 
}

async function getAllImagePokemon(index){
    const newPara = document.createElement('div');
    let colorPokemon=testBgColor(tabPokemon[index-1].type);
    newPara.style.backgroundColor=colorPokemon;
    newPara.classList.add('card');
    newPara.innerHTML=`
    <p class="container-img">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png" alt="">
    </p>
    <p class="container-informations">
        <span class="id">${testID(tabPokemon[index-1].id)}</span>
        <span class="name">${tabPokemon[index-1].name}</span>
        <span  class="type">${ tabPokemon[index-1].type}</span>
    </p>
    `
    containerGlobal.appendChild(newPara);
}

async function recupereationAllCards(){
    const allCardPokemon=document.querySelectorAll('.card');
    allCardPokemon.forEach(element => {
        element.addEventListener('click',()=>animationCard(element))
    });
}
function animationCard(element){
    element.style.backgroundColor='red'
}

const boucleAllPolemon = async ()=>{
    for (let k = 1; k <=150 ; k++) {
        await getAllPokemon(k);
   }
  
    for (let k = 1; k <= tabPokemon.length; k++) {
        await getAllImagePokemon(k);
    }

    await recupereationAllCards();
}


window.onload=()=>{
    boucleAllPolemon();
}







    

