# 🚀 Task Manager API

## 📌 Overview
The **Task Manager API** is a simple RESTful API built with **Node.js** and **Express.js** that allows users to **create, retrieve, update, and delete tasks**. It integrates with **MongoDB** for data storage and follows best practices for modular code organization.

---

## 📂 Project Structure
```
task-manager-api
 ┣ 📂 node_modules        # Installed dependencies
 ┣ 📂 src
 ┃ ┣ 📂 routes            # All route handlers
 ┃ ┣ 📂 controllers       # Business logic (separate from routes)
 ┃ ┣ 📂 middleware        # Custom middleware (e.g., logging)
 ┃ ┣ 📂 config            # Configurations (DB, environment variables)
 ┃ ┣ 📂 models            # Data models (if using a database)
 ┃ ┣ 📜 app.js            # Express setup & middleware
 ┃ ┗ 📜 server.js         # Server startup file
 ┣ 📜 .env                # Environment variables (not committed)
 ┣ 📜 .gitignore          # Ignore unnecessary files
 ┣ 📜 package-lock.json   # Project dependencies
 ┣ 📜 package.json        # Project metadata & scripts
 ┣ 📜 README.md           # Project documentation
```

---

### 🛠️ Setup & Installation

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/your-username/task-manager-api.git
cd task-manager-api
```

### **2️⃣ Install Dependencies**
```bash
npm install
```

### **3️⃣ Configure Environment Variables**
Create a `.env` file in the project root and add the following:
```plaintext
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/taskmanager?retryWrites=true&w=majority
PORT=3000
```
**Replace `<username>` and `<password>` with your actual MongoDB credentials.**

### **4️⃣ Start the Server**
```bash
npm run dev
```
> This will start the server at `http://localhost:3000`

---

## 🌍 API Endpoints

| Method   | Endpoint         | Description               |
|----------|-----------------|---------------------------|
| **GET**  | `/api/tasks`     | Retrieve all tasks        |
| **GET**  | `/api/tasks/:id` | Get a specific task by ID |
| **POST** | `/api/tasks`     | Create a new task         |
| **PUT**  | `/api/tasks/:id` | Update a task             |
| **DELETE** | `/api/tasks/:id` | Delete a task             |

---

## 📌 Models

### **Task Model**
```javascript
import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  completed: { type: Boolean, default: false }
}, { timestamps: true });

const Task = mongoose.model('Task', taskSchema);

export default Task;
```

---

## 📝 Usage Examples

### **1️⃣ Create a New Task**
**Request:**
```bash
POST /api/tasks
Content-Type: application/json
{
  "title": "Learn MongoDB",
  "description": "Understand database CRUD operations"
}
```
**Response:**
```json
{
  "_id": "65d8e0b6c8f1a9d12a7b33b9",
  "title": "Learn MongoDB",
  "description": "Understand database CRUD operations",
  "completed": false,
  "createdAt": "2024-02-28T12:00:00Z",
  "updatedAt": "2024-02-28T12:00:00Z"
}
```

### **2️⃣ Retrieve All Tasks**
```bash
GET /api/tasks
```

### **3️⃣ Update a Task**
```bash
PUT /api/tasks/65d8e0b6c8f1a9d12a7b33b9
Content-Type: application/json
{
  "title": "Learn Mongoose",
  "completed": true
}
```

### **4️⃣ Delete a Task**
```bash
DELETE /api/tasks/65d8e0b6c8f1a9d12a7b33b9
```

---

## 🚀 Technologies Used
✅ **Node.js** – Backend runtime  
✅ **Express.js** – API framework  
✅ **MongoDB** – Database  
✅ **Mongoose** – ODM (Object Data Modeling)  
✅ **Dotenv** – Manage environment variables  
✅ **Cors & Morgan** – Middleware for API security & logging  

---

## 🛠️ Development & Contribution
1. **Fork the Repository**  
2. **Create a New Branch**  
3. **Make Changes & Commit**  
4. **Push to GitHub**  
5. **Open a Pull Request**  

---

## ❓ FAQ
### **1️⃣ How can I test the API?**
Use **Postman** or **cURL** to send requests to API endpoints.

### **2️⃣ What if MongoDB connection fails?**
Ensure your **MONGO_URI** in `.env` is correct and the database is accessible.

### **3️⃣ How do I stop the server?**
Press `CTRL + C` in the terminal.



🚀 **Happy Coding!** Let me know if you need any modifications! 😊
```

---

