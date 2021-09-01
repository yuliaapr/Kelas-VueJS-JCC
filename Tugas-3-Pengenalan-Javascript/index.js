
// soal 1
var pertama = "saya sangat senang hari ini";
var newpertama = "saya senang "
var kedua = "belajar javascript itu keren";
var newkedua = "belajar JAVASCRIPT"
console.log(newpertama.concat(newkedua)); // saya senang belajar javascript

// soal 2
var number1 = Number("10");
var number2 = Number("2");
var number3 = Number("4");
var number4 = Number("6");
var jawabanSatu = (number1+number2)*(number4-number3)
console.log(jawabanSatu)

// soal 3
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4, 14); 
var kataKetiga = kalimat.substring(15, 18); 
var kataKeempat = kalimat.substring(19, 24);
var kataKelima = kalimat.substring(25, 31); 

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);