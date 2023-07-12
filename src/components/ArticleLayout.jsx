import React, { useEffect, useState } from "react";
import moment from "moment";
import headlines from "../testArticles";

function ArticleLayout(props) {
  console.log(props);

  const randomInt = function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
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
          <img style={{ width: "100%" }} src={headlines[0].urlToImage} />
          <p>{headlines[0].title}</p>
          <img style={{ width: "100%" }} src={headlines[1].urlToImage} />
          <p>{headlines[1].title}</p>
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
