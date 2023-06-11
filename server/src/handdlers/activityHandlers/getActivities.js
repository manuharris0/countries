const getActivities = (req, res) => {
    // Llama a la función que consulta a la BDD
    // Devuelve la informacion correcta
    res.send("Obtiene un arreglo de objetos, donde cada objeto es una actividad turística.")
};

module.exports = getActivities;