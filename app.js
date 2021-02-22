const express = require("express")
const app = express()

app.listen(3000, function (e) {
    console.log("This site is running on port 3000")
})

app.get("/hello", function (req, res) {
    res.sendFile(__dirname + "/index.html");
})