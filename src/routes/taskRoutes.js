import express from "express";
import {
  getTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
} from "../controllers/taskControllers.js";
import { AuthGuard } from "../middleware/authMiddleware.js";

const taskRouter = express.Router();

taskRouter.get("/", AuthGuard, getTasks); //LIST of the Tasks
taskRouter.post("/", AuthGuard, createTask); // CREATE New Task
taskRouter.get("/:id", AuthGuard, getTaskById); // Getting Specific Task
taskRouter.put("/:id", AuthGuard, updateTask); // Updating Specific Task
taskRouter.delete("/:id", AuthGuard, deleteTask); // Delete Specific Task

export default taskRouter;
