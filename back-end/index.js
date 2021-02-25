require('dotenv').config();
const cors = require('cors');

const express = require('express');

const routes = require('./routes');

const app = express();

app.use(cors());

app.use(routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening PORT: ${PORT}`));
