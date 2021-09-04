// soal 1 : Function penghasil hari esok
function next_date(tanggal_param, bulan_param, tahun_param) {
    console.log(tanggal + " " + bulan + " " + tahun);
}
var tanggal = 1;
var bulan = 4;
var tahun = 2021;

bulan = "April";

tanggal +=1;

next_date();
// soal 2 : Function penghitung jumlah kata
function jumlah_kata(str) {
    return str.split(" ").length;
}

var kalimat_1 = "Halo nama saya Yulia Apriani";
var kalimat_2 = "Saya Yulia";

console.log(jumlah_kata(kalimat_1));
console.log(jumlah_kata(kalimat_2));
