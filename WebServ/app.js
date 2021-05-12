var express = require('express');
var app = express();
app.use(express.json());
app.get("/", async function (req, res) {
    let r = {'dato': 1,'valor': 'Nio'};
    res.json(r);
});

app.get("/ruta1", async function (req, res) {
    let r = {'dato': 1,'valor': 'Nio'};
    res.json(r);
});

app.get("/ruta2", async function (req, res) {
    let r = {};
    res.json(r);
});

app.get("/ruta3", async function (req, res) {
    let r = {};
    res.json(r);
});

app.get("/ruta4", async function (req, res) {
    let r = {};
    res.json(r);
});

app.get("/ruta5/subruta/todos", async function (req, res) {
    let r = {};
    res.json(r);
});

app.get("/ruta6/crear", async function (req, res) {
    let r = {};
    res.json(r);
});

app.post("/ruta7/echo", async function (req, res) {
    let r = req.body;
    res.json(r);
});

app.post("/ruta8/add",async function(req , res){
    let r = {texto: req.body.texto, nombre: req.body.nombre};
    res.json(r);
});

app.listen(3000, function() {
    console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});