import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../api";
import { useParams } from "react-router-dom";
import styled from "styled-components";

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
  const ArticleCard = styled.li`
  
 
  display: inline-block;
  border: 1px solid;
  padding: 1rem 1rem;
  justify-content: center;
  border-color: #a7bcb9;
  margin: 0.5%
  `

  return isLoading ? (
    <p>loading...</p>
  ) : (
    <ul>
      {topic ? <h2 className="topic-header">{topic}</h2> : null}
      {articles.map((article) => {
        return (
          <ArticleCard key={article.article_id} className="articleCard">
            <Link to={`/articles/article/${article.article_id}`}>
              <h3>{article.title}</h3>
            </Link>

            <h4>Author: {article.author}</h4>
            <h4>Topic: {article.topic}</h4>
          </ArticleCard>
        );
      })}
    </ul>
  );
};

export default Articles;
