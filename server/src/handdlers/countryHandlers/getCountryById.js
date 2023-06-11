const getCountryById = (req, res) => {
    // Llama a la función que obtiene datos de la BDD
    // Responde con los datos
    res.status(200).send('Esta ruta obtiene el detalle de un país específico. Es decir que devuelve un objeto con la información pedida en el detalle de un país. El país es recibido por parámetro (ID de tres letras del país). Tiene que incluir los datos de las actividades turísticas asociadas a este país.')
};

module.exports = getCountryById;