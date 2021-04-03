const Patient = require("../models/Patient")

const getPatient = (req, res) => {
    res.status(200).json(res.pagination)
}

const addPatient = (req, res) => {

    if (!req.body.patient_name || !req.body.gender || !req.body.doctor_id || !req.body.age || !req.body.doctor_name) {
        return res.status(404).json({ message: "Please Fill all the fields" });
    }

    const { patient_name, gender,doctor_id,age, doctor_name, avatar,medicines } = req.body;
    const newPatient = new Patient({patient_name, gender,doctor_id,doctor_name,age,avatar,medicines})

    newPatient
        .save()
        .then(() => res.json("Patient Added Successfully"))
        .catch((err) => res.status(404).json("Error" + err))
}

const searchPatient=(req,res)=>{
    var regex=new RegExp(req.params.patient_name,"i")
    Patient.find({patient_name:regex})
    .then((result)=>{res.status(200).json(result)})
}

const deletePatient = (req, res) => {
    Patient.findByIdAndDelete(req.params.id)
        .then(() => res.json("Patient Deleted Successfully"))
        .catch((err) => res.status(400).json("Error: " + err));
}


module.exports = {getPatient,addPatient, searchPatient, deletePatient}