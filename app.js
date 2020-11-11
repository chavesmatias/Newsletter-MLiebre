const express = require ('express');
const app = express();

app.get ('/', function (req, res) {
    res.sendFile (__dirname + '/Public/Views/Index.html')
})
app.get('*', function(req, res) {
    res.sendFile(__dirname + '/Public/' + req.url)
});

app.listen(3200, function () {
    console.log ('Para ingresar al sitio ingresar al LocalHost:3200')});


    
