import { useState } from "react";
import { useParams } from "react-router-dom";
import { postComments } from "../api";

const PostComment = ({ setComments }) => {
  const [inputComment, setInputComment] = useState({
    body: "",
    author: "weegembump",
  });

  const { article_id } = useParams();

  const handleChange = (event) => {
    setInputComment((currComment) => {
      const commentArr = { ...currComment };
      commentArr.body = event.target.value;
      return commentArr;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    postComments(article_id, inputComment).then((newComment) => {
      setComments((currComments) => {
        return [newComment.comments, ...currComments];
      });
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
          value={inputComment.body}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Comment</button>
      </form>
    </div>
  );
};

export default PostComment;
