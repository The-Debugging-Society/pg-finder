import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mainRouter from "./routes/index.js"

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const authRouter = require("./routes/authRoutes.js");

app.use(cors());
app.use(express.json());
app.use('/api',mainRouter);
app.use(express.urlencoded({ extended: true }));

// Sample route
app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

app.use('/api/auth' , authRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

