// let submit = document.querySelector('input[value="Submit"]');
let form = document.querySelector('form');


// function stopSubmit(event) {
//     event.preventDefault()
//     console.log()
// }


form.onsubmit = event => {
    event.preventDefault();
    let fname = document.querySelector('input[name="fname"]');
    let lname = document.querySelector('input[name="lname"]');

    console.log('stop');
    console.log(fname.value, lname.value);
}