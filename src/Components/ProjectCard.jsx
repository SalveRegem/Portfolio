import React from "react";
import projects from "../data/project.json";

const PortfolioSection = () => {
  return (
  <section className="bg-white dark:bg-gray-900">
      <div className="md:container  py-10 md:mx-auto">
        <h1 id="project" className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          My Portfolio
        </h1>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">
        {projects.map((project) => (
      <a
        href={project.vercelLink}
        target="_blank"
        rel="noopener noreferrer"
        key={project.id}
        className="relative overflow-hidden group"
      >
        
        <div
          className="items-end overflow-hidden bg-cover rounded-lg h-96 transform transition-transform duration-300 ease-in-out group-hover:rotate-x-0 group-hover:rotate-y-180"
          style={{
            backgroundImage: `url(${project.images})`,
          }}
        >
          {/* Contenu visible au premier plan */}
          <div className="absolute inset-0 w-full h-full bg-black bg-opacity-50 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg">
              <h2 className="mt-4 text-xl font-semibold capitalize text-white">
                {project.title}
              </h2>
              {project.technologies && (
              <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase">
                {project.technologies.join(', ')}
              </p>
            )}
              <p className="mt-2 text-lg text-white">
                {project.description}
              </p>
            </div>
        </div>
      </div>
    </a>
  ))}
</div>
      </div>
    </section>
  );
};

export default PortfolioSection;