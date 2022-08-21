const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const db = process.env.DB_URL;

exports.databaseConnection = () =>{
    mongoose.connect(db, { useNewUrlParser: true })
.then(()=> {console.log(`Connected to Database successfully👊`)})
.catch(error => {console.log(`Could'nt connect to Database ${error}`)});
}