//requerimientos para los controlladores
const personajeController = require('../controller/tbl_personaje');
const entrenadorController = require('../controller/tbl_entrenador');
const zonasController = require('../controller/tbl_zona_ejercicio');
const apiname = '/api/v1';

//rutas para los endpoints
module.exports = (app) => {
    app.get(`${apiname}/personajes`, personajeController.list);
    app.get(`${apiname}/personajes/:id`, personajeController.find);
    app.post(`${apiname}/personajes`, personajeController.create);
    app.put(`${apiname}/personajes/:id`, personajeController.update);
    app.delete(`${apiname}/personajes/:id`, personajeController.delete);
    app.get(`${apiname}/entrenador`, entrenadorController.list);
    app.get(`${apiname}/entrenador/:id`, entrenadorController.find);
    app.post(`${apiname}/entrenador`, entrenadorController.create);
    app.put(`${apiname}/entrenador/:id`, entrenadorController.update);
    app.delete(`${apiname}/entrenador/:id`, entrenadorController.delete);
    app.get(`${apiname}/zona-ejercicio`, zonasController.list);
    app.get(`${apiname}/zona-ejercicio/:id`, zonasController.find);
    app.post(`${apiname}/zona-ejercicio`, zonasController.create);
    app.put(`${apiname}/zona-ejercicio/:id`, zonasController.update);
    app.delete(`${apiname}/zona-ejercicio/:id`, zonasController.delete);
}
