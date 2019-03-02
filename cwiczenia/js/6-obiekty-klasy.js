class Osoba {
    constructor(name, surname, fatality) {
        this.baseName = name;
        this.baseSurname = surname;
        this.fatality = fatality
    }

    przedstawOsobe() {
        return `Mam na imię ${this.baseName} ${this.baseSurname}, moje fatality to ${this.fatality}`
    }
}

let maks = new Osoba('Maks', 'Kowalski', 'Spine Crush');
// maks.kolorOczu = 'niebieskie';
maks.kolorOczu = 'niebieskie';
maks.jakiJestKolorOczu = () => {
    return maks.kolorOczu;
}

console.log(maks.jakiJestKolorOczu());

console.log(maks.przedstawOsobe());

console.log(maks);