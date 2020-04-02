const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('O PROBLEMA ERA O START');
});

app.listen(process.env.PORT || 3333);