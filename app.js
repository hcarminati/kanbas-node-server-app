import express from "express";
import "dotenv/config";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import AssignmentRoutes from "./assignment_service/routes.js";
import Hello from "./hello.js";
import Lab5 from "./Lab5.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(
    cors({
             credentials: true,
             origin: process.env.FRONTEND_URL
         })
);
app.use(express.json());
ModuleRoutes(app);
CourseRoutes(app);
AssignmentRoutes(app);
Lab5(app);
Hello(app);
app.listen(process.env.PORT || 4000);