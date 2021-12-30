import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    document.title = "Blog";

    async function getArticles() {
      const request = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles"
      );
      const response = await request.json();

      setArticles(response);
      setLoading(false);
    }
    getArticles();
  }, []);

  return (
    <section className="section">
      <h1 className="section-title">Blog Page</h1>
      <p className="section-description">Ini adalah artikel que, tapi boong.</p>
      <div className="articles">
        {loading ? "Loading..." : ""}
        {articles.map(function (item) {
          return (
            <article key={item.id} className="article">
              <h2 className="article-title">
                <Link to={`/blog/${item.id}`}>{item.title}</Link>
              </h2>
              <time className="article-time">
                {new Date(item.publishedAt).toLocaleDateString()}
              </time>
            </article>
          );
        })}
      </div>
    </section>
  );
}
