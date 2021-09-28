const clips = document.querySelectorAll('.clip');
const clipLength = clips.length;

for (let i = 0; i < clipLength; i++){
    clips[i].addEventListener('click', function (e) {
        clips[i].play();
    })
    clips[i].addEventListener('mouseenter', function (e) {
        clips[i].play();
    })
    clips[i].addEventListener('mouseout', function (e) {
        clips[i].pause();
    })
}