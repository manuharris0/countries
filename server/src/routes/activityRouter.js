const {Router} = require('express');

const activityRouter = Router();

activityRouter.get('/', (req, res) => {
    res.status(200).send("Obtiene un arreglo de objetos, donde cada objeto es una actividad turística.")
});

activityRouter.post('/', (req, res) => {
    res.status(200).send('Esta ruta recibirá todos los datos necesarios para crear una actividad turística y relacionarla con los países solicitados. Toda la información debe ser recibida por body. Debe crear la actividad turística en la base de datos, y esta debe estar relacionada con los países indicados (al menos uno).')
});

module.exports = activityRouter;