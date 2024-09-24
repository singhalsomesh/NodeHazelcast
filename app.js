const express = require('express');
const { connect } = require('./connection/hazelcastClient');
const studentRouter = require('./Routes/studentRoutes')
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});


const app = express();

app.use(express.json());
try{
    if(process.env.HAZELCAST_CLIENT_ENABLE === 'true'){
        connect();
    }
}catch(err){
    console.log('Error occur while connecting with hazelcast server')
}

app.use('/api/student',studentRouter);

const port = process.env.PORT || 5698;

app.listen(port , () => {
    console.log('server has started on port '+port);
})


