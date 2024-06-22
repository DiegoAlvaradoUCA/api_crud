const express = require("express");
const router = express.Router();
const User = require("../models/user");

// Crear un usuario
router.post("/users", (req, res) => {
  const { firstName, lastName, phoneNumber, email, password } = req.body;
  const newUser = new User({
    firstName,
    lastName,
    phoneNumber,
    email,
    password
  });

  newUser
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Obtener todos los usuarios
router.get("/users", (req, res) => {
  User.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Obtener un usuario por ID
router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  User.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
