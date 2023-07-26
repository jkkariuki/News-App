import React from "react";
import tree from "../imgs/randomtree.jpg";
import { Link } from "react-router-dom";

function MoreHeadlines(props) {
  let headlines = props.headlines;

  return (
    <div className="container">
      <div className="row">
        {headlines.map((headline, i) => {
          if (i > 21 && i < 26) {
            return (
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div class="card">
                  <img
                    class="card-img-top"
                    src={headline.urlToImage}
                    alt="Card image cap"
                  />
                  <Link
                    className="link"
                    to={
                      "/" +
                      props.category +
                      "/articles/" +
                      headline.publishedAt.substring(8, 19)
                    }
                  >
                    <div class="card-body">
                      <p class="card-text">{headline.title}</p>
                    </div>
                  </Link>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default MoreHeadlines;
