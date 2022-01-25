const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 8080;


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname+"/Public"));


// Define path routes here

// Define any path routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname+ "/Public/index.html"));
});


app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
