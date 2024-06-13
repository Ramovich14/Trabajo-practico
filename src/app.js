const express = require('express');
const carrerasRoute = require('./routes/carreras.routes')
const materiasRoute = require('./routes/materias.routes')

const PORT = process.env.PORT ?? 3000;
const app = express();

app.use(express.json())
app.use(carrerasRoute)
app.use(materiasRoute)

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});


