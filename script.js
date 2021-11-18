const pad = document.getElementById('pad');
const newbutton = document.getElementById('createpad');

function blankPad () {
    if (document.querySelectorAll('.boxes')) {
        let oldBoxes = document.querySelectorAll('.boxes');
        oldBoxes.forEach((oldBox) => {
            oldBox.remove()
        })
    }
    let n = document.getElementById('size').value
    if (+n < 16 || +n > 64 || !+n) {
        alert('You must choose a number between 16 and 64!');
        return;
    } else {
    let pix = 640 / n
    console.log(n)
    for (let i = 0; i < n**2; i++) {
        let box = document.createElement('div');
        box.classList.add('boxes');
        box.classList.add('whitebox');
        box.setAttribute('style', `height: ${pix}px; width: ${pix}px`)

        box.addEventListener('mouseover', draw);
        pad.appendChild(box); }
  }
}

function draw (e) {
  e.target.classList.add('blackbox');
}

newbutton.addEventListener('click', function () {blankPad()});
