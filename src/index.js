const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const placeRoute = require("./routes/place");
const userRoute = require("./routes/user");

const app = express();
const port = process.env.PORT || 9000;

// Middleware para parsear el cuerpo de las peticiones como JSON
app.use(express.json());

// Rutas
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

// Montar las rutas
app.use("/api/places", placeRoute);
app.use("/api/users", userRoute);

// Conexión a MongoDB
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error("Error connecting to MongoDB Atlas:", error));

// Iniciar el servidor
app.listen(port, () => console.log("Server listening on", port));
