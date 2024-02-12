 const express = require('express');

 const app = express();


 app.get('/', function (req, res) {
    res.sendFile(__dirname + '/' + 'index.html');
});

app.listen(3000,function(){
    console.log("Server is running on port 3000");
});

app.get('/script.js', function (req, res) {
    res.sendFile(__dirname + '/' + 'script.js');
});

app.get('/style.css'  , function(req,res){
    res.sendFile(__dirname + '/' + 'style.css')
})
