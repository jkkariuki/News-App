import React from "react";
import sportsHeadlines from "../sportsArticles";
import MoreHeadlines from "../components/MoreHeadlines";
import UnorderedList from "../components/UnorderedList";
import Layout1 from "../components/Layout1";
import Layout2 from "../components/Layout2";

function Sports(props) {
  return <Layout2 articles={sportsHeadlines} category={props.category} />;
}

export default Sports;
