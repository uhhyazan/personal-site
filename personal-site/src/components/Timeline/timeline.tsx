import React from 'react';
import TimelineEvent from '../TimelineEvent/timelineevent';

interface TimelineEvent {
  id: number;
  date: string;
  role: string;
  company: string;
}

const Timeline: React.FC = () => {
  const events: TimelineEvent[] = [
    {
      id: 1,
      date: 'April 2022 - Current',
      role: 'Software Engineer',
      company: 'Slalom Build',
    },
    {
      id: 2,
      date: 'June 2021 - March 2022',
      role: 'Associate Consultant',
      company: 'Slalom Build',
    },
    // additional events here
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="relative p-6">
        {events.map((event) => (
          <>
            <TimelineEvent date={event.date} role={event.role} company={event.company} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
