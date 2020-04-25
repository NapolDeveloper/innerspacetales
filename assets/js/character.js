'use strict';
let over = document.getElementById('overlay');

// overlay
let soulName = document.getElementById('overSoulName');
let soulType = document.getElementById('overSoulType');
let soulDes = document.getElementById('overSoulDes');
let soulGet = document.getElementById('overSoulGet');

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
      soulGet.innerHTML = 'HOW TO GET : Achieve 50000 score';
      break;
    case 'napol':
      soulName.innerHTML = 'napol soul';
      soulType.innerHTML = 'type : control';
      soulDes.innerHTML = "There's a hidden soul in the program!";
      soulGet.innerHTML = 'HOW TO GET : You can find it on the web!';
      break;
    case 'green':
      soulName.innerHTML = 'green soul';
      soulType.innerHTML = 'type : balance';
      soulDes.innerHTML =
        'This gentle soul has a stronger faith than anyone else.';
      soulGet.innerHTML = 'HOW TO GET : 700000 COIN';
      break;
    case 'yellow':
      soulName.innerHTML = 'yellow soul';
      soulType.innerHTML = 'type : speed';
      soulDes.innerHTML = 'Right and left, up and down very fast!';
      soulGet.innerHTML = 'HOW TO GET : Achieve 120000 score';
      break;
    case 'purple':
      soulName.innerHTML = 'purple soul';
      soulType.innerHTML = 'type : joker';
      soulDes.innerHTML = 'Spiders have eight legs.';
      soulGet.innerHTML = 'HOW TO GET : Achieve 2000000 COIN';
      break;
  }

  over.style.display = 'block';
}
function overOff(e) {
  over.style.display = 'none';
}
