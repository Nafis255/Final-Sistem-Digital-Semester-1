const nyala = 'background: linear-gradient(135deg, transparent 10px, #ffd60a 10px),linear-gradient(-135deg, transparent 10px, #ffd60a 10px),linear-gradient(45deg, transparent 10px, #ffd60a 10px),linear-gradient(-45deg, transparent 10px, #ffd60a 10px);background-size: 50% 50%;background-position: top left, top right, bottom left, bottom right;background-repeat: no-repeat;';
const mati = 'background: linear-gradient(135deg, transparent 10px, #000 10px),linear-gradient(-135deg, transparent 10px, #000 10px),linear-gradient(45deg, transparent 10px, #000 10px),linear-gradient(-45deg, transparent 10px, #000 10px);background-size: 50% 50%;background-position: top left, top right, bottom left, bottom right;background-repeat: no-repeat;';
const OP = document.querySelectorAll('.output span')
const tabel = document.querySelectorAll('table tbody td')

function output1() {

  tabel[0].innerHTML = "0"
  tabel[1].innerHTML = "0"
  tabel[2].innerHTML = "0"
  tabel[3].innerHTML = "1"

  // seven segment
  tabel[4].innerHTML = "0"
  tabel[5].innerHTML = "1"
  tabel[6].innerHTML = "1"
  tabel[7].innerHTML = "0"
  tabel[8].innerHTML = "0"
  tabel[9].innerHTML = "0"
  tabel[10].innerHTML = "0"

  OP[0].setAttribute('style', mati); 
  OP[1].setAttribute('style', nyala); 
  OP[2].setAttribute('style', nyala); 
  OP[3].setAttribute('style', mati); 
  OP[4].setAttribute('style', mati); 
  OP[5].setAttribute('style', mati); 
  OP[6].setAttribute('style', mati);
}

function output2() {

  tabel[0].innerHTML = "0"
  tabel[1].innerHTML = "0"
  tabel[2].innerHTML = "1"
  tabel[3].innerHTML = "0"

  // seven segment
  tabel[4].innerHTML = "1"
  tabel[5].innerHTML = "1"
  tabel[6].innerHTML = "0"
  tabel[7].innerHTML = "1"
  tabel[8].innerHTML = "1"
  tabel[9].innerHTML = "0"
  tabel[10].innerHTML = "1"

  OP[0].setAttribute('style', nyala); 
  OP[1].setAttribute('style', nyala); 
  OP[2].setAttribute('style', mati); 
  OP[3].setAttribute('style', nyala); 
  OP[4].setAttribute('style', nyala); 
  OP[5].setAttribute('style', mati); 
  OP[6].setAttribute('style', nyala);
}

function output3() {

  tabel[0].innerHTML = "0"
  tabel[1].innerHTML = "0"
  tabel[2].innerHTML = "1"
  tabel[3].innerHTML = "1"

  // seven segment
  tabel[4].innerHTML = "1"
  tabel[5].innerHTML = "1"
  tabel[6].innerHTML = "1"
  tabel[7].innerHTML = "1"
  tabel[8].innerHTML = "0"
  tabel[9].innerHTML = "0"
  tabel[10].innerHTML = "1"

  OP[0].setAttribute('style', nyala); 
  OP[1].setAttribute('style', nyala); 
  OP[2].setAttribute('style', nyala); 
  OP[3].setAttribute('style', nyala); 
  OP[4].setAttribute('style', mati); 
  OP[5].setAttribute('style', mati); 
  OP[6].setAttribute('style', nyala);
}

function output4() {

  tabel[0].innerHTML = "0"
  tabel[1].innerHTML = "1"
  tabel[2].innerHTML = "0"
  tabel[3].innerHTML = "0"

  // seven segment
  tabel[4].innerHTML = "0"
  tabel[5].innerHTML = "1"
  tabel[6].innerHTML = "1"
  tabel[7].innerHTML = "0"
  tabel[8].innerHTML = "0"
  tabel[9].innerHTML = "1"
  tabel[10].innerHTML = "1"

  OP[0].setAttribute('style', mati); 
  OP[1].setAttribute('style', nyala); 
  OP[2].setAttribute('style', nyala); 
  OP[3].setAttribute('style', mati); 
  OP[4].setAttribute('style', mati); 
  OP[5].setAttribute('style', nyala); 
  OP[6].setAttribute('style', nyala);
}

function output5() {

  tabel[0].innerHTML = "0"
  tabel[1].innerHTML = "1"
  tabel[2].innerHTML = "0"
  tabel[3].innerHTML = "1"

  // seven segment
  tabel[4].innerHTML = "1"
  tabel[5].innerHTML = "0"
  tabel[6].innerHTML = "1"
  tabel[7].innerHTML = "1"
  tabel[8].innerHTML = "0"
  tabel[9].innerHTML = "1"
  tabel[10].innerHTML = "1"

  OP[0].setAttribute('style', nyala); 
  OP[1].setAttribute('style', mati); 
  OP[2].setAttribute('style', nyala); 
  OP[3].setAttribute('style', nyala); 
  OP[4].setAttribute('style', mati); 
  OP[5].setAttribute('style', nyala); 
  OP[6].setAttribute('style', nyala);
}

function output6() {

  tabel[0].innerHTML = "0"
  tabel[1].innerHTML = "1"
  tabel[2].innerHTML = "1"
  tabel[3].innerHTML = "0"

  // seven segment
  tabel[4].innerHTML = "1"
  tabel[5].innerHTML = "0"
  tabel[6].innerHTML = "1"
  tabel[7].innerHTML = "1"
  tabel[8].innerHTML = "1"
  tabel[9].innerHTML = "1"
  tabel[10].innerHTML = "1"

  OP[0].setAttribute('style', nyala); 
  OP[1].setAttribute('style', mati); 
  OP[2].setAttribute('style', nyala); 
  OP[3].setAttribute('style', nyala); 
  OP[4].setAttribute('style', nyala); 
  OP[5].setAttribute('style', nyala); 
  OP[6].setAttribute('style', nyala);
}

function output7() {

  tabel[0].innerHTML = "0"
  tabel[1].innerHTML = "1"
  tabel[2].innerHTML = "1"
  tabel[3].innerHTML = "1"

  // seven segment
  tabel[4].innerHTML = "1"
  tabel[5].innerHTML = "1"
  tabel[6].innerHTML = "1"
  tabel[7].innerHTML = "0"
  tabel[8].innerHTML = "0"
  tabel[9].innerHTML = "0"
  tabel[10].innerHTML = "0"

  OP[0].setAttribute('style', nyala); 
  OP[1].setAttribute('style', nyala); 
  OP[2].setAttribute('style', nyala); 
  OP[3].setAttribute('style', mati); 
  OP[4].setAttribute('style', mati); 
  OP[5].setAttribute('style', mati); 
  OP[6].setAttribute('style', mati);
}

function output8() {

  tabel[0].innerHTML = "1"
  tabel[1].innerHTML = "0"
  tabel[2].innerHTML = "0"
  tabel[3].innerHTML = "0"

  // seven segment
  tabel[4].innerHTML = "1"
  tabel[5].innerHTML = "1"
  tabel[6].innerHTML = "1"
  tabel[7].innerHTML = "1"
  tabel[8].innerHTML = "1"
  tabel[9].innerHTML = "1"
  tabel[10].innerHTML = "1"

  OP[0].setAttribute('style', nyala); 
  OP[1].setAttribute('style', nyala); 
  OP[2].setAttribute('style', nyala); 
  OP[3].setAttribute('style', nyala); 
  OP[4].setAttribute('style', nyala); 
  OP[5].setAttribute('style', nyala); 
  OP[6].setAttribute('style', nyala);
}

function output9(order) {

  tabel[0].innerHTML = "1"
  tabel[1].innerHTML = "0"
  tabel[2].innerHTML = "0"
  tabel[3].innerHTML = "1"

  // seven segment
  tabel[4].innerHTML = "1"
  tabel[5].innerHTML = "1"
  tabel[6].innerHTML = "1"
  tabel[7].innerHTML = "1"
  tabel[8].innerHTML = "0"
  tabel[9].innerHTML = "1"
  tabel[10].innerHTML = "1"

  OP[0].setAttribute('style', nyala); 
  OP[1].setAttribute('style', nyala); 
  OP[2].setAttribute('style', nyala); 
  OP[3].setAttribute('style', nyala); 
  OP[4].setAttribute('style', mati); 
  OP[5].setAttribute('style', nyala); 
  OP[6].setAttribute('style', nyala);
}

function output0(order) {

  tabel[0].innerHTML = "0"
  tabel[1].innerHTML = "0"
  tabel[2].innerHTML = "0"
  tabel[3].innerHTML = "0"

  // seven segment
  tabel[4].innerHTML = "1"
  tabel[5].innerHTML = "1"
  tabel[6].innerHTML = "1"
  tabel[7].innerHTML = "1"
  tabel[8].innerHTML = "1"
  tabel[9].innerHTML = "1"
  tabel[10].innerHTML = "0"

  OP[0].setAttribute('style', nyala); 
  OP[1].setAttribute('style', nyala); 
  OP[2].setAttribute('style', nyala); 
  OP[3].setAttribute('style', nyala); 
  OP[4].setAttribute('style', nyala); 
  OP[5].setAttribute('style', nyala); 
  OP[6].setAttribute('style', mati);
}