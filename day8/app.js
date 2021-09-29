for (let i = 0; i < 100; i++){
    let box = document.createElement('div');
    box.classList.add('box');
    const container = document.querySelector('.container');
    container.appendChild(box);
}

const btn = document.querySelector('.btn');
const ramdomColorBlock = document.querySelectorAll('.box');

function RamdomHexColorCode() {
    const chars = '0123456789abcdef';

    const colorLength = 6;
    let color = '';

    for (let i = 0; i < colorLength; i++){
        let ramdomColor = Math.floor(Math.random() * chars.length);
        color += chars.substring(ramdomColor, ramdomColor+ 1);
    }

    return '#' + color
}

function addColor() {
    ramdomColorBlock.forEach(e => {
        let newColor = RamdomHexColorCode();
        e.style.backgroundColor = newColor;
        e.innerHTML = newColor;
    })

}
btn.addEventListener('click', addColor)