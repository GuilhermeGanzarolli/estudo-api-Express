import cors from "cors"
import express from "express"
import { router } from "./routes"



export function createApp() {
    const app = express()

    const corsOptions = {
        origin:[""],
        methods: ["GET", "UPDATE"],
    }

    app.use(express.json())
    app.use("/api", router)
    app.use(cors())

    
    return app
}


