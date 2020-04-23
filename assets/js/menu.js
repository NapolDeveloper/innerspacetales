window.onload = function () {
  var mobMenu = document.getElementById("mobMenu");
};

var isOpen = false;
function mobBtnClick(e) {
  var currentWindow = window.innerWidth;

  //   모바일, 태블릿 확인
  if (currentWindow >= 768) {
    mobMenu.style.left = "0";
    mobMenu.style.width = "30%";
  } else {
    mobMenu.style.width = "100%";
    isOpen = true;
  }
}

function menuClickCheck(e) {
  var clickedEC = e.target.className;
  if (clickedEC != "fas fa-bars" && clickedEC != "mobWrap") {
    mobMenu.style.width = "0%";
    console.log(clickedEC);
  }
}

document.addEventListener("click", menuClickCheck);
