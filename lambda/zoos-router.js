const express = require("express");

const Zoos = require("./zoos-model");

const router = express.Router();

router.get("/", (req, res) => {
  Zoos.find()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json({ message: "something happened" });
    });
});

router.get("/:id", (req, res) => {
  Zoos.findById(req.params.id)
    .then(data => {
      console.log(data);
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "could not find item" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "something happened" });
    });
});

router.post("/", (req, res) => {
  Zoos.insert(req.body)
    .then(data => {
      res.status(201).json({ message: "item successfully created" });
    })
    .catch(err => {
      res.status(500).json({ message: "something happened" });
    });
});

router.delete("/:id", (req, res) => {
  Zoos.remove(req.params.id)
    .then(data => {
      res.status(200).json({ message: "item successfully deleted" });
    })
    .catch(err => {
      res.status(500).json({ message: "something happened" });
    });
});

router.put("/:id", (req, res) => {
  Zoos.update(req.params.id, req.body)
    .then(data => {
      res.status(200).json({ message: "item successfully updated" });
    })
    .catch(err => {
      res.status(500).json({ message: "something happened" });
    });
});

module.exports = router;
