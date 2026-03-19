import express, { Application } from "express";
import admissionRouter from "./routes/admission.routes";
import authRouter from "./routes/auth.route";
import { CLIENT_URL } from "./config/config";
import cors from "cors";

const app: Application = express();
app.use(express.json());
app.use(cors({
    origin: CLIENT_URL,
    credentials: true
}));

app.use("/api/pdfs", express.static("src/pdfs"));
app.use("/api/admission", admissionRouter);
app.use("/api/auth", authRouter);

export default app;