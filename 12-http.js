const http = require('http');
const { log } = require('util');
// req = a client is requesting from the browser
// res = is what we are sending back


const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('Welcome to my home page')    
    }
    if(req.url === '/about'){
        res.end('Info about us')  
    } 
    else{
        res.end(
            `<h1>Error!</h1>
            <p>You have to go back</p>
            <a href="/">Home<a/>`
        )
    }
})

server.listen(5000)