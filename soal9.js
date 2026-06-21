const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Panjang: ', (p) => {
    readline.question('Lebar: ', (l) => {
        let panjang = parseFloat(p);
        let lebar = parseFloat(l);
        console.log("Luas = " + (panjang * lebar));
        console.log("Keliling = " + (2 * (panjang + lebar)));
        readline.close();
    });
});