const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Masukkan nama: ', (inputan) => {
    console.log("Apakabar " + inputan + "? Wish you luck!");
    readline.close();
});