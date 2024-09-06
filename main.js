// const prompt = require('prompt-sync')();
// var a = 6;
// var b=8;
// var ans = a+b;
// console.log(ans);
// const numbers = [5, 12, 8, 130, 44];

// const filteredNumbers = numbers.filter(number => number > 10);

// console.log(filteredNumbers);
// // Output: [12, 130, 44]

// const userInput = prompt("Please enter your name:");
// console.log(userInput);

// const name = prompt('Please enter your name: ');
// console.log(`Hello, ${name}!`);

const fs = require('fs');
const os = require('os');



// Text to append
const textToAppend = 'This is the new text to append.\n';

// File to append to
const filePath = 'example.txt';

fs.appendFile(filePath, textToAppend, (err) => {
    if (err) {
        console.error('Error appending text to file:', err);
    } else {
        console.log('Text appended successfully.');
    }
});
const userInfo = os.userInfo();
console.log(userInfo);
console.log('Username:', userInfo.username);
console.log('Username:', userInfo.uid);
console.log('Username:', userInfo.gid);
console.log('Username:', userInfo.homedir);
console.log(os);




