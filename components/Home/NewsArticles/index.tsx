"use client";

import React, { useState } from "react";
import VideoArticles from "./VideoArticles";
import NewspaperArticles from "./NewspaperArticles";
import NewspaperArticlesMobile from "./NewspaperArticlesMobile";
import { VideoArticlesNew } from "./VideoArticlesNew/index";

const NewsArticles = () => {
  const [activeTab, setActiveTab] = useState<"video" | "newspaper">(
    "newspaper"
  );
  return (
    <section className="bg-[#6b0c0f] text-center py-10 min-h-[100vh]">
      {/* <h2 className="text-[36px] text-white mb-2 leading-[20px]">
        {"Voice & Views"}
      </h2>
      <p className="text-[#f5d9c0] text-[18px] mb-8 max-w-2xl mx-auto">
        AICWA in Action — Advocating Justice, Amplifying Voices.
      </p> */}
      <div>
        <h3 className="text-[36px] text-[#EDD8B5] mb-8 leading-[0px]">
          Voice & Views
        </h3>
        <p className="sm:text-[18px] lg:text-[18px] text-[#EDD8B5]">
          AICWA in Action — Advocating Justice, Amplifying Voices.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center my-10">
        <div className="flex bg-[#601C1C] border border-[#F5E6DC] rounded-[20px] p-1 overflow-hidden w-[90%] max-w-md">
          <button
            onClick={() => setActiveTab("newspaper")}
            className={`flex-1 py-3 text-[18px] transition-all duration-600 rounded-[20px] ${
              activeTab === "newspaper"
                ? "bg-[#F10424] text-[#F5E6DC]"
                : "bg-transparent text-[#F5E6DC]"
            }`}
          >
            Newspaper Coverage
          </button>

          <button
            onClick={() => setActiveTab("video")}
            className={`flex-1 py-3 text-[18px] transition-all duration-600 rounded-[15px] ${
              activeTab === "video"
                ? "bg-[#F10424] text-[#F5E6DC]"
                : "bg-transparent text-[#F5E6DC]"
            }`}
          >
            Media Coverage
          </button>
        </div>
      </div>

      {/* Conditional Components */}
      {activeTab === "video" ? (
        <VideoArticlesNew />
      ) : (
        <>
          <NewspaperArticlesMobile />
          <NewspaperArticles />
        </>
      )}
    </section>
  );
};

export default NewsArticles;
