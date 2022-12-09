import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../api";
import { useParams } from "react-router-dom";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();
  useEffect(() => {
    getArticles(topic).then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, [topic]);

  return isLoading ? (
    <p>loading...</p>
  ) : (
    <ul>
      {articles.map((article) => {
        return (
          <li key={article.article_id} className="articleCard">
            <Link to={`/articles/article/${article.article_id}`}>
              <h3>{article.title}</h3>
            </Link>

            <h4>Author: {article.author}</h4>
            <h4>Topic: {article.topic}</h4>
          </li>
        );
      })}
    </ul>
  );
};

export default Articles;
