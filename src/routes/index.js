const express = require("express");
const libroController = require("./../controllers/libro.controller.js")
const usuarioController = require("./../controllers/usuario.controller.js")

const Route = express.Router();

// Api CRUD libros (endpoint)
Route.get("/libros", libroController.funListaLibros);
Route.post("/libros", libroController.funGuardarLibro);
Route.get("/libros/:id", libroController.funMostrarLibro);
Route.put("/libros/:id", libroController.funModificarLibro);
Route.delete("/libros/:id", libroController.funEliminarLibro);

Route.get("/usuario", usuarioController.funListaUsuario);
Route.post("/usuario", usuarioController.funGuardarUsuario);
Route.get("/usuario/:id", usuarioController.funMostrarUsuario);
Route.put("/usuario/:id", usuarioController.funModificarUsuario);
Route.delete("/usuario/:id", usuarioController.funEliminarUsuario);

module.exports = Route;