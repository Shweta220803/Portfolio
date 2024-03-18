import React from 'react';

const Project = ({ title, description, imageUrl, projectUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={projectUrl} className="btn btn-primary">View Project</a>
      </div>
    </div>
  );
};

const Projects = () => {
  // Example project details
  const projects = [
    {
      title: "Project 1",
      description: "Description of project 1",
      imageUrl: "/images/project1.jpg",
      projectUrl: "https://example.com/project1"
    },
    {
      title: "Project 2",
      description: "Description of project 2",
      imageUrl: "/images/project2.jpg",
      projectUrl: "https://example.com/project2"
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="container">
      <h2 className='text-white text-center'>Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-4" key={index}>
            <Project {...project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
