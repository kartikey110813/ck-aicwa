import { Calendar, MessageSquare, MessageSquareMore } from "lucide-react";
import React from "react";

interface Article {
  id: number;
  title: string;
  date: string;
  comments: number;
  description: string;
  imageUrl: string;
  isVideo?: boolean;
  isFeatured?: boolean;
}

const articles: Article[] = [
  {
    id: 1,
    title:
      "Meeting with hon Shri Gurudas Kamat [Former Home & Telecommunication Minister of India]",
    date: "8 December 2021",
    comments: 2,
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    imageUrl:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80",
    isVideo: true,
    isFeatured: true,
  },
  {
    id: 2,
    title:
      "Meeting with hon Shri Amit Deshmukh [Cultural Minister – Maharashtra state]",
    date: "8 December 2021",
    comments: 2,
    description:
      "It is a long established fact that a reader will be distracted by the readable content.",
    imageUrl:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
    isVideo: true,
  },
  {
    id: 3,
    title:
      "Meeting with hon Shri Amit Deshmukh [Cultural Minister – Maharashtra state]",
    date: "8 December 2021",
    comments: 2,
    description:
      "It is a long established fact that a reader will be distracted by the readable content.",
    imageUrl: "",
    isVideo: false,
  },
  {
    id: 4,
    title:
      "Meeting with hon Shri Amit Deshmukh [Cultural Minister – Maharashtra state]",
    date: "8 December 2021",
    comments: 2,
    description:
      "It is a long established fact that a reader will be distracted by the readable content.",
    imageUrl: "",
    isVideo: false,
  },
  {
    id: 5,
    title:
      "Meeting with hon Shri Amit Deshmukh [Cultural Minister – Maharashtra state]",
    date: "8 December 2021",
    comments: 2,
    description:
      "It is a long established fact that a reader will be distracted by the readable content.",
    imageUrl:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
    isVideo: true,
  },
];

const NewspaperArticles: React.FC = () => {
  return (
    <section className="text-[#fff2e7] min-h-screen px-20">
      {/* Gallery Grid */}
      <div
        className="grid gap-6 md:gap-8"
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
        <div className="flex flex-col gap-6" style={{ gridArea: "left" }}>
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
              className="bg-[#fff2e7] text-[#381d12] border border-[#b6a492] rounded-[11px] relative flex flex-col overflow-hidden p-4"
              style={{ gridArea: "featured" }}
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
        <div className="flex flex-col gap-6" style={{ gridArea: "right" }}>
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
      <div
        className="grid gap-6 md:gap-8"
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
        <div className="flex flex-col gap-6" style={{ gridArea: "left" }}>
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
              className="bg-[#fff2e7] text-[#381d12] border border-[#b6a492] rounded-[11px] relative flex flex-col overflow-hidden p-4"
              style={{ gridArea: "featured" }}
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
        <div className="flex flex-col gap-6" style={{ gridArea: "right" }}>
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

export default NewspaperArticles;
