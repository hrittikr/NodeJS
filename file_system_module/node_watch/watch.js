const fs = require('fs');

const watcher = fs.watch('hello.txt', (eventType, filename) => {
    if (filename) {
        console.log("Event:", eventType)
        console.log("Filename:", filename)
    }
})
setTimeout(() => {
    watcher.close()
    console.log("Watcher closed")
},10000)