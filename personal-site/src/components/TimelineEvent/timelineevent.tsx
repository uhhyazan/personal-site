import React from 'react';

interface TimelineEventProps {
  date: string;
  role: string;
  company: string;
}

const TimelineEvent: React.FC<TimelineEventProps> = ({ date, role, company }) => {
  return (
    <>
      <div className="absolute -ml-12 z-10 text-gray-500">{date}</div>
      <div className="relative mt-6">
        <div className="relative  bg-white p-6">
          <h2 className="text-2xl font-bold text-gray-800">{role}</h2>
          <h2 className="font-bold text-gray-600">{company}</h2>
        </div>
      </div>
    </>
  );
};

export default TimelineEvent;

