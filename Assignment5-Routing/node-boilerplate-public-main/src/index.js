var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
    console.log(req.url.split("?"));
    console.log(req.url);

    if(req.url == "/welcome"){
        res.writeHead(200, {"Content-type" : " text/plain"});
        res.end("Welcome to Dominos!")
    }else if(req.url == "/contact"){
        res.writeHead(200, {"Content-type" : "application/json"});
        res.write(JSON.stringify(
            {  
                phone: '18602100000', 
                email: 'guestcaredominos@jublfood.com' 
               }
               
        ));
        res.end();
    }else{
        res.writeHead(404, {
            "Content-type": "text/plain",
            "Keep-Alive": 10
        });
        res.write("PAGE NOT FOUND");
        res.end();
    }
}
httpServer.listen(8001, () => console.log("Server is up at 8001"));
module.exports = httpServer;