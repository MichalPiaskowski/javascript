let typLiczba = 10 + 10;

// typLiczba = 10 + 10 + '10';
// console.log(typLiczba)

// typLiczba2 = `10 + 10 = ${10 + 10}`

// console.log(typLiczba2);


// OBIEKT

let przykladowyObiekt = {
    klucz: "wartość"
};
let przykladowyObiekt2 = {
    id: 3,
    imie: "Kacper"
};
// console.log(przykladowyObiekt2.id, przykladowyObiekt2.imie);

// Tablica

let tablica = ['Michał', 'Inna', 'Ola ma kota', 'Martyna', 'Arek'];
// tablica[1] = "Ola ma czarnego kota";
// tablica[1] = {
//     imie: "Ola",
//     ma: "czarnego kota"
// };

// tablica.reverse();
tablica.unshift('Ooooops'); //dodajemy element na początku []
tablica.shift(); // usuwa element na początku []

tablica.push('Ooooops'); //dodajemy element na końcu []
tablica.pop(); //usuwa element na końcu []

// console.log(tablica.slice(1, 4)); //wycina elementy od indeksu do indeksu
// tablica.splice(1, 3);

tablica.splice(3, 1, 'Daria');

// tablica.sort();  //Sortuje elementy alafabetycznie, nie działa prz sortowaniu liczb
let tablicaLiczba = [1, 76, 38, -12, 0];

tablicaLiczba = tablicaLiczba.sort((liczba1, liczba2) => {
    return liczba1 - liczba2
});

// console.log(tablicaLiczba);
// console.log(tablica.join('-')); łączy wszystkie elementy tablicy w stringa
// console.log(tablica.length);

console.log(tablica);