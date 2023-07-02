const container = document.querySelector('#container');
const slider = document.querySelector('#slider');


for (let i = 0; i < (slider.value * slider.value); i++) {
    const content = document.createElement('div');
    content.classList.add('square');
    container.appendChild(content);
}

const reset = document.querySelector('#reset');

reset.addEventListener('click', () => {
    document.querySelectorAll('.square').forEach(item => {
        item.style['background-color'] = 'white';
    })
})

let active = false;

document.querySelectorAll('.square').forEach(item => {
    item.addEventListener('click', () => {
        if (active == true) {
            active = false;
        }
        else {
            active = true;
            item.style['background-color'] = 'black';
        }
    })
})

document.querySelectorAll('.square').forEach(item=> {
    item.addEventListener('mousemove', function color() {
        if (active) {
            item.style['background-color'] = 'black';
        }
    })
})