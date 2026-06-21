const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Judul Buku: ', (judul) => {
    readline.question('Penerbit: ', (penerbit) => {
        readline.question('Jumlah Buku: ', (jumlah) => {
            readline.question('Tanggal Pembelian: ', (tanggal) => {
                console.log("\nJudul Buku : " + judul);
                console.log("Penerbit : " + penerbit);
                console.log("Jumlah Buku : " + jumlah);
                console.log("Tanggal Pembelian : " + tanggal);
                readline.close();
            });
        });
    });
});