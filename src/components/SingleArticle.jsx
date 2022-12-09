import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getArticleById,
  incrementVoteByArticleId,
  decrementVoteByArticleId,
} from "../api";
import Comments from "./Comments";

const SingleArticle = () => {
  const [articleCard, setArticleCard] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [votes, setVotes] = useState(0);

  const { article_id } = useParams();

  const incrementVote = () => {
    incrementVoteByArticleId(article_id);
    setVotes((currVotes) => {
      return currVotes + 1;
    });
  };
  const decrementVote = () => {
    decrementVoteByArticleId(article_id);
    setVotes((currVotes) => {
      return currVotes - 1;
    });
  };

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id).then((article) => {
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
      <h5>Votes: {votes + articleCard.votes}</h5>
      <button className="btn" type="button" onClick={incrementVote}>
        Like
      </button>
      <button className="btn" type="button" onClick={decrementVote}>
        Dislike
      </button>

      <Comments />
    </section>
  );
};
export default SingleArticle;
