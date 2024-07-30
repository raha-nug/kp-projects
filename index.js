const express = require("express");
const { ipRouter } = require("./routes/ip.routes");
const app = express();

const port = 3000;

app.use(express.urlencoded());
app.use(express.static("public"));
app.set("view engine", "ejs");


app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js"));
app.use(
  "/icons",
  express.static(__dirname + "/node_modules/bootstrap-icons/font/")
);
app.use("/ip", ipRouter);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
