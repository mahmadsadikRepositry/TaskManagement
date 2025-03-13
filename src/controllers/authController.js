import jwt from 'jsonwebtoken'; // JWT (JSON Web Token) library to sign and verify tokens
import dotenv from 'dotenv';   // dotenv library to load environment variables from a .env file
import User from '../models/user.js'; // Importing the User model to interact with the database

dotenv.config();

const generateToken = (user) => {
    // Using jwt.sign() to create a token with a payload containing the user id and username
    // It is signed with a secret key from environment variables (JWT_SECRET)
    // The token expires in 1 hour (expiresIn: '1h')
    return jwt.sign(
        { id: user.user_id, username: user.username },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );
};

export const register = async (req, res) => {
    try {
        const user = new User(req.body);

        await user.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        res.json({ token: generateToken(user) });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
