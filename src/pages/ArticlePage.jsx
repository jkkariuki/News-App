import React, { useState, useEffect } from "react";
import ArticleLayout from "../components/ArticleLayout";
import headlines from "../testArticles";
import sportsHeadlines from "../sportsArticles";
import techArticles from "../technologyArticles";
import businessArticles from "../businessArticles";
import entertainmentArticles from "../entertainmentArticles";
import { Link, useParams } from "react-router-dom";

function ArticlePage() {
  const articleId = useParams();
  const category = articleId.category;

  const [article, setArticle] = useState({});
  const [articlesInCategory, setArticlesInCategory] = useState([]);
  const [randomArticle1, setRandomArticle1] = useState({});
  const [randomArticle2, setRandomArticle2] = useState({});
  const [randomArticle1Id, setRandomArticle1Id] = useState("");
  const [randomArticle2Id, setRandomArticle2Id] = useState("");

  useEffect(() => {
    let main;
    let random1;
    let random2;
    let random1Id;
    let random2Id;

    switch (category) {
      case "top stories":
        setArticlesInCategory(headlines);

        random1 = headlines[headlines.length - 1];
        random1Id = random1.publishedAt.substring(8, 19);

        random2 = headlines[headlines.length - 2];
        random2Id = random2.publishedAt.substring(8, 19);

        main = headlines.find((headline) => {
          return headline.publishedAt.substring(8, 19) === articleId.id;
        });
        break;

      case "sports":
        setArticlesInCategory(sportsHeadlines);
        random1 = sportsHeadlines[sportsHeadlines.length - 1];
        random1Id = random1.publishedAt.substring(8, 19);

        random2 = sportsHeadlines[sportsHeadlines.length - 2];
        random2Id = random2.publishedAt.substring(8, 19);

        main = sportsHeadlines.find((headline) => {
          return headline.publishedAt.substring(8, 19) === articleId.id;
        });
        break;

      case "technology":
        setArticlesInCategory(techArticles);

        random1 = techArticles[techArticles.length - 1];
        random1Id = random1.publishedAt.substring(8, 19);

        random2 = techArticles[techArticles.length - 2];
        random2Id = random2.publishedAt.substring(8, 19);

        main = techArticles.find((headline) => {
          return headline.publishedAt.substring(8, 19) === articleId.id;
        });
        break;

      case "business":
        setArticlesInCategory(businessArticles);
        random1 = businessArticles[businessArticles.length - 1];
        random1Id = random1.publishedAt.substring(8, 19);

        random2 = businessArticles[businessArticles.length - 2];
        random2Id = random2.publishedAt.substring(8, 19);

        main = businessArticles.find((headline) => {
          return headline.publishedAt.substring(8, 19) === articleId.id;
        });
        break;

      case "entertainment":
        setArticlesInCategory(entertainmentArticles);
        random1 = entertainmentArticles[entertainmentArticles.length - 1];
        random1Id = random1.publishedAt.substring(8, 19);

        random2 = entertainmentArticles[entertainmentArticles.length - 2];
        random2Id = random2.publishedAt.substring(8, 19);

        main = entertainmentArticles.find((headline) => {
          return headline.publishedAt.substring(8, 19) === articleId.id;
        });
        break;
    }
    setArticle(main);
    setRandomArticle1(random1);
    setRandomArticle1Id(random1Id);
    setRandomArticle2(random2);
    setRandomArticle2Id(random2Id);
  });
  return (
    <div>
      <ArticleLayout
        article={article}
        category={category}
        categoryArticles={articlesInCategory}
        randomArticle1={randomArticle1}
        randomArticle1Id={randomArticle1Id}
        randomArticle2Id={randomArticle2Id}
        randomArticle2={randomArticle2}
      />
    </div>
  );
}

export default ArticlePage;
