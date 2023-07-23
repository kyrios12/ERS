const express = require('express'); // requiring express, 
const port = 8000; // assigning port
const app = express(); 


















app.listen(port, function(err){
    if(err){
        console.log("Error in running the app.");
        return ;
    }
    console.log("Server is up and running at port ", + port);
});