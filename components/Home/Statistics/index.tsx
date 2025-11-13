import { StatsCard } from "./activity-stats-card";
import { Activity } from "lucide-react";

export default function Statistics() {
  return (
    <div className="flex md:flex-row flex-col md:h-[50vh] h-[100vh] w-full items-center justify-center bg-gradient-to-b from-[#0b0c10] from-0% via-[#0b0c10] via-70% to-[#EDD8B5] to-100%">
      <StatsCard
        title=""
        metric={4000}
        metricUnit="+"
        subtext="Controversies Handled"
        icon={<Activity className="h-6 w-6" />}
        iconContainerClassName="bg-indigo-500 text-white"
      />
      <StatsCard
        title=""
        metric={1000}
        metricUnit="+"
        subtext="Controversies Handled"
        icon={<Activity className="h-6 w-6" />}
        iconContainerClassName="bg-indigo-500 text-white"
      />
      <StatsCard
        title=""
        metric={500}
        metricUnit="+"
        subtext="Controversies Handled"
        icon={<Activity className="h-6 w-6" />}
        iconContainerClassName="bg-indigo-500 text-white"
      />
    </div>
  );
}
