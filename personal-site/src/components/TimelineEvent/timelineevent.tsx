import React from 'react';

interface TimelineEventProps {
  date: string;
  role: string;
  duration: string;
  description: string;
}

const TimelineEvent: React.FC<TimelineEventProps> = ({ date, role, duration, description }) => {
  return (
    <>
    <ol className="flex flex-col md:flex-row relative border-l border-stone-500">
      <li className="mb-10 ml-4">
      <div className="absolute w-3 h-3 bg-stone-600 rounded-full mt-1.5 -left-1.5 border" />
      <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
        <span className="inline-block px-2 py-1 font-semibold text-white bg-stone-900 rounded-md">
          {date}
        </span>
        <h3 className="text-lg font-semibold text-stone-900 ">
          {role}
        </h3>
        <div className="my-1 text-sm font-normal leading-none text-stone-700 ">
          {duration}
        </div>
      </p>
      <p className="my-2 text-base font-normal text-stone-800 ">
        {description}
      </p>      
      </li>
    </ol>

    </>
  );
};

export default TimelineEvent;

