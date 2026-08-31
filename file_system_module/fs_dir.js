const fs = require("fs")

fs.mkdir("myfolder1/myfolder2/myfolder3",{ recursive: true }, (err) => {
    if (err && err.code !== 'EEXIST') {
        console.log(err)
        return
    }
    console.log("Directory ready");
    
    // Create the first file
    fs.writeFile("hello.txt", "Hello from hello.txt", (err) => {
        if (err) {
            console.log(err)
            return
        }
        console.log("hello.txt created successfully");
        
        // Create the second file
        fs.writeFile("myfolder/intro.txt", "Hello from intro.txt", (err) => {
            if (err) {
                console.log(err)
                return
            }
            console.log("intro.txt created successfully");
            
            // Now read the file
            fs.readFile("myfolder/intro.txt", "utf8", (err, files) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log("Data read from the file intro.txt is: " + files)
            })
        })
    })
})