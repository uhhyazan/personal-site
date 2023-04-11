import React from "react";
import timeline from "../../data/timeline";
import TimelineEvent from "../TimelineEvent/timelineevent";
import Title from "../Title/title";

const Timeline: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto  ">
      <div className="relative p-6">
        <div className="flex w-full justify-between ">
          <Title>Timeline</Title>
          <a
            href="./yazanmuslehresume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start font-semibold"
          >
            View Resume &#x2197;
          </a>
        </div>

        {timeline.map((event) => (
          <>
            <TimelineEvent
              date={event.date}
              role={event.role}
              duration={event.duration}
              description={event.description}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
