const express = require('express');
const app = express();
app.use(express.json());

const connectDB = require('./config/dbConfig');

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT , () =>{
    console.log(`Server running on port ${PORT}`);
});