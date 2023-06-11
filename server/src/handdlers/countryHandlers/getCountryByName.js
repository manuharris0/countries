const getCountryByName = (req, res) => {
    // Llama a la función que obtiene datos de la BDD,
    // Responde con la info correspondiente
    res.send('Esta ruta debe obtener todos aquellos países que coinciden con el nombre recibido por query. (No es necesario que sea una coincidencia exacta). Debe poder buscarlo independientemente de mayúsculas o minúsculas. Si no existe el país, debe mostrar un mensaje adecuado.')
};

module.exports = getCountryByName;