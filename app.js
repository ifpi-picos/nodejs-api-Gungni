const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.send('Ta funcionando!!');
})

app.listen(3000, () => console.log('App Online'));
//npm install --save express