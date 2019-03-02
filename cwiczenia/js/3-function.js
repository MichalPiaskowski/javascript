const multiply = function (liczba1, liczba2) {
    // console.log("w środku funkcji");
    // console.log(liczba1, liczba2);
    let wynik = liczba1 * liczba2;
    return wynik;

};


console.log(multiply(2, 7));
console.log(multiply);


// Zapis strzałkowy

const multiply2 = (liczba1, liczba2) => liczba1 * liczba2;
// const multiply3 = (liczba1, liczba2) => {
//     liczba1 * liczba2
//     return
// };


console.log(multiply2(7, 6))

const multiplyX = liczbaX => liczbaX * 2;

console.log(multiplyX(4));