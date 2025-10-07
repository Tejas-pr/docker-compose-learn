import express from "express";
import { PrismaClient } from "../prisma/generated/prisma/index.js";


const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
    const user = await prisma.user.findMany();

    res.json({
        message: "GET endpoint",
        user
    });
});

app.post("/", async (req, res) => {
    await prisma.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    });
    res.json({
        message: "POST endpoint"
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
