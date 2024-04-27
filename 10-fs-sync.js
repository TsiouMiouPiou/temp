const {readFileSync, writeFileSync} = require('fs')
console.log("Start");
const first = readFileSync('./content/subfolder/test.txt', 'utf8');
const second = readFileSync('./content/subfolder/second.txt', 'utf8');

console.log(first);
console.log(second);

writeFileSync('./content/third.txt', 
`This is the third one with the addition of two others: ${first + second}`, 
{flag:'a'})

console.log("Done with this task");
console.log("Starting with the next one");
 