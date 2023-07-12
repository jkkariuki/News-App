import React, { useState } from "react";
import { Link } from "react-router-dom";

function ArticleCardList(props) {
  const [articles, setArticles] = useState(props.articles);
  const [rangeMin, setRangeMin] = useState(props.range.x);
  const [rangeMax, setRangeMax] = useState(props.range.y);

  return (
    <div>
      {articles.map((article, i) => {
        if (i >= rangeMin && i <= rangeMax) {
          return (
            <div>
              {" "}
              <Link
                className="link"
                to={
                  "/" +
                  props.category +
                  "/articles/" +
                  articles[i].publishedAt.substring(8, 19)
                }
              >
                <img className="articleThumbnail" src={article.urlToImage} />
                <p>{article.title}</p>
              </Link>
            </div>
          );
        }
      })}
    </div>
  );
}

export default ArticleCardList;
