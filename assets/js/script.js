document.addEventListener('DOMContentLoaded', function(){

    // Get all the necessary elements 
    const fill = document.querySelector('.fill');
    const empties = document.querySelectorAll('.empty');
    

    // Add fill related events to fill
    fill.addEventListener('dragstart', dragStart);
    fill.addEventListener('dragend', dragEnd);


    // add empty related events to empty container
    empties.forEach(empty => {
        empty.addEventListener('dragover', dragOver);
        empty.addEventListener('dragenter', dragEnter);
        empty.addEventListener('dragleave', dragLeave);
        empty.addEventListener('drop', dragDrop);
    })

    // Drag function
    function dragStart(){
        this.classList.add('empty');
        requestAnimationFrame(() => {
            this.classList.add('invisible');
        })
    }
    
    function dragEnd(){
        requestAnimationFrame(() => {
            this.classList.remove('invisible');
        })
    }

    function dragOver(e){
        e.preventDefault();
    }

    function dragEnter(e){ 
        this.classList.add('hovered');
    }

    function dragLeave(){
        this.classList.remove('hovered');
    }

    function dragDrop(){
        this.classList.remove('hovered');
        empties.forEach(empty => empty.classList.remove('hovered'));
        this.append(fill);
    }
})