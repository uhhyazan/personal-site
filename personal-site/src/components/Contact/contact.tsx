import React from 'react';
import Title from '../Title/title';

interface ContactProps { }

const Contact: React.FC<ContactProps> = () => {
  const textboxStyling = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

  return (
    <>
    <section>
      <Title>Let's Chat</Title>
      <form 
        action="https://getform.io/f/14dd19fb-d529-4d63-9da5-4b2ffb1a0745"
        method="POST"
        className="mx-auto max-w-2xl bg-white p-6 rounded-xl shadow-lg space-x-4"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input className={textboxStyling} id="name" type="text" name='name' placeholder="Name" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
            Subject
          </label>
          <input className={textboxStyling} id="subject" type="text" name='subject' placeholder="Subject" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea className={textboxStyling} id="message" name='message' placeholder="Message" />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Send
          </button>
        </div>
      </form>
    </section>
    </>
  );
}

export default Contact;
