const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Masukkan bilangan bulat: ', (angka) => {
    let bil = parseInt(angka);
    if (bil % 7 !== 0) {
        console.log("Anda belum beruntung");
    }
    readline.close();
});