var Tinggi_Badan = [160, 165, 170, 175, 180, 185, 190, 195, 200, 205, 210];
var i;

for (i = 0; i < Tinggi_Badan.length; i++) {
    console.log(Tinggi_Badan[i]);
}

for (let x of Tinggi_Badan) {
    console.log(x);
}

//secara hasil tidak ada yang berbeda tetapi dengan pengulangan biasa dapat lebih dibatasi jumlah data atau nilai outputnya.
//sedangkan dengan for of loop data atau nilai outputnya harus semuanya yang ada di dalam array.
