const express = require('express');
const app = express();
const PORT = 3000;
//Cors package
const cors = require('cors');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewears/error.handler')

const router_api = require('./api-routes/index')

//Middlewear para ver información en formato JSON
app.use(express.json());

const whiteList = ['http://localhost:8080/']
const options = {
  origin: (origin, cb) => {
    if(whiteList.includes(origin)){
      cb(null, true);
    }
    cb(new Error('Not allowed to access my API bruh'))
  }
}
app.use(cors(options));

router_api(app);

//Middlewear de errores, llamarlos después de llamar el routing
//Orden adecuado
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
