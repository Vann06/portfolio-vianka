
function PostCard({ post, language, onOpenPost}){
    return (
        <div 
            className="post-card"
            onClick={() => onOpenPost(post)}
            style={{cursor: "pointer", marginBottom: "1rem"}}
        >
            <img
                src={post.image}
                alt={post.title[language]}
                style={{ width: "100%", height: 160, objectFit: "cover", display: "block" }}
                loading="lazy"
                onError={(e) => { e.currentTarget.src = "/fallback-post.png" }}
                draggable={false}
            />
            <h3>{post.title[language]}</h3>
            <p>{post.summary[language]}</p>
            <span>{post.date} • {post.readTime}</span>
        </div>
    );
}
export default PostCard;
