import { articles } from "@/components/constants";
import { Calendar, MessageSquareMore } from "lucide-react";
import React from "react";

const NewspaperArticlesMobile = () => {
  return (
    <section className="text-[#fff2e7] min-h-screen px-6 block md:hidden">
      {/* Gallery Grid */}
      <div className="">
        {/* Left small articles */}
        <div className="flex flex-col gap-6 mb-6">
          {articles
            .filter((a) => !a.isFeatured)
            .slice(0, Math.ceil((articles.length - 1) / 2))
            .map((article) => (
              <article
                key={article.id}
                className="bg-[#fff2e7] text-[#381d12] border border-[#b6a492] rounded-[11px] relative flex flex-col overflow-hidden p-4"
              >
                <div className="relative rounded-[11px] overflow-hidden flex-shrink-0">
                  {article.imageUrl && (
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-full object-cover pb-6"
                    />
                  )}
                  {article.isVideo && (
                    <button
                      aria-label="Play video"
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                    bg-white/80 rounded-full p-3 hover:bg-white transition"
                    >
                      <svg
                        className="w-6 h-6 text-[#711418]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  )}
                </div>
                <div className="flex flex-col gap-3 text-start flex-grow">
                  <p className="text-[20px] text-black">{article.title}</p>
                  <div className="flex items-center text-black text-[16px] font-light space-x-3">
                    <div className="flex items-center space-x-1">
                      <Calendar size={"16px"} color="#DC044C" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageSquareMore size={"16px"} color="#DC044C" />
                      <span>{article.comments} comments</span>
                    </div>
                  </div>
                  <p className="text-[16px] font-light text-black">
                    {article.description}
                  </p>
                </div>
              </article>
            ))}
        </div>

        {/* Featured Large Article in Middle */}
        {articles
          .filter((a) => a.isFeatured)
          .map((article) => (
            <article
              key={article.id}
              className="bg-[#fff2e7] text-[#381d12] border border-[#b6a492] rounded-[11px] relative flex flex-col overflow-hidden p-4 mb-6"
            >
              <div className="relative rounded-[11px] overflow-hidden flex-shrink-0">
                {article.imageUrl && (
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover pb-6"
                  />
                )}
                {article.isVideo && (
                  <button
                    aria-label="Play video"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                    bg-white/80 rounded-full p-3 hover:bg-white transition"
                  >
                    <svg
                      className="w-6 h-6 text-[#711418]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                )}
              </div>
              <div className="flex flex-col justify-around gap-3 text-start flex-grow">
                <p className="text-[20px] text-black">{article.title}</p>
                <div className="flex items-center text-black text-[16px] font-light space-x-3">
                  <div className="flex items-center space-x-1">
                    <Calendar size={"16px"} color="#DC044C" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MessageSquareMore size={"16px"} color="#DC044C" />
                    <span>{article.comments} comments</span>
                  </div>
                </div>
                <p className="text-[16px] font-light text-black">
                  {article.description}
                </p>
              </div>
            </article>
          ))}

        {/* Right small articles */}
        <div className="flex flex-col gap-6">
          {articles
            .filter((a) => !a.isFeatured)
            .slice(Math.ceil((articles.length - 1) / 2))
            .map((article) => (
              <article
                key={article.id}
                className="bg-[#fff2e7] text-[#381d12] border border-[#b6a492] rounded-[11px] relative flex flex-col overflow-hidden p-4"
              >
                <div className="relative rounded-[11px] overflow-hidden flex-shrink-0">
                  {article.imageUrl && (
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-full object-cover pb-6"
                    />
                  )}
                  {article.isVideo && (
                    <button
                      aria-label="Play video"
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                    bg-white/80 rounded-full p-3 hover:bg-white transition"
                    >
                      <svg
                        className="w-6 h-6 text-[#711418]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  )}
                </div>
                <div className="flex flex-col gap-3 text-start flex-grow">
                  <p className="text-[20px] text-black">{article.title}</p>
                  <div className="flex items-center text-black text-[16px] font-light space-x-3">
                    <div className="flex items-center space-x-1">
                      <Calendar size={"16px"} color="#DC044C" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageSquareMore size={"16px"} color="#DC044C" />
                      <span>{article.comments} comments</span>
                    </div>
                  </div>
                  <p className="text-[16px] font-light text-black">
                    {article.description}
                  </p>
                </div>
              </article>
            ))}
        </div>
      </div>
      <br />
      <div className="">
        {/* Left small articles */}
        <div className="flex flex-col gap-6 mb-6">
          {articles
            .filter((a) => !a.isFeatured)
            .slice(0, Math.ceil((articles.length - 1) / 2))
            .map((article) => (
              <article
                key={article.id}
                className="bg-[#fff2e7] text-[#381d12] border border-[#b6a492] rounded-[11px] relative flex flex-col overflow-hidden p-4"
              >
                <div className="relative rounded-[11px] overflow-hidden flex-shrink-0">
                  {article.imageUrl && (
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-full object-cover pb-6"
                    />
                  )}
                  {article.isVideo && (
                    <button
                      aria-label="Play video"
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                    bg-white/80 rounded-full p-3 hover:bg-white transition"
                    >
                      <svg
                        className="w-6 h-6 text-[#711418]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  )}
                </div>
                <div className="flex flex-col gap-3 text-start flex-grow">
                  <p className="text-[20px] text-black">{article.title}</p>
                  <div className="flex items-center text-black text-[16px] font-light space-x-3">
                    <div className="flex items-center space-x-1">
                      <Calendar size={"16px"} color="#DC044C" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageSquareMore size={"16px"} color="#DC044C" />
                      <span>{article.comments} comments</span>
                    </div>
                  </div>
                  <p className="text-[16px] font-light text-black">
                    {article.description}
                  </p>
                </div>
              </article>
            ))}
        </div>

        {/* Featured Large Article in Middle */}
        {articles
          .filter((a) => a.isFeatured)
          .map((article) => (
            <article
              key={article.id}
              className="bg-[#fff2e7] text-[#381d12] border border-[#b6a492] rounded-[11px] relative flex flex-col overflow-hidden p-4 mb-6"
            >
              <div className="relative rounded-[11px] overflow-hidden flex-shrink-0">
                {article.imageUrl && (
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover pb-6"
                  />
                )}
                {article.isVideo && (
                  <button
                    aria-label="Play video"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                    bg-white/80 rounded-full p-3 hover:bg-white transition"
                  >
                    <svg
                      className="w-6 h-6 text-[#711418]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                )}
              </div>
              <div className="flex flex-col justify-around gap-3 text-start flex-grow">
                <p className="text-[20px] text-black">{article.title}</p>
                <div className="flex items-center text-black text-[16px] font-light space-x-3">
                  <div className="flex items-center space-x-1">
                    <Calendar size={"16px"} color="#DC044C" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MessageSquareMore size={"16px"} color="#DC044C" />
                    <span>{article.comments} comments</span>
                  </div>
                </div>
                <p className="text-[16px] font-light text-black">
                  {article.description}
                </p>
              </div>
            </article>
          ))}

        {/* Right small articles */}
        <div className="flex flex-col gap-6">
          {articles
            .filter((a) => !a.isFeatured)
            .slice(Math.ceil((articles.length - 1) / 2))
            .map((article) => (
              <article
                key={article.id}
                className="bg-[#fff2e7] text-[#381d12] border border-[#b6a492] rounded-[11px] relative flex flex-col overflow-hidden p-4"
              >
                <div className="relative rounded-[11px] overflow-hidden flex-shrink-0">
                  {article.imageUrl && (
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-full object-cover pb-6"
                    />
                  )}
                  {article.isVideo && (
                    <button
                      aria-label="Play video"
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                    bg-white/80 rounded-full p-3 hover:bg-white transition"
                    >
                      <svg
                        className="w-6 h-6 text-[#711418]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  )}
                </div>
                <div className="flex flex-col gap-3 text-start flex-grow">
                  <p className="text-[20px] text-black">{article.title}</p>
                  <div className="flex items-center text-black text-[16px] font-light space-x-3">
                    <div className="flex items-center space-x-1">
                      <Calendar size={"16px"} color="#DC044C" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageSquareMore size={"16px"} color="#DC044C" />
                      <span>{article.comments} comments</span>
                    </div>
                  </div>
                  <p className="text-[16px] font-light text-black">
                    {article.description}
                  </p>
                </div>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
};

export default NewspaperArticlesMobile;
