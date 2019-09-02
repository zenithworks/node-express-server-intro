const express = require('express');
const app = express();



    app.get('/users/:id',function(req,res){
        console.log(req.params.id)
        })

