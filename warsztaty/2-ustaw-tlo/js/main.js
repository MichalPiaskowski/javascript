let button = document.querySelector('button');
let par1 = document.querySelector('.par1');
let par2 = document.querySelector('.par2');


// function ustawTlo() {
//     par.forEach(element => {
//         element.style.backgroundColor = 'pink';
//     });
// }



function ustawTlo() {
    par1.style.backgroundColor = 'red';
    par2.style.backgroundColor = 'yellow';
}

button.addEventListener('click', ustawTlo);