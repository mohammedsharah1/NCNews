import "./App.css";
import Articles from "./components/Articles";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import SingleArticle from "./components/SingleArticle";
import Home from "./components/Home";
import Topics from "./components/Topics";


function App() {
  return (
    <div className="App">
      <Header />
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:topic" element={<Articles />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/topics" element={<Topics />} />

        <Route
          path="/articles/article/:article_id"
          element={<SingleArticle />}
        />
      </Routes>
    </div>
  );
}

export default App;
