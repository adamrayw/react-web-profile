import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BlogDetail() {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const [notfound, setNotFound] = useState(false);

  const params = useParams();

  useEffect(
    function () {
      async function getArticle() {
        const request = await fetch(
          `https://api.spaceflightnewsapi.net/v3/articles/${params.id}`
        );

        if (!request.ok) {
          return setNotFound(true);
        }

        const response = await request.json();

        document.title = response.title;
        setArticle(response);
        setLoading(false);
      }
      getArticle();
    },
    [params]
  );

  if (notfound) {
    return <h1>Artikel tidak ditemukan :(</h1>;
  }
  return (
    <section className="section">
      {loading ? (
        <p>Loading article...</p>
      ) : (
        <article className="article">
          <h2 className="article-title">{article.title}</h2>
          <time className="article-time">
            {new Date(article.publishedAt).toLocaleDateString()}
          </time>
          <img
            src={article.imageUrl}
            alt="article-img"
            className="article-image"
          />
          <p className="article-summary">{article.summary}</p>
          <p className="article-source">
            Source:{" "}
            <a href={article.url} target="_blank" rel="noreferrer">
              {article.newsSite}
            </a>
          </p>
        </article>
      )}
    </section>
  );
}
