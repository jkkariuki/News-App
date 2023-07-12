import React from "react";
import { useState } from "react";
import tree from "../imgs/randomtree.jpg";
import MoreHeadlines from "../components/MoreHeadlines";
import UnorderedList from "../components/UnorderedList";
import headlines from "../testArticles";

import Layout1 from "../components/Layout1";

function Home(props) {
  // const [topHeadlines, setTopHeadlines] = useState(headlines);
  // const category = "top-news";

  return (
    <Layout1 articles={headlines} category={props.category} />
    // <div className="container mainContentSection">
    //   <div className="row">
    //     <div className="col-lg-6">
    //       <h1>Test Heading</h1>
    //       <img className="smallImgs" src={tree} />
    //       <h2>Secondary Title</h2>
    //       <UnorderedList />
    //     </div>
    //     <div className="col-lg-3">
    //       <img className="smallImgs" src={tree} />
    //       <h2>Test Heading</h2>
    //       <UnorderedList />
    //     </div>
    //     <div className="col-lg-3 ">
    //       <img className="smallImgs" src={tree} />
    //       <h2>Test Heading</h2>
    //       <UnorderedList />
    //     </div>
    //   </div>
    //   <h1>More Headlines</h1>
    //   <MoreHeadlines />
    // </div>
  );
}

export default Home;
