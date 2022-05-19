import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function get(id) {
    const blog = await prisma.blog.findUnique({
        where: {
            id: id
        }
    })
    return blog
}

async function del(id) {
    const blog = await prisma.blog.delete({
        where: {
            id: id
        }
    })

    return blog
}

async function handle(res, func) {
    const blog = await func(id);
    res.json(blog)
}

export default async function handler(req, res) {

    const { id } = req.query

    if (req.method === "GET") {
        handle(res, get)
    }

    if (req.method === "DELETE") {
        handle(res, del)
    }
}