const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Masukkan satu huruf: ', (input) => {
    let huruf = input.toLowerCase();
    
    if (huruf.length !== 1 || !/[a-z]/.test(huruf)) {
        console.log("Bukan berupa huruf");
    } else if (huruf === 'a' || huruf === 'e' || huruf === 'i' || huruf === 'o' || huruf === 'u') {
        console.log("Vokal");
    } else {
        console.log("Konsonan");
    }
    readline.close();
});