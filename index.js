const express = require("express");
const { permohonanRouter } = require("./routes/permohonan");
const app = express();



app.use(express.static("public"));

app.use('/permohonan',permohonanRouter)


app.get("/", (req, res) => {
  res.send({
    message: "Welcome to kp projects app",
  });
});



const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
