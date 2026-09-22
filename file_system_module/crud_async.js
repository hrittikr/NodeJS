// callback based method
const fs = require("fs")

//create a file
fs.writeFile("notes.txt","Hello Node.js!",(err)=>{
    console.log("Data Successfully written in the file notes.txt")
})

//read a file
fs.readFile("notes.txt","utf8",(err,data)=>{
    if(err){
        console.log(err)
        return
    }
    console.log("Data read from the file notes.txt is: " + data)
})

//read a file as buffer
fs.readFile("notes.txt",(err,data)=>{
    if(err){
        console.log(err)
        return
    }
    console.log("Buffer data: ")
    console.log(data)
})

fs.appendFile("notes.txt","Hello Node.js! I am learning Node.js",(err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log("Data Successfully appended in the file notes.txt")
});

//deleting a file
fs.rm("notes.txt",(err)=>{
    if(err){
        console.log(err)
        return
    }   
    console.log("Data Successfully deleted from the file notes.txt")
});

