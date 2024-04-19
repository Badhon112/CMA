import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import ContactsRoutes from "./routes/Contacts";
import "dotenv/config";
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

app.use("/api/v1", ContactsRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Hello World</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
