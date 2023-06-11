const express = require("express");
// Traigo express para guardar en server a servidor levantado
const router = require("./routes");
// Para direccionamiento
const morgan = require("morgan");
// Middleware
const cors = require("cors");

const server = express();
// A partir de ahora server es mi app (servidor)   

// MIDDLEWARES:
server.use(morgan("dev"));
// Me muestra la info en la consola
server.use(express.json());
server.use(cors());
// El punto use va a decir que TODAS las request deben pasar por las funciones que estan en su parámetro

server.use(router);
// Una vez pasó por todos los middlewares, que se vaya hacia el enrutador 



module.exports = server;
// Exporto el servidor para poder ponerlo a correr en el index.js
