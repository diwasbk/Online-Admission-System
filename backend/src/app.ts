import express, { Application } from "express";
import admissionRouter from "./routes/admission.routes";

const app: Application = express();
app.use(express.json());

app.use("/api/admission", admissionRouter);

export default app;