import PostCard from "./PostCard/PostCard"
import posts from "../db/posts.js"
export default function AppMain() {
    return (
        <main>
            <div className="container">
                <div className="posts">
                    {posts.map(post => <PostCard key={post.id} titlo={post.title} image={post.image} content={post.content}
                        tags={post.tags} published={post.published} />)}

                </div>
            </div>
        </main>
    )
}