import React from "react";
import HeroScrollVideo from "./scroll-animated-video";

export default function AicwaVideo() {
  return (
    <main>
      <HeroScrollVideo
        title="About AICWA"
        subtitle="Subtitle"
        meta="Founded In• 2025"
        media="https://videos.pexels.com/video-files/6151238/6151238-hd_1920_1080_30fps.mp4"
        overlay={{
          caption: "PROJECT • 07",
          heading: "Clarity in Motion",
          paragraphs: [
            "A focused reel highlighting interaction, craft, and intent.",
          ],
        }}
        // Force dark theme with custom palette
        // themeMode="system"
      />
      <section style={{ maxHeight: "100vh" }} />
    </main>
  );
}
