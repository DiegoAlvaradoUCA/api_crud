const express = require("express");
const router = express.Router();
const Place = require("../models/place");

// Create a place
router.post("/", (req, res) => {
  const { destinationName, location, package, suggestedPrice, category, guide, mainImage, description } = req.body;
  const newPlace = new Place({
    destinationName,
    location,
    package,
    suggestedPrice,
    category,
    guide,
    mainImage,
    description
  });

  newPlace
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Get all places
router.get("/", (req, res) => {
  Place.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Get a place by ID
router.get("/:id", (req, res) => {
  const { id } = req.params;
  Place.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Delete a place
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Place.findByIdAndDelete(id)
    .then(() => res.json({ message: "Place deleted successfully" }))
    .catch((error) => res.json({ message: error }));
});

// Update a place
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { destinationName, location, package, suggestedPrice, category, guide, mainImage, description } = req.body;
  Place.findByIdAndUpdate(id, {
    destinationName,
    location,
    package,
    suggestedPrice,
    category,
    guide,
    mainImage,
    description
  }, { new: true })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;

