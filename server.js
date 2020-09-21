const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', ejs);

app.get('/', (request, response) =>{
    let today = new Date();

    if(today.getDay() === 6 || today.getDay() ===0) {
        day = 'Weekend';

    }else {
        day = 'Worday'
    }

    response.render('date.ejs', {kindOfDay: day});
});

app.listen(3000,() =>{
    console.log('Server is running on Port 3000');
});