const pad = document.getElementById('pad');
const n = 16;
const newbutton = document.getElementById('createpad');

function blankPad (n) {
  for (let i = 0; i < n**2; i++) {
    let box = document.createElement('div');
    box.classList.add('boxes');
    box.classList.add('whitebox');
    pad.appendChild(box);   
  }
  const boxes = document.querySelectorAll('.boxes');
  boxes.forEach((box) => {
    box.addEventListener('click',draw());
  })
}

function draw (e) {
  e.classList.add('blackbox');
}

newbutton.addEventListener('click', function () {blankPad(n)});
