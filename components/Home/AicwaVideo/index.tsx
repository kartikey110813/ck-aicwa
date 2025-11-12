import React from "react";
import HeroScrollVideo from "./scroll-animated-video";

export default function AicwaVideo() {
  return (
    <main>
      <HeroScrollVideo
        title="About AICWA"
        subtitle="Voice of all india's cine workers"
        meta="Founded In • 2015"
        media="https://videos.pexels.com/video-files/6151238/6151238-hd_1920_1080_30fps.mp4"
        overlay={{
          caption: "React Out to Us. We Stand With Every Cine Worker",
          heading: "Our Work Speaks Through Action & Media",
          paragraphs: [
            "Over 150+ Controversies Hendled | 80+ Media Coverages Across Leading News Channels & Publications",
          ],
        }}
        // Force dark theme with custom palette
        // themeMode="system"
      />
      <section style={{ maxHeight: "100vh" }} />
    </main>
  );
}
