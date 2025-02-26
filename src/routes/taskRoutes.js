import express from "express";
import { getTask,createTask } from "../controllers/taskControllers.js";

const taskRouter = express.Router();

taskRouter.get('/',getTask);//LIST of the Tasks
taskRouter.post('/',createTask);// CREATE New Task

export default taskRouter;
