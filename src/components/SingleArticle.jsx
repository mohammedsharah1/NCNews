import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";

const SingleArticle = () => {
  const [articleCard, setArticleCard] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id).then(( article ) => {
      console.log(article)
      setArticleCard(article);
      setIsLoading(false);
    });
  }, [article_id]);

  return isLoading ? (
    <p> loading...</p>
  ) : (
    <section className="article">
      <h3>{articleCard.title}</h3>
      <h4>{articleCard.topic}</h4>
      <p>{articleCard.body}</p>
      <h4>Author: {articleCard.author}</h4>
    </section>
  );
};
export default SingleArticle;
