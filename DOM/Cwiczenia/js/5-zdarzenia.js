let header = document.querySelector('header');

colorChange = () => {
    header.style.color = 'red';
    console.log('click z headera');
}

let parSecond = document.querySelector('#parSecond');

ondDblClick = () => {
    parSecond.style.backgroundColor = 'yellow';
}

parSecond.ondblclick = ondDblClick;

let parFirst = document.querySelector('#parFirst');

addStyle = () => {
    // parFirst.style.backgroundColor = 'blue';
    parFirst.classList.toggle('red');
}

// parFirst.addEventListener('mouseover', addStyle);

// parFirst.removeEventListener('mouseover', addStyle);

parFirst.addEventListener('click', addStyle);

let link = document.querySelector('a[href="http://akademia108.pl"]');

link.onclick = (event) => {
    event.preventDefault();
    console.log(event);
}

let h1 = document.getElementById('main-header');

h1.onclick = (event) => {
    event.stopPropagation();
    console.log('click z h1');
}