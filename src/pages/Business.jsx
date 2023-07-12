import React from "react";
import businessArticles from "../businessArticles";
import MoreHeadlines from "../components/MoreHeadlines";
import UnorderedList from "../components/UnorderedList";
import Layout1 from "../components/Layout1";
import Layout2 from "../components/Layout2";

function Business(props) {
  console.log(props);
  return <Layout2 articles={businessArticles} category={props.category} />;
}

export default Business;
