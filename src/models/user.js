import mongoose from "mongoose";
import bcrypt from "bcryptsjs"; // Hash password before saving
import {v4 as uuidv4} from "uuid"; //To generate Unique Id 

const userSchema = new mongoose.Schema({
    user_id: {
        type: string,
        default: uuidv4, //Automatocally generate a UUID for each user
        unique: true
    },
    username: {
        type:string,
        unique:true
    },
    email:{
        type: String,
        unique: true,
    },
    password:{
        type: string,
    }
});

//Hash passwprd before saving
//DOCS: https//mongoosejs.com.docs/api.schema.html#Schema.prototype.pre()
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next(); 
    this.password = await bcrypt.hash(this.password, 10); 
    next(); 
  });

   // Compare password for login
  //DOCS: https://mongoosejs.com/docs/api/schema.html#Schema.prototype.method() 
  userSchema.methods.comparePassword = async function (password) { 
    return await bcrypt.compare(password, this.password); 
  };
    
const User = mongoose.model('User', userSchema);
export default User;