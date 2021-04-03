const Doctor= require("../models/Doctor");

const getDoctor=(req,res)=>{
    Doctor.find()
    .then((doctor)=>res.json(doctor))
    .catch((err)=>res.status(404).json("Error"))
}

const registerDoctor = async (req, res) => {
    const { password, doctor_name } = req.body;
    const nameExists = await Doctor.findOne({
        doctor_name,
    });

    if (nameExists) {
        res.status(400).json({
        error: true,
        message: "Doctor already exists",
        });
        return;
    }

    const doctor = new Doctor({
        doctor_name,
        password,
    });

    doctor
    .save()
    .then(() =>
        res.status(200).json({
            message: "Registered Successfully",
        })
    )
    .catch((err) =>
        res.status(400).json({
            message: "Could not Register",
        })
    );
};

const loginDoctor = async (req, res) => {
    try {
        let { doctor_name, password } = req.body;
        
        const doctor = await Doctor.findOne({
            doctor_name,
        });
        
        if (!doctor) {
            res.status(400).json({
                error: true,
                message: "doctor does not exist",
            });
            return;
        }else{
            res.status(200).json({
                message:"doctor is Logged in"
            })
        }
        
    } catch (err) {
        console.log(err.message);
        res.status(400).json({
            error: true,
            success: false,
            message: "Somthing went wrong",
        });
    }
};

module.exports ={ registerDoctor,loginDoctor,getDoctor};