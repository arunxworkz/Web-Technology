import express from "express";
import mysql from "mysql2";
import bodyParser from "body-parser";
import fileURLToPath from "url"

const app = express();
const port = 3000

app.use(bodyParser.json())
const db = mysql.createConnection({
    host: "localhost",
    port:3306,
    user:"root",
    password:"7483079907",
    database:"express"
})

db.connect(err=>{
    if(err){
        console.log("Not connected", err)
    }
    console.log("Database connected")
})

app.post("/send", (req, res)=>{
    const { name, email, age, phNo, location} = req.body;
    const str = "insert into users(name, email, age, phNo, location) values(?, ?, ?, ?, ?)"
    db.query(str, [name, email, age, phNo, location], (err, result)=>{
        if(err){
            res.status(500).send("Error :", err)
            throw err;
        }
        res.status(200).send("Data insterted")
    });
});

app.get("/get", (req, res)=>{
    const { name } = req.query
    const str = "select * from users where name = ?";
    db.query(str, [name], (err, result)=>{
        if(err){
            console.log("Data not present")
            res.status(500).send(`No data present for the ${name}`)
        }
        res.status(200).json(result)
    })
})

app.delete("/delete/:phNo", (req, res)=>{
    const { phNo } = req.params
    const sqlQuery = "delete from users where phNo = ?"

    db.query(sqlQuery, [phNo], (err, result)=>{
        if(err){
            console.log(err)
            return res.status(500).send("Error while deleting the data, Data is not deleted")
        }

        if(result.affectedRows === 0){
            return res.status(404).send(`No data found for ${phNo}`)
        }

        res.status(200).json(result)
    })
})

app.listen(port, (req, res)=>{
    console.log(`App is running at ${port}`)
})






