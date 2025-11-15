import { articles } from "@/components/constants";
import { Calendar, MessageSquare, MessageSquareMore } from "lucide-react";
import React from "react";

const NewspaperArticles: React.FC = () => {
  return (
    <section className="text-[#fff2e7] min-h-screen px-20 hidden md:block">
      {/* Gallery Grid */}
      <div
        className="grid gap-6 md:gap-2 mb-2"
        style={{
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gridAutoRows: "minmax(120px, auto)",
          gridTemplateAreas: `
            "left featured right"
            "left featured right"
            "left featured right"
            "left featured right"
          `,
        }}
      >
        {/* Left small articles */}
        <div className="flex flex-col gap-2" style={{ gridArea: "left" }}>
          {articles
            .filter((a) => !a.isFeatured)
            .slice(0, Math.ceil((articles.length - 1) / 2))
            .map((article) => (
              <article
                key={article.id}
                className="bg-[#fff2e7] text-[#381d12] border border-[#b6a492] rounded-[20px] relative flex flex-col overflow-hidden p-4"
              >
                <div className="relative rounded-[20px] overflow-hidden flex-shrink-0">
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
              className="bg-[#fff2e7] text-[#381d12] border border-[#b6a492] rounded-[20px] relative flex flex-col overflow-hidden p-4"
              style={{ gridArea: "featured" }}
            >
              <div className="relative rounded-[20px] overflow-hidden flex-shrink-0">
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
        <div className="flex flex-col gap-2" style={{ gridArea: "right" }}>
          {articles
            .filter((a) => !a.isFeatured)
            .slice(Math.ceil((articles.length - 1) / 2))
            .map((article) => (
              <article
                key={article.id}
                className="bg-[#fff2e7] text-[#381d12] border border-[#b6a492] rounded-[20px] relative flex flex-col overflow-hidden p-4"
              >
                <div className="relative rounded-[20px] overflow-hidden flex-shrink-0">
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
      <div
        className="grid gap-6 md:gap-2"
        style={{
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gridAutoRows: "minmax(120px, auto)",
          gridTemplateAreas: `
            "left featured right"
            "left featured right"
            "left featured right"
            "left featured right"
          `,
        }}
      >
        {/* Left small articles */}
        <div className="flex flex-col gap-2" style={{ gridArea: "left" }}>
          {articles
            .filter((a) => !a.isFeatured)
            .slice(0, Math.ceil((articles.length - 1) / 2))
            .map((article) => (
              <article
                key={article.id}
                className="bg-[#fff2e7] text-[#381d12] border border-[#b6a492] rounded-[20px] relative flex flex-col overflow-hidden p-4"
              >
                <div className="relative rounded-[20px] overflow-hidden flex-shrink-0">
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
              className="bg-[#fff2e7] text-[#381d12] border border-[#b6a492] rounded-[20px] relative flex flex-col overflow-hidden p-4"
              style={{ gridArea: "featured" }}
            >
              <div className="relative rounded-[20px] overflow-hidden flex-shrink-0">
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
        <div className="flex flex-col gap-2" style={{ gridArea: "right" }}>
          {articles
            .filter((a) => !a.isFeatured)
            .slice(Math.ceil((articles.length - 1) / 2))
            .map((article) => (
              <article
                key={article.id}
                className="bg-[#fff2e7] text-[#381d12] border border-[#b6a492] rounded-[20px] relative flex flex-col overflow-hidden p-4"
              >
                <div className="relative rounded-[20px] overflow-hidden flex-shrink-0">
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

export default NewspaperArticles;
