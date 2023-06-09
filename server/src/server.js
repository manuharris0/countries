const express = require("express");
// Traigo express para guardar en server a servidor levantado
const router = require("./routes");
// Para direccionamiento
const morgan = require("morgan");

const cors = require("cors");

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use(router);

module.exports = server;
console.log(router.use[0]);
