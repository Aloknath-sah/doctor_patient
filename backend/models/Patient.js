const mongoose = require("mongoose");
const Schema = mongoose.Schema
const patientSchema = new Schema({
    patient_name: {
        type: String,
        required: true,
    },
    doctor_id:{
        type:String,
        required: true
    },
    doctor_name:{
        type:String,
        required: true
    },
    age: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: true,
    },
    medicines:{
        type: Array,
        required: true
    }
});


module.exports = mongoose.model("Patient", patientSchema)