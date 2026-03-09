import express from "express";
import AdmissionController from "../controllers/admission.controller";
import schemaValidateMiddleware from "../middlewares/schema.validate.middleware";
import { admissionSchema } from "../types/admission.types";

const admissionRouter = express.Router();
const admissionController = new AdmissionController();

admissionRouter.post("/apply", schemaValidateMiddleware(admissionSchema), admissionController.applyAdmission);

export default admissionRouter;