import React from "react";
import MoreHeadlines from "../components/MoreHeadlines";
import UnorderedList from "../components/UnorderedList";
import Layout1 from "../components/Layout1";
import Layout2 from "../components/Layout2";
import entertainmentArticles from "../entertainmentArticles";

function Entertainment(props) {
  return <Layout1 articles={entertainmentArticles} category={props.category} />;
}

export default Entertainment;
