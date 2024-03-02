const mongoose = require('mongoose');
require("dotenv").config();

const connectToDB = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => console.log("DataBase Connection Successful"))
        .catch((error) => {
            console.log(error);
            process.exit(1);
        })
    
}
module.exports = connectToDB;