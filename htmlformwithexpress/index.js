import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import mysql from "mysql2";

const app = express();
const port = 3000;

//to point to directory
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//express.static() - return the middleware function to serve static files
//path.join() - Conbines the current directory withe "public"
/* express.static(path.join(__dirname, "public")) - returns a middleware 
function that tells Express to serve static files (like HTML, CSS, JS, images)
from a folder */

//connection to db
const db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "7483079907",
    database: "express"
})

//check db connection successful or not
db.connect(err=>{
    if(err){
        console.log("Database not connscted")
        throw err
    }
    console.log("Database connected")
})

app.use(express.static(path.join(__dirname, "public")));
console.log((path.join(__dirname, "public")));
app.post("/submit", (req, res)=>{
    const { name, email , age, phNo} = req.body;
    console.log(req.body)
    const sqlInsert =  "INSERT INTO users(name, email, age, phNo) VALUES(?, ?, ?, ?)";
    db.query(sqlInsert, [name, email, age, phNo], (err, result)=>{
        if(err){
            return res.status(500).send("Error")
        }
        return res.status(200).send("<h1>Data is successfully inserted</h1>")
        //to send response to another file 
        // sendFile(path.join(__dirname, "public", "success.html"))
    })
})

app.listen(port, ()=>{
    console.log("Server is running")
})

