const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Harga makanan: ', (harga) => {
    let hargaMakanan = parseFloat(harga);
    let pajak = hargaMakanan * 0.10;
    let fee = hargaMakanan * 0.05;
    let hargaBayar = hargaMakanan + pajak + fee;

    console.log("Harga makanan : " + hargaMakanan);
    console.log("Pajak : " + pajak);
    console.log("Fee : " + fee);
    console.log("Harga bayar : " + hargaBayar);
    readline.close();
});