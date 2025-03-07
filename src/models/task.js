import mongoose from 'mongoose'; 
 
// Define Task Schema 
//DOCS: https://mongoosejs.com/docs/api/schema.html#Schema()
const taskSchema = new mongoose.Schema({ 
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
}, { timestamps: true }); 
 
// Create Task Model 
//DOCS: https://mongoosejs.com/docs/models.html
const Task = mongoose.model('Task', taskSchema); 
 
//Export Model
export default Task; 
