import express from 'express'
const app = express()
import cors from 'cors'
import dotenv from "dotenv"
import { apiRouter } from './routes/user.route.js';
import mongoose from 'mongoose';
dotenv.config();
import path from "path"
// Connect to DB first
mongoose.connect(process.env.MONGO_URI);
mongoose.connection.on("connected", () => console.log("Connection established!"));
mongoose.connection.on("disconnected", () => console.log("Connection lost!"));
mongoose.connection.on("error", (err) => console.log("Connection errored! ", err));

// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors());
app.use(express.static('public'));
app.use("/api", apiRouter);

//index page
app.get('/', (req, res) => {
  res.sendFile(path.join(import.meta.dirname, '/views/index.html'))
});


const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
