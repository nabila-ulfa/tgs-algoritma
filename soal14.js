const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Masukkan angka sembarang: ', (angka) => {
    if (parseInt(angka) > 100) {
        console.log("Nilai kamu sempurna!");
    }
    readline.close();
});