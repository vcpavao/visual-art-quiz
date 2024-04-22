const express = require("express");
const app = express();
const port = 3004;

const cors = require("cors");

const db = require("./models");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const paintingsRouter = require("./routes/Paintings");
app.use("/paintings", paintingsRouter);

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
});
