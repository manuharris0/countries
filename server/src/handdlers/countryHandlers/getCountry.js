const getCountry = (req, res) => {
    // Llama a la función que obtiene los datos de la BDD
    // Responde con la info
    res.send('Obtiene un arreglo de objetos, donde cada objeto es un país con toda su información.')
};

module.exports = getCountry;


