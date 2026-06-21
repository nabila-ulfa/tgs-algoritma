const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Total harga barang: ', (harga) => {
    let totalHarga = parseFloat(harga);
    let diskon = 0;
    
    if (totalHarga >= 200000) {
        diskon = totalHarga * 0.075;
    }
    
    let totalBayar = totalHarga - diskon;
    console.log("Tampilkan hasil dari diskon: " + diskon);
    console.log("Total barang yang harus dibayar: " + totalBayar);
    readline.close();
});