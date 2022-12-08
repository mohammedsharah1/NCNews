import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://modern-necklace-foal.cyclic.app/api",
});

export const getTopics = () => {
  return newsApi.get("/topics").then(({ data: { topics } }) => {
    return topics.slug;
  });
};

export const getArticles = (topics) => {
  return newsApi.get("/articles").then(({ data: { articles } }) => {
    return articles;
  });
};

export const getArticleById = (article_id) => {
  return newsApi.get(`articles/${article_id}`).then((res) => {
    return res.data.articles;
  });
};

export const getComments = (article_id) => {
  return newsApi.get(`articles/${article_id}/comments`).then((res) => {
    return res.data;
  });
};

export const incrementVoteByArticleId = (article_id) => {
  return newsApi
    .patch(`articles/${article_id}`, { inc_votes: 1 })
    .then((res) => {
      return res.data;
    });
};

export const decrementVoteByArticleId = (article_id) => {
  return newsApi
    .patch(`articles/${article_id}`, { inc_votes: -1 })
    .then((res) => {
      return res.data;
    });
};
