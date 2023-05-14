let input = (prompt("Please enter a word"))
let inputReverse = ""

for (let i = input.length - 1; i >= 0; i--) {
    inputReverse = inputReverse + input[i];
}

if (input == inputReverse) {
    console.log(`${input} is a palindrome`);
}

else {
    console.log(`${input} is not a palindrome`);
}

console.log("Done");