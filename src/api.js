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
  return newsApi
    .get("/articles")
    .then(({ data: { articles } }) => {
      console.log(articles)
      return articles;
    });
};
