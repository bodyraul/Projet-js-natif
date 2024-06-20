
const cards = document.querySelector('.card');
const form = document.querySelector('.form');
const saisies = document.querySelector('.saisir');
const APIURL = 'https://api.github.com/users/';

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const nom = saisies.value;
    creationContenu(nom);
    creationRepos(nom);
    saisies.value ="";
})

function HautCard(information){
    cards.innerHTML=`
    <div class="image-contenu">
        <div class="partie-img">
            <p class="container-img">
                <img src="${information.avatar_url}" alt="">
            </p>
        </div>
        <div class="partie-contenu">
            <p class=${information.name ? "nom" : "nom2"}>${information.name ? information.name : "Identité non renseignée"}</p>
            <p class="presentation"> ${information.bio ? information.bio : "Bio non renseignée"}</p>
            <p class="followers">
                <span>${information.followers} followers</span>
                <span>${information.following} followings</span>
                <span>${information.public_repos} repos</span>
            </p>
        </div>
        </div>
        <div class="all-post">
        <div class="vide">

        </div>
        <div class="posts">
            
        </div>
    </div>
    `
}

function messageErreur(){
    cards.innerHTML=`
    <div class="messageErreur">
        <p>
            Pas de profile avec cet utilisateur
        </p>
    </div>
    `
}

function affichageRepos(tableau){
    tableau.slice(0,10).forEach(repo => {
        const post = document.querySelector('.posts');
        const unPost= document.createElement('a');
        unPost.classList.add('lePost');
        unPost.innerText =repo.name;
        unPost.href =repo.html_url;
        unPost.target='_blank';
        post.appendChild(unPost);
    });
}

async function creationContenu(nom){
    axios.get(`${APIURL}`+nom)
    .then(res=>{
        const information=res.data;
        HautCard(information);
    })
    .catch(err=>{
        messageErreur();
    })
}



async function creationRepos(nom){
    axios.get(`${APIURL}`+nom+"/repos")
    .then(res=>{
        const allRepo = res.data;
        affichageRepos(allRepo);
    })
    .catch(err=>console.log(err));
}

