const express = require("express");
const app = express();

// IMPORTANT: connect frontend folder
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(5000, () => {
    console.log("Server running at http://localhost:5000");
});