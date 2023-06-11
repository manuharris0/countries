require("dotenv").config();
// Configuración para las credenciales

const { Sequelize } = require("sequelize");
// Acá requiero a la clase de Sequelize 

const countryModel = require('./models/Country');
const activityModel = require('./models/Activity');
// Traigo los modelos


const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME
} = process.env;
// Traigo las credenciales 'encriptadas', estas no se subirán gracias al .gitignore

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
  logging: false, // para que no muestre toda la info en la consola al actualizar 
  native: false, 
});
// Instancio la conección a la base de datos, a partir de ahora 'sequelize'

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });


modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

activityModel(sequelize);
countryModel(sequelize);
// Executo los modelos pasandole a la intancia de sequelize como argumento, para que le llegue en la definición de los modelos 

const { Country, Activity } = sequelize.models;
// Desestructuro los modelos para poder utilizarlos

Country.belongsToMany(Activity, {through: 'country_activity'});
Activity.belongsToMany(Country, {through: 'country_activity'});
// Relaciones N:N de los modelos a trvez de una tabla intermedia

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};