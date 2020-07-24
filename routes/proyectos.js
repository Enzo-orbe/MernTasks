const express = require("express");
const router = express.Router();
const proyectoControler = require("../controllers/proyectoController");
const auth = require("../middleware/auth");
const { check } = require("express-validator");

//crea proyectos
// api/proyectos
router.post(
  "/",
  auth,
  [check("nombre", "El nombre del proyecto es obligatorio").not().isEmpty()],
  proyectoControler.crearProyecto
);

//Obtener todos los proyectos
router.get("/", auth, proyectoControler.obtenerProyectos);

//Actualizar el proyecto via ID
router.put(
  "/:id",
  auth,
  [check("nombre", "El nombre del proyecto es obligatorio").not().isEmpty()],
  proyectoControler.actualizarProyecto
);

//Eliminar un proyecto
router.delete("/:id", auth, proyectoControler.eliminarProyecto);

module.exports = router;
