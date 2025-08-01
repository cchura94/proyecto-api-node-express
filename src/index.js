const express = require("express");
const sequelize = require("./database/conexion");
const Rutas = require("./routes/index");
// app
const app = express();

// json
app.use(express.json());

// variables
const PORT=3000;


// configurar rutas
app.get("/", async function(req, res){
    console.log(req.query.pais);
    const [results, metadata] = await sequelize.query("SELECT * from libros");
    return res.json(results);
    // return res.json({mensaje: "Hola Mundo desde Node con Express saludos a: "+req.query.pais}) ;
});

// habilitando Rutas
app.use("/api", Rutas);

// levantar el servidor de node
app.listen(PORT, function(){
    console.log("Servidor iniciado en: http://127.0.0.1:"+PORT)
});