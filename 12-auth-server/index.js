const express = require("express");
const cors = require("cors");
require("dotenv").config();

// CREAR EL SERVIDOR/APLICACION DE EXPRESS
const app = express();

// DIRECTORIO PUBLICO
app.use(express.static("public"));

// CORS
app.use(cors());

// LECTURA Y PARSEO DEL BODY
app.use(express.json());

// RUTAS
app.use("/api/auth", require("./routes/auth"));

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puesto ${process.env.PORT}`);
});
