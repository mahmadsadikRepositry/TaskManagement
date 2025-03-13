import mongoose from "mongoose";
import bcrypt from "bcrypt"; // Hash password before saving 
import { v4 as uuidv4 } from "uuid";

const userSchema = new mongoose.Schema({
    user_id: {
        type: String,
        default: uuidv4, // Automatically generate a UUID for each user 
        unique: true
    },
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    }
}, { timestamps: true });

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);
export default User;