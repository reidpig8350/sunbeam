const express = require("express");
const app = express();
const ejs = require("ejs")

app.listen(3000, function () {
    console.log("running on port 3000")
});
app.set("view engine", "ejs");  //ejs engine will check "views" folder by default
app.use(express.static("public"));


app.get("/", function (req, res) {
    res.render("index", { 1: 1 })
});