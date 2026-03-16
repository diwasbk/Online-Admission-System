import express, { Application } from "express";
import admissionRouter from "./routes/admission.routes";
import authRouter from "./routes/auth.route";

const app: Application = express();
app.use(express.json());

app.use("/api/pdfs", express.static("src/pdfs"));
app.use("/api/admission", admissionRouter);
app.use("/api/auth", authRouter);

export default app;