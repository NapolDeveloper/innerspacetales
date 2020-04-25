'use strict';
let over = document.getElementById('overlay');

// overlay
let soulName = document.getElementById('overSoulName');
let soulType = document.getElementById('overSoulType');
let soulDes = document.getElementById('overSoulDes');

function overOn(e) {
  let soulID = event.target.id;
  console.log(soulID);

  switch (soulID) {
    case 'basic':
      soulName.innerHTML = 'red soul';
      soulType.innerHTML = 'type : balance';
      soulDes.innerHTML = 'A precious soul to be with you forever.';
      break;
    case 'blue':
      soulName.innerHTML = 'blue soul';
      soulType.innerHTML = 'type : tank';
      soulDes.innerHTML = 'It is a strong-willed but slow-running soul.';
      break;
    case 'napol':
      soulName.innerHTML = 'napol soul';
      soulType.innerHTML = 'type : control';
      soulDes.innerHTML =
        "There's a hidden soul in the program! You can find it on the web!";
      break;
    case 'green':
      soulName.innerHTML = 'green soul';
      soulType.innerHTML = 'type : balance';
      soulDes.innerHTML = '그린 문장';
      break;
    case 'yellow':
      soulName.innerHTML = 'yellow soul';
      soulType.innerHTML = 'type : speed';
      soulDes.innerHTML = 'Right and left, up and down very fast!';
      break;
    case 'purple':
      soulName.innerHTML = 'purple soul';
      soulType.innerHTML = 'type : joker';
      soulDes.innerHTML = 'Spiders have eight legs.';
      break;
  }

  over.style.display = 'block';
}
function overOff(e) {
  over.style.display = 'none';
}
