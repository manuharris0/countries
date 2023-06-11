const axios = require("axios");
// me traigo axios de la libreria para las peticiones asíncornas
const server = require("./src/server");
// Acá guardo el servidor levantado, que es express ejecutado
const { conn } = require('./src/db.js');
// Traigo la intancia de sequelize, que es la conección a la database
const PORT = 3001;
// Guardo el puerto en el 3001
const URL = 'http://localhost:5000/countries';

const Country = require('./src/models/Country');

conn.sync({ force: true }).then(() => {
  // force:true, elimina y actualiza las tablas cada vez que hay cambios, luego pasar a alter:true
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
// Sincronzo la base de datos, y ahí se escucha al servidor 3001

let countriesData = [];  
// Creo un array donde guardaré todos los países

getData = async () => {
  try {
      await axios.get(URL).then(
          (response) => {
            response.data.map((country) => {
              countriesData.push({
                id: country.cca3,
                name: country.name.common,
                flag: country.flags.png,
                continent: country.continents,
                capital: country.capital,
                subregion: country.subre,
                area: country.area,
                poblation: country.population
              })
            })
                    
          }
      )
  } catch (error) {
      console.log(error.message);
  }
};
getData();
// Esta funcion hace una petición de info a la api y guara en un array todos los datos que queremos

// const saveCountries = async () => {
//   const countries = await Country.bulkCreate(countriesData);
// };
// saveCountries();
// // Esta función guarda en nuestra base de datos la info filtrada desde la api
