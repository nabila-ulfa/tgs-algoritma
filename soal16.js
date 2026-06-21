const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Masukkan juara berupa angka 1/2/3: ', (juara) => {
    if (juara === "1") {
        console.log("Selamat Anda Juara Utama");
    } else if (juara === "2") {
        console.log("Selamat Anda Juara Runner Up");
    } else if (juara === "3") {
        console.log("Selamat Anda Juara Ketiga");
    } else {
        console.log("Inputan Anda Salah!");
    }
    readline.close();
});