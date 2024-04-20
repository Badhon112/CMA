import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import ContactsRoutes from "./routes/Contacts";
import "dotenv/config";
import { v2 as cloudinary } from "cloudinary";
import fileUpload from "express-fileupload";
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);
mongoose
  .connect(process.env.DB_STRING as string)
  .then(() => {
    console.log("DataBase running Succefull");
  })
  .catch((err) => {
    console.log("Error while Connection");
  });

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/temp/",
  })
);

app.use("/api/v1", ContactsRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Hello World</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
