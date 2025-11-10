"use client";

import React, { useState } from "react";
import VideoArticles from "./VideoArticles";
import NewspaperArticles from "./NewspaperArticles";

const NewsArticles = () => {
  const [activeTab, setActiveTab] = useState<"video" | "newspaper">(
    "newspaper"
  );

  return (
    <section className="bg-[#6b0c0f] text-center py-10">
      <h2 className="text-[46px] text-white mb-2">
        {activeTab === "video" ? "Video Gallery" : "Our Articles"}
      </h2>
      <p className="text-[#f5d9c0] text-[20px] mb-8 max-w-2xl mx-auto">
        All Indian Cine Workers Association (AICWA) is the only association in
        Bollywood affiliated with the Government of Maharashtra.
      </p>

      {/* Tabs */}
      <div className="flex justify-center my-10">
        <div className="flex bg-[#601C1C] border-2 border-[#F5E6DC] rounded-[15px] p-1 overflow-hidden w-[90%] max-w-xs">
          <button
            onClick={() => setActiveTab("newspaper")}
            className={`flex-1 py-3 text-md font-medium transition-all duration-600 rounded-[15px] ${
              activeTab === "newspaper"
                ? "bg-[#F10424] text-[#F5E6DC]"
                : "bg-transparent text-[#F5E6DC]"
            }`}
          >
            Newspaper
          </button>

          <button
            onClick={() => setActiveTab("video")}
            className={`flex-1 py-3 text-md font-medium transition-all duration-600 rounded-[15px] ${
              activeTab === "video"
                ? "bg-[#F10424] text-[#F5E6DC]"
                : "bg-transparent text-[#F5E6DC]"
            }`}
          >
            Video Articles
          </button>
        </div>
      </div>

      {/* Conditional Components */}
      {activeTab === "video" ? <VideoArticles /> : <NewspaperArticles />}
    </section>
  );
};

export default NewsArticles;
