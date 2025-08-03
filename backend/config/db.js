import dotenv from 'dotenv';
import mongoose from 'mongoose';
import pgSchema from '../models/pg.model.js';
import userSchema from '../models/user.model.js';

dotenv.config();

mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log("Database Connected"))
.catch((err)=>console.log(err))

const Pg=mongoose.model("Pg",pgSchema);
const User=mongoose.model("User",userSchema);

export { User, Pg };


