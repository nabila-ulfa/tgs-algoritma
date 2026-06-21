let a = 8.3;
let c = "3.2";
let cNum = parseFloat(c);

console.log("8.3 + 3.2 = " + (a + cNum));
console.log("8.3 - 3.2 = " + (a - cNum).toFixed(1));
console.log("8.3 x 3.2 = " + (a * cNum).toFixed(2));
console.log("8.3 / 3.2 = " + (a / cNum));
console.log("8 % 3 = " + (parseInt(a) % parseInt(cNum)));

document.write("8.3 + 3.2 = " + (a + cNum) + "<br>");
document.write("8.3 - 3.2 = " + (a - cNum).toFixed(1) + "<br>");
document.write("8.3 x 3.2 = " + (a * cNum).toFixed(2) + "<br>");
document.write("8.3 / 3.2 = " + (a / cNum) + "<br>");
document.write("8 % 3 = " + (parseInt(a) % parseInt(cNum)) + "<br>");