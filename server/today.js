
const http = require("http")

const server = http.createServer((req, res) => {
    if (req.method === "GET" && res.url === "/home") {
        res.write("<h1>Hello World</h1>")
        res.end("hello lodu")
    }

})
console.log("hii")
server.listen(8080);