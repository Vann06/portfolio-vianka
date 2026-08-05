function PostCard({
  post,
  language,
  index,
  openLabel,
  onOpenPost
}) {
  const title = post.title[language] ?? post.title.en;
  const summary = post.summary[language] ?? post.summary.en;
  const formattedDate = new Intl.DateTimeFormat(
    language === "es" ? "es-GT" : "en-US",
    { year: "numeric", month: "short", day: "2-digit" }
  ).format(new Date(`${post.date}T12:00:00`));

  return (
    <button
      type="button"
      className="blog-entry"
      style={{ "--entry-index": index }}
      onClick={() => onOpenPost(post.id)}
      aria-label={`${openLabel}: ${title}`}
    >
      <div className="blog-entry-image">
        <img
          src={post.image}
          alt=""
          loading="lazy"
          draggable={false}
          onError={(event) => {
            event.currentTarget.hidden = true;
          }}
        />
        <span className="blog-entry-number" aria-hidden="true">
          ENTRY_{String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="blog-entry-body">
        <div className="blog-entry-tags" aria-label="Tags">
          {post.tags.slice(0, 3).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <h2>{title}</h2>
        <p>{summary}</p>

        <footer className="blog-entry-footer">
          <span>
            <time dateTime={post.date}>{formattedDate}</time>
            <span aria-hidden="true"> // </span>
            {post.readTime}
          </span>
          <span className="blog-entry-open" aria-hidden="true">
            {openLabel} &gt;
          </span>
        </footer>
      </div>
    </button>
  );
}

export default PostCard;
