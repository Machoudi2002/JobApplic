import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { AdminSchema } from "../Models/AdminModel";

const Admin = mongoose.model("Admin", AdminSchema)

export const RegisterAdmin = async (req, res) => {
    try {
        let { email, password } = req.body
        const hashedPassword = await bcrypt.hash(password, 10);
        const newAdmin = new Admin({email, password: hashedPassword})
        const admin = await newAdmin.save()
        res.json(admin)
    } catch (err) {
        console.error('Registration error:', err.message);
    }
}

export const LoginAdmin = async (req, res) => {
    try {
        let { email, password } = req.body;
        const admin = await Admin.findOne({ email });
        const passwordMatch = await bcrypt.compare(password, admin.password);
        if (!admin) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }
        const token = jwt.sign({ AdminId: admin._id }, 'secret_key');
        res.json({ token });
    } catch (err) {
        console.error('Login error:', err.message);
    }
    


}