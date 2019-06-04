const express = require("express");

const Zoos = require("./zoos-model");

const router = express.Router();

router.get("/", (req, res) => {
  Zoos.find()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json({message: "something happened"});
    });
});

module.exports = router
