const dino = document.querySelector('.dino');

function handlerKeyUp(event) {
    if (event.keyCode === 32) {
        console.log('Pressionou espaço');
    }
}

document.addEventListener('keyup', handlerKeyUp);