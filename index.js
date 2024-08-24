const express = require("express");
const { ipRouter } = require("./routes/ip.routes");
const { sekreRouter } = require("./routes/sekre.routes");
const { bidang } = require("./utils/data");
const app = express();
const path = require("path");

const port = 3000;

app.use(express.urlencoded());
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
app.use(
  "/swaljs",
  express.static(__dirname + "/node_modules/sweetalert2/dist/sweetalert2.js")
);
app.use(
  "/swalcss",
  express.static(__dirname + "/node_modules/sweetalert2/dist/sweetalert2.css")
);
app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js"));
app.use(
  "/icons",
  express.static(__dirname + "/node_modules/bootstrap-icons/font/")
);
app.use("/ip", ipRouter);
app.use("/sekretariat", sekreRouter);

app.get("/", (req, res) => {
  res.render("index", { bidang });
});

app.get("/uploads/:filename", (req, res) => {
  const filename = req.params.filename;
  const filepath = path.join(__dirname, "uploads", filename);
  res.sendFile(filepath);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
