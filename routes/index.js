const express = require('express');
const router = express.Router();
const Mensaje = require('../models/mensaje.model');

/* GET home page. */

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/login', (req, res) => {
  req.session.nombre = req.body.nombre;
  res.redirect('/chat');
});

router.get('/chat', async function (req, res) {
  console.log(req.session.nombre);

  const mensajes = await Mensaje.find()
    .sort({ createdAt: -1 })
    .limit(5)
    .exec();
  
  res.render("chat", {
    mensajes: mensajes.reverse(),
    nombre: req.session.nombre || "Anonimo"
  });
});

module.exports = router;
