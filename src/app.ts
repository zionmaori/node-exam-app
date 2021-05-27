const express = require('express')
const app = express()
const port = 3000
const url = require('url');
const http = require('http');

let message : string = "hello";



app.get('/', function(req: any,  res:any) {
  var name = req.query.name
  if(name){
    res.send("Hello " + " "  + name);
  }
  else{
    res.send("Hello World");
  }
  
});

app.listen(port, () => {
  console.log('App listening at http://localhost:${port}')
})