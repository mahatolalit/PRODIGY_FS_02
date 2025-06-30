const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8080;
require('./models/db');

app.get('/', (req, res) => {
    res.send('EMS server running')
})
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
