const madal = document.getElementById('madal');
const openbtn = document.getElementById('contact');
const closebtn = document.getElementById('closebtn');
const madalblur = document.getElementById('madal-blur');

function madalIsVisibly() {
    return madal.style.display === 'block';
}

function show() {
    madal.style.display = 'block';
    madalblur.style.display = 'block';
    madal.classList.add('show');
    madalblur.classList.add('show');
}

function hide() {
    madal.style.display = 'none';
    madalblur.style.display = 'none';
    madal.classList.remove('show');
    madal.classList.remove('show');
}

openbtn.addEventListener('click', show);
closebtn.addEventListener('click', hide);

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && madalIsVisibly()) {
        hide();
    }
})