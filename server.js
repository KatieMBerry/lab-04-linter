const express = require('express');
const app = express();
const Stack = require('./Stack');

app.use(express.json());
//web api receives block of code from ? postman and will use a function to remove characters & check if the code is in the right format?

//endpoint
app.post('/api/link')
const stackItem = new Stack
//listen
app.listen(7890, () => {
    console.log('started on 7890');
})