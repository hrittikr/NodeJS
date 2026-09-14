import http from 'http';
//creating a basic server
const server= http.createServer((req,res)=>{
    console.log("Hello World");
    const order ={
        orderID:10987,
        destination:"Ghaziabad",
        source: "panchsheel",
        username:"Hrittik"
    }
    // res.statusCode=200;
    // res.setHeader("Content-Type","application/json");
    res.writeHead(200,{
        "Content-Type":"application/json",
        "custom-header":"Hello Bachhoooo"
    })
    res.end(JSON.stringify(order));
});
server.listen(3000,"127.0.0.1",()=>{
    console.log("Server is running on port 3000");
    
}
);


const http= require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req,res)=>{
    fs.readFile(path.join(__dirname,'public','index.html'),(err,content)=>{
        if (err){
            res.statusCode = 500;
            res.end("Error loading the page");
            return;
        }
        res.statusCode = 200;
        res.setHeader("Content-Type","text/html");
        res.end(content);
    });