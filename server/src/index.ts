import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config";
import routes from "./routes/index";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // parsing any json requests and puts the parsed data in req.body
app.use(morgan("dev"));
app.use(cors({ origin: process.env.FRONT_URL, credentials: true })); // allowes to accept non-simple http requests from FRONT_URL
app.use(cookieParser());

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
