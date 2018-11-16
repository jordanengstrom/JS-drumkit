function playSound(e) {
    this.console.log(e.keyCode)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    //this.console.log(audio)
    if (!audio) return; // stop the function from running all together
    audio.currentTime = 0; // rewinds to the start
    audio.play();
    //this.console.log(key)
    key.classList.add('playing')
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip if it's not a transform
    this.classList.remove('playing')
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);