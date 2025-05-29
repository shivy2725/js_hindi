const button = document.querySelectorAll('.box');
const body = document.querySelector('body');
const eset = document.querySelector('.reset');

button.forEach(function(btn){
    btn.addEventListener('click', function(color){
        if(color.target.id === 'box1'){
            body.style.backgroundColor = 'aqua'
        }
        else if(color.target.id === 'box2'){
            body.style.backgroundColor = 'gold'
        }
        else if(color.target.id === 'box3'){
            body.style.backgroundColor = 'red'
        }
        else if(color.target.id === 'box4'){
            body.style.backgroundColor = 'greenyellow'
        }
        else if(color.target.id === 'box5'){
            body.style.backgroundColor = 'violet'
        }

       
        
    })

})

eset.addEventListener('click', function(item){
    if (item.target.id === 'reset1') {
        body.style.backgroundColor = 'white'
    }
})



