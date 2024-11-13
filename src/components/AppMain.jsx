import PostCard from "./PostCard/PostCard"
import posts from "../db/posts.js"
export default function AppMain() {
    return (
        <main>
            <div className="container">
                <div className="posts">
                    {posts.map(post => <PostCard key={post.id} data={post} />)}

                </div>
            </div>
        </main>
    )
}