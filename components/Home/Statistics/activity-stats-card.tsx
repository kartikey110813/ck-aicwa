"use client";

import * as React from "react";
import { animate, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatsCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  title: string;
  metric: number;
  metricUnit?: string;
  subtext: string;
  iconContainerClassName?: string;
}

const StatsCard = React.forwardRef<HTMLDivElement, StatsCardProps>(
  (
    {
      className,
      icon,
      title,
      metric,
      metricUnit,
      subtext,
      iconContainerClassName,
      ...props
    },
    ref
  ) => {
    const metricRef = React.useRef<HTMLHeadingElement>(null);
    const containerRef = React.useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-50px" });
    // `once: true` → triggers only once
    // `margin` → starts animation slightly before it's fully in view

    React.useEffect(() => {
      if (!isInView) return;
      const node = metricRef.current;
      if (!node) return;

      const controls = animate(0, metric, {
        duration: 1.5,
        ease: "easeOut",
        onUpdate(value) {
          node.textContent = value.toFixed(0);
        },
      });

      return () => controls.stop();
    }, [isInView, metric]);

    return (
      <div
        ref={containerRef}
        className={cn(
          "flex w-full h-full max-w-xs flex-col justify-start items-center mx-auto gap-4 p-6 text-card-foreground text-[#EDD8B5]",
          className
        )}
        {...props}
      >
        {/* Header */}
        <div className="flex items-center gap-4"></div>

        {/* Metric */}
        <div className="flex items-baseline gap-1">
          <p
            ref={metricRef}
            className="text-5xl tracking-tighter md:text-6xl"
            aria-live="polite"
            aria-atomic="true"
          >
            0
          </p>
          {metricUnit && (
            <span className="text-4xl text-muted-foreground md:text-5xl">
              {metricUnit}
            </span>
          )}
        </div>

        {/* Subtext */}
        <p className="text-base text-muted-foreground">{subtext}</p>
      </div>
    );
  }
);
StatsCard.displayName = "StatsCard";

export { StatsCard };
