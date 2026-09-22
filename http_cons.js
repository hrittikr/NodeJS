const http = require('http')

const server = http.createServer((req, res) => {
    if(req.method === 'GET' && req.url === '/') { // get request is used to read the data
        res.end("GET Request")
    }
    else if (req.method === 'POST' && req.url === '/') {//post request is used to create the data
        res.end("POST Request")
    }
    else if (req.method === 'PATCH' && req.url === '/users') { //patch request is used to update the data
        res.end("PATCH Request")
    }

})
server.listen(3000, (req,res) => {
    console.log("Server is running on port: 3000")
})