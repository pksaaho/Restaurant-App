import express from "express";
import cors from "cors";

import dotenv from "dotenv";
import { dbconnection } from "./database/dbconnection.js";
import { errorMiddleware } from "./error/error.js";

// import reservationRouter from "./route/reservationRoute.js"
import reservationRouter from "./route/reservationRoute.js"

const app= express();

dotenv.config({path: "./config/configs.env"});

app.use(cors({
    origion: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use('/api/v1/reservation', reservationRouter)
app.get('/',(req,res)=>{
    res.send({"message":"hello world"})
})
// app.use('/api/v1/reservation', router)

dbconnection();

app.use(errorMiddleware)

export default app;