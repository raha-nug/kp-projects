const express = require("express");
const { ipRouter } = require("./routes/ip.routes");
const app = express();
const session = require("express-session");
const cookieParser = require("cookie-parser");

const port = 3000;

app.use(express.urlencoded());
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 60 * 60 * 1000, // 1 Hour
    },
  })
);

app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js"));
app.use("/ip", ipRouter);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
