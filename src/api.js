import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://modern-necklace-foal.cyclic.app/api",
});

export const getTopics = () => {
  return newsApi.get("/topics").then(({ data: { topics } }) => {
    console.log(topics);
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
    console.log(res.data);
    return res.data;
  });
};
