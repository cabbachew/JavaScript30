function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return; // stops function from running
    audio.currentTime = 0; // rewind to the start
    audio.play();
    key.classList.add('playing'); 
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip if it's not a transform
    this.classList.remove('playing');
}

window.addEventListener('keydown', playSound);
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
