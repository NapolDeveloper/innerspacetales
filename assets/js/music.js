'use strict';
window.onload = function () {
  let myAudio = document.getElementById('myAudio');
  // 후에 0.1로 수정
  myAudio.volume = 0.1;
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
  if (myAudio.volume <= 0.5) {
    myAudio.volume += 0.1;
  } else {
    console.log(myAudio.volume);
  }
}
function volumeDown() {
  if (myAudio.volume >= 0.1) {
    myAudio.volume -= 0.1;
  } else {
    console.log(myAudio.volume);
  }
}
