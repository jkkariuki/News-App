import React, { useEffect, useState } from "react";
import moment from "moment";
import headlines from "../testArticles";
import { Link } from "react-router-dom";

function ArticleLayout(props) {
  const categoryArticles = props.categoryArticles;

  console.log(props);

  const [bonusArticles, setBonusArticles] = useState([]);
  const [category, setCategory] = useState(props.category);
  const [random1, setRandom1] = useState({});
  const [random2, setRandom2] = useState({});
  const [catArticles, setCategoryArticles] = useState(categoryArticles);
  const [urlToImage1, setUrlToImage1] = useState("");

  return (
    <div className="container mainArticleContainer">
      <div className="row">
        <div className="col-lg-9">
          <h1 className="articleHeader">{props.article.title}</h1>
          <div>
            <p>{props.article.author}</p>
            <p>
              {moment
                .utc(props.article.publishedAt)
                .format("MMMM Do YYYY, h:mm:ss a")}
            </p>
          </div>
          <img className="mainArticleImg" src={props.article.urlToImage} />
          <span>{props.article.description}</span>
        </div>
        <div className="col-lg-3">
          <span>More Top Stories</span>
          <Link
            className="link"
            // to={
            //   props.category +
            //   "/articles/" +
            //   props.randomArticle1.publishedAt.substring(8, 19)
            // }
          >
            <img
              style={{ width: "100%" }}
              src={props.randomArticle1.urlToImage}
            />
            <p>{props.randomArticle1.title}</p>
          </Link>
          <Link
            className="link"
            to={
              "/${props.category}/articles/${props.randomArticle1.publishedAt.substring(8, 19)}"
            }
          >
            <img
              style={{ width: "100%" }}
              src={props.randomArticle2.urlToImage}
            />
            <p>{props.randomArticle2.title}</p>
          </Link>
        </div>
      </div>
      <div className="row articleContent">
        <div className="col-lg-8">
          <p>
            {moment
              .utc(props.article.publishedAt)
              .format("MMMM Do YYYY, h:mm:ss a")}
            &nbsp;&nbsp;--
            {props.article.content}
            <br />
            <br />
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?
          </p>
        </div>
      </div>
    </div>
  );
}

export default ArticleLayout;
