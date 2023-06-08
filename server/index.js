const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const PORT = 3001;

conn.sync({ force: true }).then(() => {
  // force:true, elimina y actualiza las tablas cada vez que hay cambios, luego pasar a alter:true
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
// Sincronzo la base de datos, y ahí se escucha al servidor 3001
