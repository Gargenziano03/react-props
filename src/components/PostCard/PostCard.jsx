export default function PostCard({ data }) {
    return (
        data.published && (
            <div className="post_card">
                <h2>{data.title}</h2>
                <img src={data.image} alt="" />
                <div className="details">
                    <p>{data.content}</p>
                    <span>{data.tags}</span>


                </div>
            </div>
        ))
}