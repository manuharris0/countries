const {Router} = require('express');

const getCountry = require('../handdlers/countryHandlers/getCountry');
const getCountryById = require('../handdlers/countryHandlers/getCountryById');
const getCountryByName = require('../handdlers/countryHandlers/getCountryByName');

const countryRouter = Router();

countryRouter.get('/', getCountry);
countryRouter.get('/:idpais',getCountryById);
countryRouter.get('/name?="..."', getCountryByName);

module.exports = countryRouter;