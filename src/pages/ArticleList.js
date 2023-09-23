import React from "react";
import ArticleContent from "./ArticleContent";
import { Link } from "react-router-dom";
import Articles from "../components/Articles";

const ArticleList = () => {
  return (
    <div>
      <h1 className="sm:text-4xl text-2xl font-bold my-6 text-gray-900">
        ArticleList
      </h1>
      {/* Container having all articles */}
      <div className="container py-4 mx-auto">

        {/* Wrapping all boxes */}
        <div className="flex flex-wrap -m-4">
          <Articles articles={ArticleContent}/>
        </div>
      </div>
    </div>
  );
};

export default ArticleList;
