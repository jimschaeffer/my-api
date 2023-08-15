import mysql2 from "mysql2";
import config from "../config";
import express from "express";

const app = express();
const connection = mysql2.createPool(config.mysql2);

export default connection;

app.listen(3000, () => console.log("Server listening on port 3000..."));
