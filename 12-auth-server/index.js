const express = require("express");
const cors = require("cors");
const path = require("path");

const { dbConnection } = require("./db/config");
require("dotenv").config();

// CREAR EL SERVIDOR/APLICACION DE EXPRESS
const app = express();

// BASE DE DATOS
dbConnection();

// DIRECTORIO PUBLICO
app.use(express.static("public"));

// CORS
app.use(cors());

// LECTURA Y PARSEO DEL BODY
app.use(express.json());

// RUTAS
app.use("/api/auth", require("./routes/auth"));

// MANEJAR DEMAS RUTAS
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/index.html'))
})

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puesto ${process.env.PORT}`);
});
