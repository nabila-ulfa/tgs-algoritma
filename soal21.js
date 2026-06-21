const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Masukkan nilai siswa (0-100): ', (inputNilai) => {
    let nilai = parseInt(inputNilai);
    let grade = "";

    if (nilai >= 90 && nilai <= 100) {
        grade = "A";
    } else if (nilai >= 80 && nilai < 90) {
        grade = "B";
    } else if (nilai >= 70 && nilai < 80) {
        grade = "C";
    } else if (nilai >= 60 && nilai < 70) {
        grade = "D";
    } else if (nilai < 60) {
        grade = "E";
    }

    console.log("Grade: " + grade);
    readline.close();
});
