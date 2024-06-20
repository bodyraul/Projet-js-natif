faqInvisible = document.querySelectorAll('.faq-invisible');
faqVisible = document.querySelectorAll('.faq-visible');
btnFleche = document.querySelectorAll('.btn-fleche');
btnCroix = document.querySelectorAll('.btn-croix');

console.log(btnCroix);

btnFleche.forEach((fleche,index) => {
    fleche.addEventListener('click',()=>{
        faqVisible[index].classList.add('invisible');
        faqInvisible[index].classList.remove('invisible');
    })
});

btnCroix.forEach((croix,index) => {
    croix.addEventListener('click',()=>{
        faqVisible[index].classList.remove('invisible');
        faqInvisible[index].classList.add('invisible');
    })
});
