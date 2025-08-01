const sequelize = require("./../database/conexion.js");


async function funListaUsuario(req, res){
    // consulta SQL a la base de datos
    const [results] = await sequelize.query("SELECT * FROM usuarios");
    const libros = results;
    return res.json(libros);
}

async function funGuardarUsuario(req, res){

    const { nombre, email, password } = req.body;

    const [results] = await sequelize.query(`INSERT INTO usuarios ( nombre, email, password) values ('${nombre}', '${email}', '${password}')`);
    return res.json({mensaje: "El usuario se registro correctamente"});
}

async function funMostrarUsuario(req, res){

}
async function funModificarUsuario(req, res){

}
async function funEliminarUsuario(req, res){

}

module.exports = {
    funListaUsuario,
    funGuardarUsuario,
    funMostrarUsuario,
    funModificarUsuario,
    funEliminarUsuario
}