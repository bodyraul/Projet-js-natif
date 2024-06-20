const allBtn=document.querySelectorAll('.btn');
let btnGood={element :"",indice :0,index:0};
let btnCheap={element :"",indice :0,index:0};
let btnFast={element :"",indice :0,index:0};
let tabBtn =[btnGood,btnCheap,btnFast];

for (let k = 0; k < allBtn.length; k++) {
    tabBtn[k].element=allBtn[k];
    tabBtn[k].index = k;
}

function decompte(){
    let compte=0;
    tabBtn.forEach(element => {
        if(element.indice===1){
            compte+=1
        }
    });
    return compte;
}

function traitement(compte,indice){
   if(tabBtn[indice].indice===0){
    console.log("oui1")
        if(compte=== tabBtn.length-1){
            if(indice===tabBtn.length-1){
                tabBtn[0].element.style.transform = 'translateX(0%)';
                tabBtn[0].element.style.border = '1px solid rgba(201, 202, 201, 0.6)';
                tabBtn[0].element.parentNode.style.backgroundColor = 'rgba(201, 202, 201, 0.6)';
                tabBtn[0].indice =0;
                tabBtn[indice].element.style.transform = 'translateX(100%)';
                tabBtn[indice].element.style.border = '1px solid #8848A5';
                tabBtn[indice].element.parentNode.style.backgroundColor = '#8848A5';
                tabBtn[indice].indice =1;
                return;
            }
            else{
                tabBtn[indice+1].element.style.transform = 'translateX(0%)';
                tabBtn[indice+1].element.style.border = '1px solid rgba(201, 202, 201, 0.6)';
                tabBtn[indice+1].element.parentNode.style.backgroundColor = 'rgba(201, 202, 201, 0.6)';
                tabBtn[indice+1].indice =0;
                tabBtn[indice].element.style.transform = 'translateX(100%)';
                tabBtn[indice].element.style.border = '1px solid #8848A5';
                tabBtn[indice].element.parentNode.style.backgroundColor = '#8848A5';
                tabBtn[indice].indice =1;
                return;
            }
        }
        else{
            tabBtn[indice].element.style.transform = 'translateX(100%)';
            tabBtn[indice].element.style.border = '1px solid #8848A5';
            tabBtn[indice].element.parentNode.style.backgroundColor = '#8848A5';
            tabBtn[indice].indice =1;
            return;
        }
   }
   if(tabBtn[indice].indice===1){
    
        tabBtn[indice].element.style.transform = 'translateX(0%)';
        tabBtn[indice].element.style.border = '1px solid rgba(201, 202, 201, 0.6)';
        tabBtn[indice].element.parentNode.style.backgroundColor = 'rgba(201, 202, 201, 0.6)';
        tabBtn[indice].indice =0;
        return;
   }
}

for (let k = 0; k < allBtn.length; k++) {
    allBtn[k].addEventListener('click',()=>{
        let compte=decompte();
        traitement(compte,k);
    })
    
}




