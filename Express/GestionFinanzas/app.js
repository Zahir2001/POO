const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

let transacciones = [];

app.get('/', (req, res) => {
  res.render('index', { transacciones });
});

app.post('/agregarTransaccion', (req, res) => {
  const { descripcion, monto } = req.body;
  const transaccion = { id: Date.now(), descripcion, monto: parseFloat(monto) };
  transacciones.push(transaccion);
  res.redirect('/');
});

app.post('/eliminarTransaccion/:id', (req, res) => {
  const { id } = req.params;
  transacciones = transacciones.filter(transaccion => transaccion.id !== parseInt(id));
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`El servidor está corriendo en el puerto ${PORT}`);
});
