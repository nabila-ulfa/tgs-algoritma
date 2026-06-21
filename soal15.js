const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Masukkan kode 5 digit: ', (kode) => {
    if (kode === "78821") {
        console.log("You are authenticated");
    } else {
        console.log("You have no access");
    }
    readline.close();
});