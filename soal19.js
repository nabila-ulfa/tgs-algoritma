const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Nilai x: ', (x) => {
    readline.question('Nilai y: ', (y) => {
        readline.question('Nilai z: ', (z) => {
            let nx = parseInt(x);
            let ny = parseInt(y);
            let nz = parseInt(z);

            let terbesar = Math.max(nx, ny, nz);
            let terkecil = Math.min(nx, ny, nz);

            console.log("Terbesar: " + terbesar);
            console.log("Terkecil: " + terkecil);
            readline.close();
        });
    });
});