const express = require('express');
const path = require('path');
app = express();
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/v2', express.static(path.join(__dirname, 'v2')))
const port = process.env.PORT || 8080;
app.listen(port);