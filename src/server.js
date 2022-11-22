import express, { application } from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalrouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";




const PORT = 4000;
console.log(process.cwd());

const app = express();
const logger = morgan("dev");


//#4.1 Making Our Routers (11:05) 

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);




const handleListening = () => console.log(`Server listenting on port http://localhost:${PORT} !!`);


app.listen(PORT, handleListening);
