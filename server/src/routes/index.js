const { Router } = require("express");
// El enrutador para decirle a las request a donde deben ir

const countryRouter = require('./countryRouter');
// Acá me traigo a la funcion que se ejecuta al ir al /country para pasarla por parámetro al .use
const activityRouter = require('./activityRouter')
// Acá me traigo a la funcion que se ejecuta al ir al /activity para pasarla por parámetro al .use

const router = Router();
// Creo el enrutador principal, que será el responsable de definir las rutas

router.use('/country', countryRouter);
// Cuando se haga una petición a /x se dispara al xRouter.js, y ese archivo le dirá que hacer
router.use('/activity', activityRouter);
module.exports = router;
// Exporto el enrutador

