import jwt from "jsonwebtoken";
import Patient from "../models/patient.model.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req?.cookies?.jwt;

    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorized - No Token Provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ error: "Unauthorized - Invalid Token" });
    }

    const patient = await Patient.findById(decoded.patientId).select(
      "-password"
    );

    if (!patient) {
      return res.status(404).json({ error: "Patient not found" });
    }

    req.patient = patient;

    next();
  } catch (err) {
    console.log("Error in protectRoute Middleware: ", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default protectRoute;
