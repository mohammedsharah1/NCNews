import { useState } from "react";
import { useParams } from "react-router-dom";
import { postComments } from "../api";

const PostComment = ({ comments, setComments }) => {
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  console.log(comments);

  const { article_id } = useParams();

  const handleChange = (event) => {
    setBody(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const author = "tickle122";
    postComments(article_id, author, body).then((newComment) => {
      let comments = { comments: newComment };
      setComments((currComments) => {
        console.log(currComments);

        return [newComment.comments, ...currComments];
      });
      setLoading(false);
      setBody("");
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          type="text"
          name="body"
          id="newComment"
          placeholder="Add a comment"
          value={body}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" disabled={loading}>
          Comment
        </button>
      </form>
    </div>
  );
};

export default PostComment;
