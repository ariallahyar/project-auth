import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import userRoutes from "./routes/userRoutes.js";

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/project-mongo";
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise;

const port = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use("/", userRoutes);

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
