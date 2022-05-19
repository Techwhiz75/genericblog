import { useState } from "react"
import { useRouter } from "next/router"

export default function add() {

    const router = useRouter();

    const [name, setName] = useState(null);
    const [author, setAuthor] = useState(null);
    const [snippet, setSnippet] = useState(null);
    const [body, setBody] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();

        await fetch("/api/blogs/add", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                author: author,
                title: name,
                snippet: snippet,
                body: body
            })
        })

        router.push("/all");
    }


    return (
        <>
            <form className="add-form" onSubmit={(e) => handleSubmit(e)}>
                <h2 align="center">Add a blog</h2>
                <label>Blog Title</label>
                <input type="text" onChange={(e) => setName(e.target.value)}/>
                <label>Blog Author</label>
                <input type="text" onChange={(e) => setAuthor(e.target.value)}/>
                <label>Blog Snippet</label>
                <input type="text"onChange={(e) => setSnippet(e.target.value)} />
                <label>Blog Body</label>
                <textarea onChange={(e) => setBody(e.target.value)}></textarea>
                <button className="view-blog">
                    Add Blog
                </button>
            </form>
        </>
    )
}