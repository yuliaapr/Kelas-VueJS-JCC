// soal 1
var daftarHewan = ["2. Komodo", "5. Buaya", "3. Cicak", "4. Ular", "1. Tokek"]
;
var daftarHewanSorted = daftarHewan.sort();
for(i=0;i<5;i++) {
    console.log(daftarHewanSorted[i]);
}

// soal 2
function Introduce() {
    console.log("Nama saya " + name + ", umur saya " + age + ", alamat saya di " + address + ", dan saya punya hobby yaitu " + hobby);
}

var name = "Yulia Apriani";
var age = 21;
var address = "Jl. Raya Gunung Salak Endah, Kabupaten Bogor";
var hobby = "bermain game";

Introduce();

// soal 3
function hitung_uruf_vokal(str) {
    const hitung = str.match(/[AEIOUaeiou]/gi).length;

    return hitung;
}
const string = "Yulia Apriani";
const result = hitung_uruf_vokal(string);
console.log(result);

// soal 4
function hitung() {
// tidak paham    
}