import React, { useState } from "react";
import { Link } from "react-router-dom";

function UnorderedList(props) {
  //   const [otherArticles, setOtherArticles] = [props.articles];
  const [articles, setArticles] = useState(props.articles);
  const [rangeMin, setRangeMin] = useState(props.range.x);
  const [rangeMax, setRangeMax] = useState(props.range.y);

  //   console.log(otherArticles);

  return (
    <div>
      <ul>
        {articles.map((article, i) => {
          if (i > rangeMin && i <= rangeMax) {
            return (
              <li key={i} className="listArticles">
                <Link
                  className="link"
                  to={
                    "/" +
                    props.category +
                    "/articles/" +
                    article.publishedAt.substring(8, 19)
                  }
                >
                  {article.title}
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}

export default UnorderedList;
