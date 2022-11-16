const http = require("http");
const fs=require("fs")


fs.writeFile('index.html',`<h1> Hello World </h1>
<p> This is {Jayeeta}... </p>`,'utf-8' ,(data)=>{
    console.log("file is created")
    console.log(data)
})

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-type" : "text/html"});
    var readstrem=fs.createReadStream("index.html")
    readstrem.pipe(res);
}).listen(5000);
console.log("server is running on port 5000")


// let fs=require("fs")
// let http=require("http")


// fs.watchFile("index.html" ,'<h1> Hello World </h1><p> This is {Your Name}... </p>',"utf8",()=>{
//     console.log("file is created")
// })

// const server=http.createServer((req,res)=>{
//     res.writeHead(200,{"content-type":"text/html"})
//     var readstrem=fs.createReadStream("index.html");
//     readstrem.pipe(res)

// }).listen(5000)