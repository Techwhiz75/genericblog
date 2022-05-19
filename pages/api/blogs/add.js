import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.json("Invalid Method")
    }

    const data = req.body;

    const savedData = await prisma.blog.create({
        data: data
    });

    return res.json(savedData);
}