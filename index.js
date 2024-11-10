import express from 'express';
import 'dotenv/config';
import multer from 'multer';
import { connectDB } from './config/db.js';
import employeeRoute from './router/employeeRoute.js';
import adminRoute from './router/adminRoute.js';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 5000;  // Default to 5000 if PORT is not set in .env

// Middleware
// Middleware
// Middleware
app.use(cors({
    origin: "https://celebrated-babka-cdacf4.netlify.app/", // Replace with your Netlify frontend URL
    methods: "GET,POST,DELETE,PUT",
    credentials: true,
}));



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from 'uploads' directory
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use("/api/employee", employeeRoute);
app.use("/api/admin", adminRoute);

// Database connection
connectDB();

// Start the server
app.listen(PORT, () => {
    console.log(`App Running Successfully on PORT ${PORT}`);
});
