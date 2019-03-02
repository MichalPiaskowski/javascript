let uzytkownicy = [{
    imie: 'Kaja',
    nazwisko: 'Nowak'
}, {
    imie: 'Karol',
    nazwisko: 'Kowalski'
}, {
    imie: 'Mariusz',
    nazwisko: 'Witowski'
}, {
    imie: 'Natalia',
    nazwisko: 'Olszewska'
}];

// console.log(uzytkownicy);

// for (let i = 0; i < uzytkownicy.length; i++) {
//     console.log(uzytkownicy[i].imie);
// }

// //while
// let numer = 10;

// while (numer > 0) {
//     console.log(numer);
//     numer--;
// }

// uzytkownicy.forEach((element, index) => {
//     element.kolorOczu = "niebieski";
// });

uzytkownicy.forEach((element, index) => {
    if (element.imie === 'Kaja' || element.imie === 'Natalia') {
        element.kolorOczu = 'niebieski';
    } else if (element.imie === 'Karol') {
        element.kolorOczu = 'piwny';
    } else if (element.imie === 'Mariusz') {
        element.kolorOczu = 'zielony';
    }
});

console.log(uzytkownicy);

let number = 5;

do {
    console.log(number);
} while (number-- > 3);