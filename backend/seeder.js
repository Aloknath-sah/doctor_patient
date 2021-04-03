require("dotenv").config();
const patientData = require("./data/patient");
const doctorData = require("./data/doctor");
const connectDB = require("./config/db");
const Patient = require("./models/Patient");
const Doctor = require("./models/Doctor");

connectDB();

const importData = async () => {
    try {
        await Doctor.deleteMany();
        await Doctor.insertMany(doctorData);

        await Patient.deleteMany();
        await Patient.insertMany (patientData);

        console.log("Data Import Success");

        process.exit();
    } catch (error) {
        console.error("Error with data import", error);
        process.exit(1);
    }
};

const destroyData = async () => {
    try{
        await Patient.deleteMany();
        console.log("data destroyed")
        process.exit();
    }
    catch (err) {
        console.log(`error ${err}`)
        process.exit(1);
    }
}

if(process.argv[2] == "-d"){
    destroyData()
}
else{
    importData()
}
