// Configuración del server
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

const morgan = require("morgan");
require("./models"); //solicitarlo SIEMPRE! evita errores a futuro.
const routes = require("./routes");
const { sequelize } = require("./models");

const PORT = process.env.PORT || 3001;

// Enviar credenciales del back al front
app.use(cors({ origin: "http://localhost:3000", credentials: true })); 

app.use(express.json());
app.use(cookieParser());
app.use(morgan("tiny"));

app.use("/api", routes); //todas las rutas empiezan con api

// middleware redireccionamiento
app.use("/", (req, res, next) => res.redirect("/api")); // me aseguro que si o si vaya para /api si entraste en otra ruta

// middleware de error
app.use(function (err, req, res, next) {
  console.error(err, err.stack);
  res.status(500).send(err);
});

async function main() {
  await sequelize.sync({force:true}).then(() => {
    app.listen(PORT, () => {
      console.log("Servidor iniciado en el puerto", PORT);
    });
  });
}
main();
