'use strict';
function eggCode() {
  let code = prompt(
    '01010011 01100001 01111001 00100000 01101000 01100101 01101100 01101100 01101111 00100000 01110100 01101111 00100000 01101101 01100101 00101110 '
  );
  if (code == 'hello' || code == 'Hello') {
    alert("'aptolnapol' is hidden code!");
  } else {
    alert('Sorry..');
  }
}
