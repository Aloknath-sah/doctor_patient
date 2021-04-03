const mongoose = require("mongoose");
require("dotenv").config()

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb://localhost/doctor", {
            useCreateIndex: true,
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });

        console.log(`Mongoose connected ${conn.connection.host}`);
    } catch (err) {
        console.log(`Error : ${err.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
