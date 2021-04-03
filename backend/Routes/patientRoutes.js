const express = require("express")
const {getPatient, addPatient, searchPatient, deletePatient} = require("../controller/patientController")
const paginationResults = require("../middleware/Pagination")
const Patient = require("../models/Patient")

const router = express.Router()
router.get("/patient", paginationResults(Patient),getPatient)

router.post("/patient", addPatient)

router.delete("/:id", deletePatient)

router.get("/patientsearch/:patient_name", searchPatient)

module.exports = router