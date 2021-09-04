// soal 1
var nilai;
var index;

nilai = 88

if (nilai >= 85) {
    index = 'A'
} else if (nilai >= 75 && nilai < 85) {
    index = 'B'
} else if (nilai >= 65 && nilai < 75) {
    index = 'C'
} else if (nilai >= 55 && nilai < 65) {
    index = 'D'
} else if (nilai < 55) {
    index = 'E'
}

// soal 2
var tanggal = 28;
var bulan = 4;
var tahun = 2000;
switch(bulan) {
    case 1:   { console.log('28 Januari 2000'); break; }
    case 2:   { console.log('28 Februari 2000'); break; }
    case 3:   { console.log('28 Maret 2000'); break; }
    case 4:   { console.log('28 April 2000'); break; }}

// soal 3

var n = 7
for(i=1; i<=n; i++) {
    var pagar = ''
    for(j = 1; j<=i; j++) {
        pagar = pagar + '#'
    }
    console.log(pagar)
}

// soal 4
var str4;
var m;

m= 3

for(var i=1; i<=m; i++) {
    var hasilMod3 = i % 3

    if(hasilMod3 == 1) {
        str4 = i + ' - I love programming'
    } else if(hasilMod3 == 2){
        str4 = i + ' - I love javascript'
    } else if(hasilMod3 == 3) {
        str4 = i + ' - I love VueJS'
    }
    
    console.log(str4)
}
    
