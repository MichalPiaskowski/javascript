let header = document.querySelector('header');

colorChange = () => {
    header.style.color = 'red';
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