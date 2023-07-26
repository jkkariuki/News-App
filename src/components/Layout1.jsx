import React from "react";
import { useState } from "react";
import UnorderedList from "./UnorderedList";
import tree from "../imgs/randomtree.jpg";
import MoreHeadlines from "./MoreHeadlines";
import moment from "moment/moment";
import { Link } from "react-router-dom";

function Layout1(props) {
  const [headlines, setHeadlines] = useState(props.articles);
  const pageHeading =
    props.category.charAt(0).toUpperCase() + props.category.slice(1);

  var fourToEight = [];
  var nineToThirtn = [];
  var fourTnToEightn = [];

  function setOtherArticles() {
    fourToEight = headlines.slice(3, 8);
    nineToThirtn = headlines.slice(9, 15);
    fourTnToEightn = headlines.slice(16, 21);
  }

  setOtherArticles();

  return (
    <div className="container mainContentSection">
      <h1 className="heading">{pageHeading}</h1>
      <div className="row">
        <div className="col-lg-6">
          <Link
            className="link"
            to={
              "/" +
              props.category +
              "/articles/" +
              headlines[0].publishedAt.substring(8, 19)
            }
          >
            <h1>{headlines[0].title}</h1>
          </Link>
          <Link
            className="link"
            to={
              "/" +
              props.category +
              "/articles/" +
              headlines[0].publishedAt.substring(8, 19)
            }
          >
            <img className="smallImgs" src={headlines[0].urlToImage} />
            <h4>
              {headlines[0].description}
              <span className="timeStamp text-muted">
                --
                {moment
                  .utc(headlines[0].publishedAt)
                  .format("MMMM Do YYYY, h:mm:ss a")}
              </span>
            </h4>
          </Link>

          <UnorderedList
            articles={headlines}
            category={props.category}
            range={{ x: 3, y: 8 }}
          />
        </div>
        <div className="col-lg-3">
          <Link
            className="link"
            to={
              "/" +
              props.category +
              "/articles/" +
              headlines[1].publishedAt.substring(8, 19)
            }
          >
            <img className="smallImgs" src={headlines[1].urlToImage} />
            <h4>{headlines[1].title}</h4>
          </Link>
          <UnorderedList
            articles={headlines}
            category={props.category}
            range={{ x: 9, y: 14 }}
          />
        </div>
        <div className="col-lg-3 ">
          <Link
            className="link"
            to={
              "/" +
              props.category +
              "/articles/" +
              headlines[2].publishedAt.substring(8, 19)
            }
          >
            <img className="smallImgs" src={headlines[2].urlToImage} />
            <h4>{headlines[2].title}</h4>
          </Link>
          <UnorderedList
            articles={headlines}
            category={props.category}
            range={{ x: 15, y: 20 }}
          />
        </div>
      </div>
      <h1>More Headlines</h1>
      <MoreHeadlines headlines={props.articles} category={props.category} />
    </div>
  );
}

export default Layout1;
