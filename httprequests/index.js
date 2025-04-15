import express from "express";
import mysql from "mysql2";
import bodyParser  from "body-parser";

const app = express();
const port = 3000;

app.get("/", (req, res)=>{
    // console.log(req)
    res.send("<h1>Hello World</h1>")
    // console.log("Response", res)/
})

app.get("/about", (req, res)=>{
    res.send("<h1>Iam a software engineer</h1>")
})

app.get("/contact", (req, res)=>{
    res.send("<p>Contact.No: 7483079907</p>")
})



app.use(bodyParser.json());
const db = mysql.createConnection({
    host:'localhost',
    port: 3306,
    user:'root',
    password:'7483079907',
    database:'express'
});

db.connect(err=>{
    if(err) throw err;
    console.log("Connected to database");
})

app.post("/send", (req, res)=>{

    const { name, email } = req.body;
    const query = 'INSERT INTO users(name, email) values(?, ?)';
    db.query(query, [name, email], (err, result)=>{
        if(err){
            console.log(err)
            return res.status(500).send("Error inserting data");
        }
        res.status(200).send("Data inserted successfully")
    });
});



app.listen(port, ()=>{
    console.log("Todaya is a good day")
})