let form = document.querySelector('form');
let name = document.querySelector("input[type='text']");
let mail = document.querySelector("input#email");
let zgoda1 = document.querySelector("input#zgoda-marketingowa-1");
let zgoda2 = document.querySelector("input#zgoda-marketingowa-2");
let zgodaWszystko = document.querySelector("input#wszystkie-zgody");
let wiadomosc = document.querySelector("#wiadomosc");
// console.log(form, name, mail, zgoda1, zgoda2, zgodaWszystko);

function checkBoxes() {
    zgoda1.checked = this.checked;
    zgoda2.checked = this.checked;
    zgoda1.disabled = this.checked;
    zgoda2.disabled = this.checked;
}
zgodaWszystko.onchange = checkBoxes;

function formCheck(event) {
    wiadomosc.innerHTML = '';

    if (name.value.trim() == "") {
        alertName = document.createElement('li');
        alertName.innerText = 'Podaj swoje imię i Nazwisko!';
        wiadomosc.appendChild(alertName);
        // console.log(alertName);
        event.preventDefault();
    }

    if (mail.value.trim() == "") {
        alertMail = document.createElement('li');
        alertMail.innerText = 'Podaj swój adres emial';
        wiadomosc.appendChild(alertMail);
        // console.log(alertMail);
        event.preventDefault();

    }

    if (!zgoda1.checked) {
        alertCheckbox = document.createElement('li');
        alertCheckbox.innerText = 'Zaznacz zgodę pierwszą';
        wiadomosc.appendChild(alertCheckbox);
        // console.log('zaznacz zgodę');
        event.preventDefault();
    }
}
form.addEventListener('submit', formCheck)