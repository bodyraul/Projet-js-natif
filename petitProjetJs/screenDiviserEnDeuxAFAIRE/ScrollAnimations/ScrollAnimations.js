const paraInvisible = document.querySelectorAll(".containerInvisible");
let windowHeight = window.innerHeight;


window.addEventListener("scroll",()=>{
    paraInvisible.forEach(element => {
        if(windowHeight>=element.getBoundingClientRect().top + 100){
            element.style.transform ="translateX(0px)";
            
            console.log((window.scrollY + window.innerHeight));
            console.log(document.documentElement.scrollHeight);
        }
        if(windowHeight<element.getBoundingClientRect().top+100){
            element.style.transform ="translateX(-1200px)";
            
            console.log((window.scrollY + window.innerHeight));
            console.log(document.documentElement.scrollHeight);
        }
    });
})

