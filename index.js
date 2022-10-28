const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
//Cors package
const cors = require('cors');
const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewears/error.handler')

const router_api = require('./api-routes/index');

//Middlewear para ver información en formato JSON
app.use(express.json());

//Using cors
app.use(
  cors({
    origin: "http://localhost:8000",
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
  })
)

app.get('/', (req, res) => {
  res.write('Hola este es mi primer servidor')
})

router_api(app);

//Middlewear de errores, llamarlos después de llamar el routing
//Orden adecuado
app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
