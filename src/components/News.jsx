import React from "react";
import SingleNews from "./SingleNews";

const News = () => {
  return (
    <div className="bg-very-dark-blue p-5 h-full flex flex-col justify-between">
      <h1 className="text-primary-orange font-bold text-4xl pt-4">New</h1>
      {/* News inner container */}
      <div className="flex flex-col justify-between h-full">
        {/* New single container */}
        <SingleNews
          newsTitle="Hydrogen VS Electric Cars"
          newsText="Will hydrogen-fueled cars ever catch up to EVs?"
        />
        <SingleNews
          newsTitle="The Downsides of AI Artistry"
          newsText="What are the possible adverse effects of on-demand AI image generation?"
        />
        <SingleNews
          newsTitle="Is VC Funding Drying Up?"
          newsText="Private funding by VC firms is down 50% YOY. We take a look at what that means."
        />
      </div>
    </div>
  );
};

export default News;
