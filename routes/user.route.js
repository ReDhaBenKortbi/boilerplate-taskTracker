import express from "express"
import createUser from "../controllers/createUser.js";
import createExercise from "../controllers/createExercise.js";
import loadLogs from "../controllers/loadLogs.js";
import { getUsers } from "../controllers/getUsers.js";

export const apiRouter = express.Router();

apiRouter.get("/hello-world", (req, res) => res.send("Hello world"))

//user
apiRouter.get("/users", getUsers)
apiRouter.post("/users", createUser)

//create exercise
apiRouter.post("/users/:id/exercises", createExercise)

//get users log
apiRouter.get("/users/:_id/logs",loadLogs)
