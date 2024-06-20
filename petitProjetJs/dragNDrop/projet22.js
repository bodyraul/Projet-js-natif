const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart',dragStart)
fill.addEventListener('dragend',dragEnd)

empties.forEach(empti => {
    empti.addEventListener('dragover',dragOver)
    empti.addEventListener('dragenter',dragEnter)
    empti.addEventListener('dragleave',dragLeave)
    empti.addEventListener('drop',dragDrop)
});

function dragStart(){
    console.log("dragstart")
    this.className += 'hold'
}

function dragEnd(){
    console.log("dragend")
}

function dragOver(){
    console.log("dragover")
}
function dragEnter(){
    console.log("dragenter")
}
function dragLeave(){
    console.log("dragleave")
}
function dragDrop(){
    console.log("dragdrop")
}