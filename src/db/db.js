const mongoose = require('mongoose');

function connectDB(){
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log('Database connected');
    })
    .catch((err)=>{
        console.log('Database connection error: ', err);
    })
    
};

module.exports = connectDB;
