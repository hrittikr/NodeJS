const fs= require("fs");

const watcher = fs.watchFile("hello.txt",{interval: 500}, (curr, prev) => {
    console.log("curr:", curr.birthtime.toISOString())
    console.log("prev:", prev.birthtime.toISOString())
});