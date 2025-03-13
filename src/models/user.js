import mongoose from "mongoose";
import bcrypt from "bcryptjs"; //Hashing Passwords before saving
import { v4 as uuidv4 } from "uuid"; //Genterating unique ID

const userSchema = new mongoose.Schema({
  user_id: {
    type: String,
    default: uuidv4,
    unique: true,
  },
  username: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
});
//Hashing Passwords before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});
// Compare password for login
//DOCS: https://mongoosejs.com/docs/api/schema.html#Schema.prototype.method()
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);
export default User;
