const express = require('express');
const app = express();

<<<<<<< HEAD
app.get('/', (req, res) => {
  res.send('Servidor activo y funcionando');
});

app.get('/estado', (req, res) => {
  res.json({
    estado: "Servidor funcionando",
    servicio: "API comunitaria"
  });
});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});

=======
app.use(express.json());

app.post('/registro', (req, res) => {

    const nombre = req.body.nombre;
    const mensaje = req.body.mensaje;

    res.json({
        estado: "Datos recibidos",
        nombre: nombre,
        mensaje: mensaje
    });

});

app.post('/incidencia', (req, res) => {

    const tipo = req.body.tipo;
    const descripcion = req.body.descripcion;

    res.json({
        mensaje: "Incidencia registrada",
        tipo: tipo,
        descripcion: descripcion
    });

});

app.listen(3000, () => {
    console.log('Servidor ejecutándose en puerto 3000');
});
>>>>>>> 613c0866d81c899b4073e2a6f2c1ec35c258dae7
