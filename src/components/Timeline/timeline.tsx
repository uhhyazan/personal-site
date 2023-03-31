import React from 'react';
import timeline from '../../data/timeline';
import TimelineEvent from '../TimelineEvent/timelineevent';
import Title from '../Title/title';

const Timeline: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto  ">
      <div className="relative p-6">
      <Title>Timeline</Title>
        {timeline.map((event) => (
          <>
            <TimelineEvent date={event.date} role={event.role} duration={event.duration} description={event.description} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
