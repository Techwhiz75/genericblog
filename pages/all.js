import { PrismaClient } from "@prisma/client"
import { useRouter } from "next/router";

const prisma = new PrismaClient();

export async function getServerSideProps() {
    const blogs = await prisma.blog.findMany();
    return {
        props: {
            initialBlogs: blogs
        }
    }
}

export default function all({initialBlogs}) {

    const router = useRouter();

    return (
        <div className="blog-card-list">
            {initialBlogs.map((blog) => {
                return (
                    <div className="blog-card" key={blog.id}>
                        <div className="blog-title">
                            <span>
                                {blog.title}
                            </span>
                        </div>
                        <div className="blog-body">
                            <div className="blog-snippet">
                                {blog.snippet}
                            </div>
                            <div className="blog-author">
                                <span>
                                    By {blog.author}
                                </span>
                            </div>
                            <button className="view-blog" onClick={() => router.push(`/blogs/${blog.id}`)}>
                                View Blog
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}