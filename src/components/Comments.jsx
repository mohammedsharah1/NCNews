import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../api";
import PostComment from "./PostComments";
const Comments = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getComments(article_id).then((comment) => {
      console.log(comment, 'recent')
      setComments(comment.comments);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="comments-div">
      <PostComment comments={comments} setComments={setComments} />
      <ul>
        <h3 className="comments-list">Comments:</h3>
        {comments.map((comment) => {
          return (
            <div key={comment.comment_id}>
              <li>
                <h4>{comment.author}</h4>

                <p>{comment.body}</p>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Comments;
