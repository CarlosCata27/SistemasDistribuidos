const mongoose = require("./mongo-init");
const cors = require('cors');
const express = require("express");
var app = express();
app.use(cors());

const Schema = mongoose.Schema;
const ANY = new Schema(
  {
    texto: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { strict: false, versionKey: false }
);
const saludoModel = mongoose.model("saludos", ANY);

app.get("/", function (req, res) {
  res.send("Estás en el root");
});

app.get("/saludo", async function (req, res) {
  let r = await saludoModel
    .find({})
    .limit(1)
    .sort({ createdAt: "desc" })
    .exec();
  res.json(r);
});

app.get("/saludo2", async function (req, res) {
  let r = await saludoModel
    .find({})
    .limit(2)
    .sort({ createdAt: "desc" })
    .exec();
  res.json(r);
});

app.get("/saludos", async function (req, res) {
  let r = await saludoModel
  .find({})
  .sort({ createdAt: "desc" })
  .exec();
  res.json(r);
});

app.get("/saludos/eliminar/todos", async function (req, res) {
  saludoModel.remove({}, function (err) {
    res.send("Hecho");
  });
});

app.get("/saludo/crear", async function (req, res) {
  let r = await saludoModel.create({ texto: req.query.texto });
  res.json(r.toObject());
});

app.listen(3000, function () {
  console.log("Servidor listo en el puerto 3000");
});


