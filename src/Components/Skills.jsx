import React from 'react';

const Skill = ({ name, level }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Skill level: {level}</p>
      </div>
    </div>
  );
};

const Skills = () => {
  // Example skill details
  const skills = [
    { name: "HTML", level: "Advanced" },
    { name: "CSS", level: "Intermediate" },
    { name: "JavaScript", level: "Advanced" },
    { name: "React", level: "Intermediate" },
    // Add more skills as needed
  ];

  return (
    <section id="skills" className="container">
      <h2>Skills</h2>
      <div className="row">
        {skills.map((skill, index) => (
          <div className="col-md-4" key={index}>
            <Skill {...skill} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
