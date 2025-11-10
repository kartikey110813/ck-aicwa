"use client";
import React, { useState } from "react";
import { Play, Expand, Calendar } from "lucide-react";

interface Video {
  id: number;
  title: string;
  description: string;
  date: string;
  thumbnail: string;
}

const videos: Video[] = [
  {
    id: 1,
    title:
      "Meeting with hon Shri Amit Deshmukh [Cultural Minister – Maharashtra state]",
    description:
      "Discussion on future initiatives for the film industry and workers' welfare.",
    date: "8 December 2021",
    thumbnail: "/images/videoGallery/4.png",
  },
  {
    id: 2,
    title: "Interview with AICWA President",
    description:
      "A deep dive into the growth of Indian cinema workers' rights.",
    date: "12 January 2022",
    thumbnail: "/images/videoGallery/1.png",
  },
  {
    id: 3,
    title: "Union Office Discussion",
    description: "Meeting on membership reforms and cultural events planning.",
    date: "25 February 2022",
    thumbnail: "/images/videoGallery/2.jpg",
  },
  {
    id: 4,
    title: "Press Meet Highlights",
    description:
      "Media interaction about upcoming events and awareness drives.",
    date: "10 March 2022",
    thumbnail: "/images/videoGallery/3.png",
  },
  {
    id: 5,
    title: "Press Meet Highlights",
    description:
      "Media interaction about upcoming events and awareness drives.",
    date: "10 March 2022",
    thumbnail: "/images/videoGallery/4.png",
  },
  {
    id: 6,
    title: "Press Meet Highlights",
    description:
      "Media interaction about upcoming events and awareness drives.",
    date: "10 March 2022",
    thumbnail: "/images/videoGallery/1.png",
  },
  {
    id: 7,
    title: "Press Meet Highlights",
    description:
      "Media interaction about upcoming events and awareness drives.",
    date: "10 March 2022",
    thumbnail: "/images/videoGallery/2.jpg",
  },
];

const VideoArticles = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  return (
    <section className="text-center text-white relative">
      {/* Video Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4">
        {videos.slice(0, 4).map((video) => (
          <div
            key={video.id}
            onClick={() => setSelectedVideo(video)}
            className="relative cursor-pointer group overflow-hidden border border-[#e33b3b]"
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-40 object-cover group-hover:opacity-80 transition-opacity"
            />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3">
        {videos.slice(4, 7).map((video) => (
          <div
            key={video.id}
            onClick={() => setSelectedVideo(video)}
            className="relative cursor-pointer group overflow-hidden border border-[#e33b3b]"
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-40 object-cover group-hover:opacity-80 transition-opacity"
            />
          </div>
        ))}
      </div>

      {/* Overlay Preview */}
      {selectedVideo && (
        <div
          onClick={() => setSelectedVideo(null)}
          className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 px-4"
        >
          {/* Stop click propagation inside modal */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative rounded-xl shadow-2xl max-w-3xl w-full p-6"
          >
            {/* Video Thumbnail */}
            <div className="relative mb-6">
              <img
                src={selectedVideo.thumbnail}
                alt={selectedVideo.title}
                className="w-full h-[400px] object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Play className="w-16 h-16 text-white bg-[#00000090] rounded-full p-3" />
              </div>
              <button
                className="absolute top-4 right-4 bg-[#f7b733] hover:bg-[#ffcd4d] text-black rounded-full p-2 shadow-md transition"
                title="Expand Video"
              >
                <Expand size={22} />
              </button>
            </div>

            {/* Title & Description */}
            <p className="text-[20px] font-semibold text-[#F5E6CA] mb-3">
              {selectedVideo.title}
            </p>

            {/* SVG Timeline Ruler */}
            <div className="relative mt-4 mb-10">
              {/* Date & Title below */}
              <div className="flex flex-row items-center justify-around text-sm text-[#f5e6ca]">
                <div className="flex items-center gap-2 text-[#f4c9b6] mb-1">
                  <Calendar /> <span>{selectedVideo.date}</span>
                </div>
                |
                <span className="text-center font-medium">
                  {selectedVideo.description}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="mt-10 hidden md:block">
        <svg
          viewBox="0 0 800 80"
          className="w-full h-full mx-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Base line */}
          <line
            x1="0"
            y1="40"
            x2="800"
            y2="40"
            stroke="#EDD8B5"
            strokeWidth="2"
          />
          {/* Red ticks */}
          {Array.from({ length: 100 }).map((_, i) => (
            <line
              key={i}
              x1={i * 8}
              y1={i % 5 === 0 ? 25 : 35}
              x2={i * 8}
              y2="40"
              stroke="#EDD8B5"
              strokeWidth="2"
            />
          ))}
          {/* Center arrow pointer */}
          <polygon points="400,10 410,40 390,40" fill="#EDD8B5" />
        </svg>
      </div>
    </section>
  );
};

export default VideoArticles;
