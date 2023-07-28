import React from "react";

const SingleNews = ({ newsTitle, newsText }) => {
  return (
    <div className="single-news-border-bottom h-full flex flex-col justify-center">
      <h2 className="text-off-white font-bold text-xl py-2 cursor-pointer hover:text-primary-orange duration-200">
        {newsTitle}
      </h2>
      <p className="text-grayish-blue">{newsText}</p>
    </div>
  );
};

export default SingleNews;
