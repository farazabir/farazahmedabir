import React from 'react';
import SkillBar from './SkillBar';

const skills = [
  { skill: 'FLUTTER', percentage: 70 },
  { skill: 'DART', percentage: 60 },
  { skill: 'UNITY', percentage: 80},
  { skill: 'C#', percentage: 50},
  { skill: 'HTML', percentage: 90 },
  { skill: 'HTML', percentage: 90 },
  { skill: 'HTML', percentage: 90 },
  { skill: 'CSS', percentage: 80 },
  { skill: 'JavaScript', percentage: 70 },
  { skill: 'React', percentage: 60 },
  { skill: 'Node.js', percentage: 50 },
  { skill: 'MongoDB', percentage: 40 },
];

const Skills = () => {
  return (
    <div className="container mt-3 mb-3">
      <h2>Familiar With</h2>
      <div className="row">
        {skills.map((skill, index) => (
          <div className="col-md-4" key={index}>
            <SkillBar skill={skill.skill} percentage={skill.percentage} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
