import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-12 bg-[#f3e6dd] section-container">
      <h2 className="text-2xl font-semibold text-indigo-600">Contact</h2>
      <p className="mt-4 text-lg text-gray-700">
        Interested in collaborating or learning more about my work? Reach out via email or connect with me on LinkedIn.
      </p>
      <div className="mt-6 flex space-x-6">
        <a href="mailto:your.email@example.com" className="text-indigo-600 hover:underline">Email</a>
        <a href="https://www.linkedin.com/in/yourprofile" className="text-indigo-600 hover:underline">LinkedIn</a>
      </div>
    </section>
  );
}

export default Contact;
