let allData =[];
const divBas= document.querySelector('.bas');
const btn =document.querySelector('.btn');

async function getData(){
    const res= await fetch('https://randomuser.me/api/?results=20');
    const data = await res.json();
    allData=await data.results;
    affichageOnLoading();
    gestionSearchBarre();
}

async function affichageOnLoading(){
    allData.forEach((element,index) => {
        const newUser = document.createElement('div');
        newUser.classList.add('user');
        newUser.innerHTML=` <img class="photo" src="${allData[index].picture.thumbnail}" alt="">
                            <h1 class="nom">${allData[index].name.first}, ${allData[index].name.last}</h1>
                            <p class="localisation">${allData[index].location.city}, ${allData[index].location.country}</p>`;
        divBas.appendChild(newUser);
    });
}

function gestionSearchBarre(){
    btn.addEventListener('input',(e)=>{
        console.log(e.target.value);
        const allUser = document.querySelectorAll('.user');
        let newTab =[];
        allData.forEach((element,index) => {
        if(element.name.first.toLowerCase().includes(e.target.value)){
            newTab.push(allData[index]);
        }
    });
        allUser.forEach(element => {
            element.remove();
        });

        newTab.forEach(element => {
            const newElement = document.createElement('div');
            newElement.classList.add('user');
            newElement.innerHTML=` <img class="photo" src="${element.picture.thumbnail}" alt="">
                                <h1 class="nom">${element.name.first}, ${element.name.last}</h1>
                                <p class="localisation">${element.location.city}, ${element.location.country}</p>`;
            divBas.appendChild(newElement);
        });
    })
}

getData();