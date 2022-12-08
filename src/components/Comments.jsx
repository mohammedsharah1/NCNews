import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../api";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getComments(article_id).then((comment) => {
      console.log(comment.comments);
      setComments(comment.comments);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="comments-div">
      <ul>
        <br></br>
        <h3 className="comments-list">Comments:</h3>
        {comments.map((comment) => {
          return (
            <li className="single-comment" key={comment.comment_id}>
              <br></br>

              <h4>{comment.author}</h4>

              <p>{comment.body}</p>
              <br></br>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Comments;
