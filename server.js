const express = require('express');

const app = express();

const path = require('path');


app.use(express.static(path.join(__dirname,"./client/build")));



app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,"./client/build/index.html"))
})




app.listen(8000,()=>{
    console.log('Server is Running...')
})
