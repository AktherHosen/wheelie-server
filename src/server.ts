import {Server} from "http"
import express, { Request, Response } from "express"
import mongoose from "mongoose";
import app from "./app";

let server: Server;


const startServer = async () => {
    try {
        await mongoose.connect("mongodb+srv://wheelie:tpp7iIUBT09GCbH8@cluster0.bmhyihx.mongodb.net/wheelie?appName=Cluster0")

    console.log("Connect to DB!")
    server = app.listen(5001, ()=> {
        console.log(`Server is listening to port 5001`)
    })
    } catch (error) {
        console.log(error)
    }
}

startServer()


