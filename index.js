const express = require('express');
const routing = require('./routing/category'); 
const { sequelize , category } = require('./models');
const app = express();

const Port = process.env.port || 8080;

app.use(express.json());

app.use('/api/v1/category', routing);

app.listen(Port,()=>{
sequelize.authenticate()
.then(()=>{
    console.log('Database is connected');
    console.log('Server started at port'+ " " + Port)
})
.catch((err)=>{
    console.log(err)
})
})

