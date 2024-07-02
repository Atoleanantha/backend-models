require('dotenv').config()

const express=require('express')
const app=express()
const port=process.env.PORT||4000
app.get('/', async(req, res) => {
    try {
        res.send("hello")
    } catch (error) {
        res.status(500).send(error.message)
    }
})

app.listen(port,()=>{
    console.log(`listeing at port ${port}`);
})