let element;

// element = document.getElementById('parFirst'); // po id
element = document.getElementsByClassName('link')[document.getElementsByClassName('link').length - 1];
element = document.getElementsByTagName('p')[0]
element = document.querySelector('#sectionFirst #parSecond .par2').innerHTML;
element = document.querySelectorAll('#sectionFirst a')

element = document.getElementById('main-header').parentElement;
element = document.getElementById('main-header').parentElement.children;
element = document.querySelector('header').lastElementChild;


console.log(element);