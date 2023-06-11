const postActivity = (req, res) => {
    // Llama a la función que consulta a la BDD
    // Devuelve la info correspondiente
    res.send('Esta ruta recibirá todos los datos necesarios para crear una actividad turística y relacionarla con los países solicitados. Toda la información debe ser recibida por body. Debe crear la actividad turística en la base de datos, y esta debe estar relacionada con los países indicados (al menos uno).')
};

module.exports = postActivity;