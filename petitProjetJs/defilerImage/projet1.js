const panel = document.querySelectorAll('.pannel');
function suppClas (){
    panel.forEach(pannel => {
        pannel.classList.remove("pannelActive");
    });
}

panel.forEach((pannel)=>{
    pannel.addEventListener('click',()=>{
        suppClas();
        pannel.classList.add("pannelActive");
    })
})