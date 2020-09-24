const userInput = process.argv.splice(2)
const request = require('request');
const fs = require('fs')
const size = fs.statSync(`${userInput[1]}`)


request(`${userInput[0]}`, (error, response, body) => {
  fs.writeFile(`${userInput[1]}`, body, (err) => {
    if (err) throw err;
    console.log(`downloaded and saved ${size.size} bits to ${userInput[1]} `);
  });
});

// fs.writeFile('message.txt', data, (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });