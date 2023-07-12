import React, { useState, useEffect } from "react";
import ArticleLayout from "../components/ArticleLayout";
import headlines from "../testArticles";
import sportsHeadlines from "../sportsArticles";
import techArticles from "../technologyArticles";
import businessArticles from "../businessArticles";
import { Link, useParams } from "react-router-dom";

function ArticlePage() {
  const articleId = useParams();
  const category = articleId.category;

  const [article, setArticle] = useState({});

  useEffect(() => {
    console.log("PARAMS:" + articleId.id);
    let main;

    switch (category) {
      case "top-news":
        main = headlines.find((headline) => {
          return headline.publishedAt.substring(8, 19) === articleId.id;
        });
        break;
      case "sports":
        main = sportsHeadlines.find((headline) => {
          return headline.publishedAt.substring(8, 19) === articleId.id;
        });
        break;
      case "technology":
        main = techArticles.find((headline) => {
          return headline.publishedAt.substring(8, 19) === articleId.id;
        });
        break;
      case "business":
        main = businessArticles.find((headline) => {
          return headline.publishedAt.substring(8, 19) === articleId.id;
        });
        break;
    }

    setArticle(main);
  });
  return (
    <div>
      <ArticleLayout article={article} />
    </div>
  );
}

export default ArticlePage;
