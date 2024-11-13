export default function PostCard(props) {
    return (
        <div className="post_card">
            <h2>{props.title}</h2>
            <img src={props.image} alt="" />
            <div className="details">
                <p>{props.content}</p>
                <span>{props.tags}</span>
            </div>
        </div>
    )
}