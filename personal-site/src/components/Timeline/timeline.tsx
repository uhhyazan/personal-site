import React from 'react';

interface TimelineEvent {
  id: number;
  date: string;
  role: string;
  company: string;
  description: string;
}

const Timeline: React.FC = () => {
  const events: TimelineEvent[] = [
    {
      id: 1,
      date: 'April 2022 - Current',
      role: 'Software Engineer',
      company: 'Slalom Build',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      date: 'June 2021 - March 2022',
      role: 'Associate Consultant',
      company: 'Slalom Build',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    // additional events here
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="relative p-6">
        {events.map((event) => (
        <>
            <div className="absolute -ml-12 z-10 text-gray-500">{event.date}</div>
            <div key={event.id} className="relative mt-6">
                <div className="relative rounded-lg shadow-lg bg-white p-6">
                <h2 className="text-2xl font-bold text-gray-800">{event.role}</h2>
                <h2 className="font-bold text-gray-600">{event.company}</h2>
                <p className="mt-2 text-gray-600">{event.description}</p>
                </div>
            </div>
        </>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
