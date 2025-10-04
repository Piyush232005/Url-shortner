import express from "express";
import {nanoid} from "nanoid";
import dotenv from "dotenv";
import connectDB from "./src/config/mongo.config.js";

dotenv.config("./.env");


const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to handle CORS


app.post("/api/create", (req, res) => {
  const  {url}  = req.body;
  console.log(url);
  res.send(nanoid(7));
});

app.listen(3000, () => {
  connectDB();
  console.log("Server is running on http://localhost:3000");
});



// get - Redirection 
// post - Creation of short url
