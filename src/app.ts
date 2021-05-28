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
    console.log("p.s. you are awesome" + name )
  }
  if(name === ""){
    res.send("Hello Mister Ghost" )
    console.log("Whats your name buddy?!")
  }
  else{
    res.send("Hello World");
    console.log("sometimes the worlds need human - no man query was passed")
  }
  
});

app.listen(port, () => {
  console.log('App listening at http://localhost:${port}')
})