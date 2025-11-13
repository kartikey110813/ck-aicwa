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
    title: "Cultural Event Highlights",
    description: "Coverage of film workers' annual cultural event.",
    date: "18 March 2022",
    thumbnail: "/images/videoGallery/1.png",
  },
  {
    id: 6,
    title: "Team Gathering",
    description: "An insight into our leadership meeting.",
    date: "22 March 2022",
    thumbnail: "/images/videoGallery/2.jpg",
  },
];

const VideoArticles = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  // Duplicate videos to make seamless looping
  const loopedVideos = [...videos, ...videos];

  return (
    <section className="text-center text-white relative overflow-hidden py-10">
      {/* Infinite Slider Container */}
      <div className="w-full overflow-hidden relative">
        <div className="flex animate-scroll-slow h-[50vh]">
          {loopedVideos.map((video, idx) => (
            <div
              key={`${video.id}-${idx}`}
              onClick={() => setSelectedVideo(video)}
              className="w-[300px] sm:w-[300px] md:w-[500px] mx-2 cursor-pointer group overflow-hidden border border-[#e33b3b] rounded-lg h-full"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="h-full w-full object-cover group-hover:opacity-80 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Overlay Preview */}
      {selectedVideo && (
        <div
          onClick={() => setSelectedVideo(null)}
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 px-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative rounded-xl shadow-2xl max-w-3xl w-full p-6 bg-[#EDD8B5]"
          >
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
                className="absolute top-4 right-4 bg-[#6b0c0f] hover:bg-[#ffcd4d] text-black rounded-full p-2 shadow-md transition text-white"
                title="Expand Video"
                onClick={() => setSelectedVideo(null)}
              >
                Close
              </button>
            </div>

            <p className="text-[20px] font-semibold text-[#6b0c0f] mb-3">
              {selectedVideo.title}
            </p>

            <div className="flex flex-col md:flex-row items-center justify-around text-sm text-[#6b0c0f]">
              <div className="flex items-center gap-2 text-[#6b0c0f] mb-1">
                <Calendar /> <span>{selectedVideo.date}</span>
              </div>
              |
              <span className="text-center font-medium text-[#6b0c0f]">
                {selectedVideo.description}
              </span>
            </div>
            <div className="flex justify-end mt-5">
              <button
                className="bg-[#6b0c0f] hover:bg-[#ffcd4d] text-black rounded-full px-5 py-2 shadow-md transition text-white"
                title="Expand Video"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoArticles;
