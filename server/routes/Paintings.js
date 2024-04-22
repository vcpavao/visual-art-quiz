const express = require("express");
const router = express.Router();
const Paintings = require("../models").paintings;
const Sequelize = require("sequelize");

router.get("/", async (req, res) => {
  const randomPainting = await Paintings.findOne({
    order: [Sequelize.fn("RAND")],
  });

  res.json(randomPainting);
});

router.post("/", async (req, res) => {
  const newPainting = req.body;
  console.log(req.body);
  console.log(Paintings);
  await Paintings.create(newPainting);
  res.json(newPainting);
});

module.exports = router;
