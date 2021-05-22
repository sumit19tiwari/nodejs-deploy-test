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



app.listen(port,()=>{
    console.log(`Express app is listening at http://localhost:${port}`);
});


module.exports = app;