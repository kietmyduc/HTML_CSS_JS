let marker = document.querySelector('#marker');
let lists = document.querySelectorAll('ul li');

function moveIndicator(e) {
    marker.style.left = e.offsetLeft + 'px';
    marker.style.width = e.offsetWidth + 'px';
}
lists.forEach(link => {
    link.addEventListener('mousemove', e => {
        moveIndicator(e.target)
    })
})
function activeLink() {
    lists.forEach(item => {
        item.classList.remove('active');
        this.classList.add('active');
    })

}

lists.forEach( item => {
    item.addEventListener('mouseover', activeLink)
})