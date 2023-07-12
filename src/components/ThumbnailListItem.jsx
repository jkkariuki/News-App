import React, { useState } from "react";
import { Link } from "react-router-dom";

function ThumbnailListItem(props) {
  console.log(props.range.x);
  const [articles, setArticles] = useState(props.articles);
  const [rangeMin, setRangeMin] = useState(props.range.x);
  const [rangeMax, setRangeMax] = useState(props.range.y);
  // console.log(props);
  return (
    <div>
      {articles.map((article, i) => {
        if (i > rangeMin && i <= rangeMax) {
          return (
            <div className="row">
              <div className="col-lg-3">
                <Link
                  className="link"
                  to={
                    "/" +
                    props.category +
                    "/articles/" +
                    article.publishedAt.substring(8, 19)
                  }
                >
                  <img className="sportsThumbnails" src={article.urlToImage} />
                </Link>
              </div>
              <div className="col-lg-9">
                <Link
                  className="link"
                  to={
                    "/" +
                    props.category +
                    "/articles/" +
                    article.publishedAt.substring(8, 19)
                  }
                >
                  <p>{article.title}</p>
                </Link>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default ThumbnailListItem;
