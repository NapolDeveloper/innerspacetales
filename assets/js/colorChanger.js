let sub = document.getElementById('sub');

function colorChanger() {
  let red = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);

  sub.style.color = 'rgb(' + red + ',' + green + ',' + blue + ')';
  //   clearInterval();
  setTimeout(colorChanger, 1500);
}

window.addEventListener('load', function () {
  colorChanger();
});
