const toggle = document.getElementById('toggle');
const closeIcon = document.getElementById('close');
const menu = document.getElementById('nav');

toggle.addEventListener('click', function() {
    menu.classList.add('animate');
});

closeIcon.addEventListener('click', function() {
    menu.classList.remove('animate');
})

const links = Array.from(document.getElementsByClassName('link'));
links.forEach(element => {
    element.addEventListener('click', function() {
        menu.classList.remove('animate');
    })
});


