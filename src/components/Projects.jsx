import React from 'react';

function Projects() {
  return (
    <section id="projects" className="py-12">
      <h2 className="text-2xl font-semibold text-indigo-600">Projects</h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-indigo-600">Project One</h3>
          <p className="mt-2 text-gray-700">A brief description of the project.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-indigo-600">Project Two</h3>
          <p className="mt-2 text-gray-700">A brief description of the project.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-indigo-600">Project Three</h3>
          <p className="mt-2 text-gray-700">A brief description of the project.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
