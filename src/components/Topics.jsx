import { useState, useEffect } from "react";
import { getTopics } from "../api";
import { Link } from "react-router-dom";

const Topics = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then(({ topics }) => {
      console.log(topics);
      setTopics(topics);
    });
  }, []);

  return (
    <div className="topics">
      <ul>
        {topics.map((topic) => {
          return (
            <li key={topic.slug} className="single-topic">
              <Link to={`/articles/${topic.slug}`}>
                <h3>{topic.slug}</h3>
              </Link>

              <h4>{topic.description}</h4>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Topics;
