function happyFunction(args) {
    console.log('This is a function called with ' + args)
}

happyFunction('meow as an argument')
 
window.addEventListener('keydown', function(e){
    this.console.log(e.keyCode)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    this.console.log(audio)
    if(!audio) return; // stop the function from running all together
    audio.currentTime = 0; // rewinds to the start
    audio.play();
});