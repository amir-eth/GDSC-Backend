const prompt = require("prompt-sync")({sigint:true});
let num1 = prompt("Enter the first number: ");
let num2 = prompt("Enter the second number: ");
    let gcf = 1
for (let i = 1; i <= num1 && i <= num2; i++) {
    if (num1 % i == 0 && num2 % i == 0) {
        gcf = i;
    }
} 
console.log(gcf)