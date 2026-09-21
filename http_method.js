// import http from 'http'

// //import by common js
// // const http=require('http');

// const server=http.createServer((req,res)=>{
//     console.log("hello from server")
//     res.statusCode=200;
//     res.end("hello from server")
// })

//     server.listen(3000,"127.0.0.1",()=>{
//         console.log("server is running on port 3000")
//     })



    // sir wala

    import http from 'http'
    import fs from 'fs'

    //reading the json file
    const data =fs.readFileSync("config.json","utf-8")
    const server=http.createServer((req,res)=>{
    // http.createServer((req,res)=>{
        if(req.url==="/")
            res.end("Home page")
    
    else if(req.url==="/config") {
        res.end(JSON.stringify(data))
    }
    else{
        res.end("Page not found")
    }
})

server.listen(3000,"127.0.0.1",()=>{
    console.log("server is running on port 3000")
})