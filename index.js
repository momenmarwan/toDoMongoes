const express = require('express');
const {connect} = require('mongoose');
const{join} = require('path')
const app = express();
const router = require('./router');
const url = 'mongodb://localhost:27017/momendb';



app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(join(__dirname,'public')))
app.use(router);


connect(url , {useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => {
  app.listen(3000, () => {
    console.log(`the server run on port http:localhost:3000 and connection to database have been successfully`);
  });  
})
.catch((error) => {
  console.log(error)
});



