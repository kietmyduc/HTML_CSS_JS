const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation')
const icon = document.querySelector('ion-icon ')

toggle.addEventListener('click', function () {
    this.classList.toggle('active');
    navigation.classList.toggle('active');
})

