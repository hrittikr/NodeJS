const fs = require("fs")
fs.writeFileSync("notes.txt","Hello Node.js!")

const data = fs.readFileSync("notes.txt")
console.log('read data:' + data)

fs.appendFileSync("notes.txt","Hello Node.js! I am learning Node.js")

fs.rmSync("notes.txt")
