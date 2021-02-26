const express = require("express");
const app = express();
const ejs = require("ejs")

const port = 2000
app.listen(port, function () {
    console.log("http://localhost:" + port + "/");
});
app.set("view engine", "ejs");  //ejs engine will check "views" folder by default
app.use(express.static("public"));


//--------------------GET--------------------//
app.get("/", function (req, res) {
    res.render("index", {})
});

app.get("/about", function (req, res) {
    res.render("about", {})
});

app.get("/contact", function (req, res) {
    res.render("contact", {})
});

app.get("/portfolio", function (req, res) {
    res.render("portfolio", {})
});

app.get("/portfolio/:articles", function (req, res) {
    res.redirect("/")
    console.log(req.params.articles)
})
//--------------------GET--------------------//