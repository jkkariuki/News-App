import React from "react";
import { useState } from "react";
import tree from "../imgs/randomtree.jpg";
import MoreHeadlines from "../components/MoreHeadlines";
import UnorderedList from "../components/UnorderedList";
import headlines from "../testArticles";

import Layout1 from "../components/Layout1";

function Home(props) {
  return <Layout1 articles={headlines} category={props.category} />;
}

export default Home;
