import express from "express"
import mongoose from "mongoose";
import UserRouter from "./routers/userRouter.js";
import cors from "cors"
import estateRoute from "./routers/estateRouter.js";

const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', // İzin vermek istediğiniz domain
    methods: ['GET', 'POST', "PUT", "DELETE"], // İzin vermek istediğiniz HTTP metodları
    credentials: true
}));
app.use("/user", UserRouter);
app.use("/estate", estateRoute);


const connetcDB = async() => {    
    try {
        await mongoose.connect("mongodb+srv://mehmetk:2222@cluster0.sfidhca.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("connetcion mongoDB ...");
    } catch (error) {
        console.log(error.message);
    }
}; connetcDB();

app.listen(3000, ()=> {
    console.log("app listening on 3000 port ...");
})
