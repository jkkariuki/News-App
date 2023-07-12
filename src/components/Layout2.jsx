import React, { useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import ThumbnailListItem from "./ThumbnailListItem";
import ArticleCardList from "./ArticleCardList";
import MoreHeadlines from "./MoreHeadlines";

function Layout2(props) {
  const [articles, setArticles] = useState(props.articles);
  const pageHeading =
    props.category.charAt(0).toUpperCase() + props.category.slice(1);
  return (
    <div className="container">
      <h1 className="heading">{pageHeading}</h1>
      <div className="row">
        <div className="col-lg-6">
          <Link
            className="link"
            to={
              "/" +
              props.category +
              "/articles/" +
              articles[0].publishedAt.substring(8, 19)
            }
          >
            <h1>{articles[0].title}</h1>
            <img className="smallImgs" src={articles[0].urlToImage} />
            <h4>
              {articles[0].description}
              <span className="timeStamp text-muted">
                --
                {moment
                  .utc(articles[0].publishedAt)
                  .format("MMMM Do YYYY, h:mm:ss a")}
              </span>
            </h4>
          </Link>
          <ul className="sportsUnorderedList">
            <ThumbnailListItem
              articles={articles}
              category={props.category}
              range={{ x: 0, y: 5 }}
            />
          </ul>
        </div>
        <div className="col-lg-3">
          <ArticleCardList
            articles={articles}
            category={props.category}
            range={{ x: 6, y: 10 }}
          />
        </div>
        <div className="col-lg-3">
          <ArticleCardList
            articles={articles}
            category={props.category}
            range={{ x: 11, y: 15 }}
          />
        </div>
      </div>
      <MoreHeadlines headlines={articles} category={props.category} />
    </div>
  );
}

export default Layout2;
