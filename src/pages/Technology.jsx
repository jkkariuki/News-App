import React from "react";
import sportsHeadlines from "../sportsArticles";
import MoreHeadlines from "../components/MoreHeadlines";
import UnorderedList from "../components/UnorderedList";
import Layout1 from "../components/Layout1";
import Layout2 from "../components/Layout2";
import techArticles from "../technologyArticles";

function Technology(props) {
  return <Layout1 articles={techArticles} category={props.category} />;
}

export default Technology;
