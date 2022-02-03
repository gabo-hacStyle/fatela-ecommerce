const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
//Cors package
const cors = require('cors');
const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewears/error.handler')

console.log(process.env.DB_USER)
const router_api = require('./api-routes/index')

//Middlewear para ver información en formato JSON
app.use(express.json());
app.use(cors());
      
var whitelist = ['http://localhost:80', 'http://localhost:8000'];

//For now, I wont use cors to restrict anyone. 
//var corsOptionsDelegate = function (req, callback) {
//  var corsOptions;
//  if (whitelist.indexOf(req.header('Origin')) !== -1) {
 //   corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
 // } else {
 //   corsOptions = { origin: false } // disable CORS for this request
 // }
 // callback(null, corsOptions) // callback expects two parameters: error and options
//}


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

module.exports = corsOptionsDelegate;

