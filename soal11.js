const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('Jumlah siswa X RPL 1: ', (rpl1) => {
    readline.question('Jumlah siswa X RPL 2: ', (rpl2) => {
        readline.question('Jumlah siswa X TKJ 1: ', (tkj1) => {
            readline.question('Jumlah siswa X TKJ 2: ', (tkj2) => {
                let total = parseInt(rpl1) + parseInt(rpl2) + parseInt(tkj1) + parseInt(tkj2);
                console.log("Jumlah total semua siswa: " + total);
                readline.close();
            });
        });
    });
});