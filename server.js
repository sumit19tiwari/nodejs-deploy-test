var express = require('express');
var app = express();
const port = 8080;
var routes = require('./routes/router');



app.use('/',routes);



app.use((req, res, next) => {
    const error = new Error('The requested page not found');
    error.status = 404;
    res.send(error);
});



app.listen(process.env.PORT || 5000,()=>{
    console.log('Server run successfully');
});


module.exports = app;