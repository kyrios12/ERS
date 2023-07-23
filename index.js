const express = require('express'); // requiring express, 
const port = 8000; // assigning port
const app = express(); 

const db = require('./config/mongoose');
const expressLayout = require('express-ejs-layouts');
const passport = require('passport');
const passportLocal = require('./config/passport-local');
const flash = require('connect-flash'); 
const flashMiddleWare = require('./config/flashMiddleware');








app.set('view engine','ejs');

app.set('views','./views');

app.use(expressLayout);
app.use(flash());
app.use(flashMiddleWare.setFlash);
app.use('/' , require('./routes/index'));

app.listen(port, function(err){
    if(err){
        console.log("Error in running the app.");
        return ;
    }
    console.log("Server is up and running at port ", + port);
});