'use strict';
window.onload = function () {
  let myAudio = document.getElementById('myAudio');
  myAudio.volume = 0;
};
let isPlaying = true;

function musicPlay() {
  if (isPlaying == false) {
    myAudio.play();
    isPlaying = true;
  }
}
function pausePlay() {
  if (isPlaying == true) {
    myAudio.pause();
    isPlaying = false;
    // console.log(isPlaying);
  }
}
function volumeUp() {
  if (myAudio.volume <= 0.8) {
    myAudio.volume += 0.2;
  } else {
    console.log(myAudio.volume);
  }
}
function volumeDown() {
  if (myAudio.volume >= 0.2) {
    myAudio.volume -= 0.2;
  } else {
    console.log(myAudio.volume);
  }
}