import { useState, useEffect } from "react";

export default function Blog() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function () {
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
    <section>
      <h1>Blog Page</h1>
      <p>Ini adalah artikel que</p>
      <hr />
      {loading ? "Loading..." : ""}
      {articles.map(function (item) {
        return <article key={item.id}>{item.title}</article>;
      })}
    </section>
  );
}
