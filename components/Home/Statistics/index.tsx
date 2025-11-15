import { StatsCard } from "./activity-stats-card";
import { Activity } from "lucide-react";

export default function Statistics() {
  return (
    <div className="md:h-[30vh] h-[100vh] w-full bg-[#0b0c10]">
      <div className="flex md:flex-row flex-col items-center justify-between">
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
    </div>
  );
}
