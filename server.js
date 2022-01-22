const express = require('express');
const path = require('path');
require('dotenv').config();


const app = express();
const router = require('./router/Router');

app.set('view engine', 'ejs');
//middleware...

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', router);






const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server is running on port:${PORT}`);
})