import express from "express";
import AdmissionController from "../controllers/admission.controller";
import schemaValidateMiddleware from "../middlewares/schema.validate.middleware";
import { admissionSchema } from "../types/admission.types";

const admissionRouter = express.Router();
const admissionController = new AdmissionController();

admissionRouter.post("/apply", schemaValidateMiddleware(admissionSchema), admissionController.applyAdmission);
admissionRouter.get("/all", admissionController.getAllAdmission);
admissionRouter.get("/:admissionId", admissionController.getAllAdmissionByAdmissionId);
admissionRouter.put("/update/:admissionId", schemaValidateMiddleware(admissionSchema.partial()), admissionController.updateAdmissionDetailByAdmissionID);
admissionRouter.delete("/delete/:admissionId", admissionController.deleteAdmissionByAdmissionID);

export default admissionRouter;