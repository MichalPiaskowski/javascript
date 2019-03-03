let footer = document.createElement('footer');
let footerText = document.createTextNode('Stopka strony');

footer.appendChild(footerText);
footer.setAttribute('class', 'custom-footer') // <footer class = 'custom-footer'>
document.querySelector('section').insertAdjacentElement('afterend', footer);
// console.log(footerText);

// let parSecond = document.querySelector('#parSecond');

// document.body.firstElementChild.removeChild(parSecond);


let removeLink = document.querySelector('#parFirst a:last-child') //do zrobienia później

// removeLink.removeAttribute('class');