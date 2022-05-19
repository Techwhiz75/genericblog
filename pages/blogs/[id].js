import { PrismaClient } from "@prisma/client";
import { useRouter } from "next/router"

const prisma = new PrismaClient()

export async function getServerSideProps(context) {
    const { id } = context.query;

    const blog = await prisma.blog.findUnique({
        where: {
            id: id
        }
    })

    // console.log(blog)

    return {
        props: {
            blog: blog
        }
    }
}

export default function blogview({blog}) {

    // const router = useRouter();
    // const { id } = router.query;

    // console.log(get(id))

    return (
        <>
            <h1>{blog.title}</h1>
            <span>By {blog.author}</span>
            <div className="blog-body">
                <p>{blog.body}</p>
            </div>
        </>
    )
}