const express = require('express');
const app = express();
const PORT = 3000;

const router_api = require('./api-routes/index')

router_api(app);

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
