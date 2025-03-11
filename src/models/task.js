import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

// Define Task Schema
//DOCS: https://mongoosejs.com/docs/api/schema.html#Schema()
//DOCS: https://www.npmjs.com/package/uuid
const taskSchema = new mongoose.Schema(
  {
    task_id: {
      type: String,
      default: uuidv4, // Automatically generate a UUID when a new task is created
      unique: true,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    //toJSON.transform() method modifies the JSON output of documents before sending them to the API response.
    toJSON: {
      transform: function (doc, ret) {
        // Deletes _id and __v fields, so they will not be returned in API responses.
        delete ret._id; // Remove _id field from API responses
        delete ret.__v; // Remove __v (Mongoose version key)
      },
    },
  }
);


// Create Task Model
//DOCS: https://mongoosejs.com/docs/models.html
const Task = mongoose.model("Task", taskSchema);

//Export Model
export default Task;
