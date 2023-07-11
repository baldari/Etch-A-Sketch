const container = document.querySelector('#container');
const slider = document.querySelector('#slider');

function createSquares() {
    for (let i = 0; i < (slider.value * slider.value); i++) {
        const content = document.createElement('div');
        content.classList.add('square');
        content.style.height = `calc(100% * 1/${slider.value} - 1px)`
        content.style.width = `calc(100% * 1/${slider.value} - 1px)`
        container.appendChild(content);
    }
}

createSquares();

slider.addEventListener('input', () => {
    let content = container.lastElementChild;
    while (content) {
        container.removeChild(content);
        content = container.lastElementChild;
    }
    createSquares();
    activateSquares();
    active = false;
})

const reset = document.querySelector('#reset');

reset.addEventListener('click', () => {
    document.querySelectorAll('.square').forEach(item => {
        item.style['background-color'] = 'white';
    })
    active = false;
})

let active = false;

function activateSquares() {
    document.querySelectorAll('.square').forEach(item => {
        item.addEventListener('click', () => {
            if (active == true) {
                active = false;
            }
            else {
                active = true;
                item.style['background-color'] = selectedColor;
            }
        })
    })

    document.querySelectorAll('.square').forEach(item=> {
        item.addEventListener('mousemove', function color() {
            if (active) {
                item.style['background-color'] = selectedColor;
            }
        })
    })
}

activateSquares();

let selectedColor = 'black';

document.querySelectorAll('.color').forEach(item => {
    item.addEventListener('click', () => {
        selectedColor = item.classList[1];
    })
})