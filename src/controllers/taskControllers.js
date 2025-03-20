import Task from "../models/task.js";

//Create New Task
export const createTask = async (req, res) => {
  try {
    console.log("req",req);
    const { title, description} = req.body;
    const newTask = new Task({title,description, user_id: req.user.user_id });
    //DOCS: https://mongoosejs.com/docs/api/document.html#Document.prototype.save()
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error creating task", error: error.message });
  }
};

//Get Task Lists
export const getTasks = async (req, res) => {
  try {
    //DOCS: https://mongoosejs.com/docs/api/query.html#Query.prototype.find()
    const tasks = await Task.find({user_id: req.user.user_id});
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

// Get Task by ID
export const getTaskById = async (req, res) => {
  try {
    //DOCS: https://mongoosejs.com/docs/api/model.html#Model.findOne()
    const task = await Task.findOne({ task_id: req.params.task_id });
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

//Update Task
export const updateTask = async (req, res) => {
  try {
    //DOCS https://mongoosejs.com/docs/api/model.html#Model.findOneAndUpdate()
    const updatedTask = await Task.findOneAndUpdate(
      { task_id: req.params.task_id },
      req.body,
      {
        new: true, //return the modified document rather than the original
      }
    );
    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json(updatedTask);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating task", error: error.message });
  }
};

//Delete Task
export const deleteTask = async (req, res) => {
  try {
    //DOCS https://mongoosejs.com/docs/api/model.html#Model.findOneAndDelete()
    const deletedTask = await Task.findOneAndDelete({
      task_id: req.params.task_id,
    });
    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting task", error: error.message });
  }
};
