import React from 'react';
import GradientButton from '../Button/gradientbutton';
import Title from '../Title/title';

interface ContactProps { }

const Contact: React.FC<ContactProps> = () => {
  const textboxStyling = "shadow border rounded w-full py-3 px-3 bg-stone-50 text-stone-800 leading-tight focus:outline-none focus:shadow-outline"

  return (
    <>
    <section>
      <Title>Let's Chat</Title>
      <form 
        action="https://getform.io/f/14dd19fb-d529-4d63-9da5-4b2ffb1a0745"
        method="POST"
        className="mx-auto max-w-2xl bg-stone-50 p-6 rounded-xl shadow-lg space-x-4"
      >
        <div className="mb-4">
          <label className='text-stone-900' htmlFor="name">
            Name
          </label>
          <input className={textboxStyling} id="name" type="text" name='name' placeholder="Name" />
        </div>
        <div className="mb-4">
          <label className='text-stone-900' htmlFor="subject">
            Subject
          </label>
          <input className={textboxStyling} id="subject" type="text" name='subject' placeholder="Subject" />
        </div>
        <div className="mb-4">
          <label className='text-stone-900' htmlFor="message">
            Message
          </label>
          <textarea className={textboxStyling} id="message" name='message' placeholder="Message" />
        </div>
        <div className="flex items-center justify-between">
        <GradientButton buttonText='Send' href='#_' />
        </div>
      </form>
    </section>
    </>
  );
}

export default Contact;
