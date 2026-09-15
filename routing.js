import http from 'http';
import fs from 'fs';
const homepage=fs.readFileSync("home.html", "utf-8");
const server=http.createServer((req,res)=>{
    console.log("hello from server");
    //const data={
    //   "greet":"hello"
    //};
    console.log(req.url)
    // res.end("hello from server");
    if(req.url==="/")
    {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(homepage.toString().replace("{{%CONTENT%}}", "hello from home page"));
        return;
    }
    else if(req.url==="/about")
    {
        res.end("about page");
        return;
    }
    else if(req.url==="/contact")
    {
        res.end("about contact");
        return;
    }
    res.statusCode = 404;
    res.end("Page not found");
})
server.listen(3000,"127.0.0.1" ,() => {
    console.log("server is running on port 3000");

})