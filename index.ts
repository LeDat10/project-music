import express, {Express} from "express";
import dotenv from "dotenv";

import * as database from "./config/database";
import clientRoutes from "./routes/client/index.route";

dotenv.config();
database.connect();


const app: Express = express();
const port: number | string = process.env.PORT;


app.set("views", "./views");
app.set("view engine", "pug");

// client Routes
clientRoutes(app);

app.listen(port, (): void => {
    console.log(`App listen on port ${port}`);
});