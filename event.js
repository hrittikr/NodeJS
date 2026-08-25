import fs from 'fs';


setTimeout(() => {
        console.log('setTimeout callback executed');
    }, 1000);


fs.readFile("intro.txt","utf8", (err, data) => {
    console.log("File read completed");
})
setInterval(() => {
    console.log("setInterval after 5ms");
},500);

setImmediate(() => {
    console.log("Set Immediate");
})






    