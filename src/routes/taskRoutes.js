import express from "express";
import { getTasks,createTask, getTaskById, updateTask, deleteTask } from "../controllers/taskControllers.js";

const taskRouter = express.Router();

taskRouter.get('/',getTasks);//LIST of the Tasks
taskRouter.post('/',createTask);// CREATE New Task
taskRouter.get('/:id',getTaskById)// Getting Specific Task
taskRouter.put('/:id',updateTask)// Updating Specific Task
taskRouter.delete('/:id',deleteTask)// Delete Specific Task


export default taskRouter;
