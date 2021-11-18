const pad = document.getElementById('pad');
const newbutton = document.getElementById('createpad');
let mode

function blankPad () {
    if (document.querySelectorAll('.boxes')) {
        let oldBoxes = document.querySelectorAll('.boxes');
        oldBoxes.forEach((oldBox) => {
            oldBox.remove()
        })
    }
    mode = document.querySelector('input[type=radio][name=mode]:checked').value;
    console.log(mode)
    let n = document.getElementById('size').value
    if (+n < 16 || +n > 128 || !+n) {
        alert('You must choose a number between 16 and 128!');
        return;
    } else {
    let pix = 640 / n
    console.log(n)
    for (let i = 0; i < n**2; i++) {
        let box = document.createElement('div');
        box.classList.add('boxes');
        /*box.classList.add('whitebox');*/
        box.setAttribute('style', `background-color: rgba(0,0,0,.0); height: ${pix}px; width: ${pix}px`)
        box.addEventListener('mouseover', draw);
        pad.appendChild(box); }
  }
}

function draw (e) {
  if (mode == 'standard') {
    let style = e.target.getAttribute('style');
    let size = style.substring(32)
    e.target.setAttribute('style', `background-color: rgba(0,0,0,.9);${size}`)

  } else {
  let style = e.target.getAttribute('style');
  let current = style.charAt(30)
  let size = style.substring(32)
  if (+current < 9) {current++}
  e.target.setAttribute('style', `background-color: rgba(0,0,0,.${current});${size}`);}
}

newbutton.addEventListener('click', function () {blankPad()});
