import express from "express";
import fs from 'fs/promises'
import path from 'path';
import cors from 'cors';
import {v4 as uuid} from 'uuid'

const app = express()

const dirname = import.meta.url.slice(8,72);
// console.log(dirname);


app.use(express.json())
app.use(cors())

app.get("/todo",async (req,res)=>{
    let data;
    try{
        data = JSON.parse(await fs.readFile(path.join(dirname,"data.json"),'utf-8'))
        res.json(data)
    }
    catch(err){
        console.log(err);
        res.json({status:-1})
    }

    return;
})

app.post("/todo",async (req,res)=>{
    const payload = req.body;

    if(payload.title === "" || payload.description === "") return res.json({msg:"Invalid"})
    
    const newTodo = {id:uuid(),title:payload.title,description:payload.description}

    let existingData = JSON.parse(await fs.readFile(path.join(dirname,"data.json"),'utf-8'))

    existingData.push(newTodo)

    await fs.writeFile(path.join(dirname,"data.json"),JSON.stringify(existingData))

    res.json({msg:"Todo added successfully"})
})


app.listen(3000,()=>{console.log('Server is running on port 3000');})
