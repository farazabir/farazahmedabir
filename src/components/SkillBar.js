import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

const SkillBar = ({ skill, percentage }) => {
  return (
    <div className="skill-bar">
      <h4>{skill}</h4>
      <ProgressBar now={percentage} label={`${percentage}%`} />
    </div>
  );
};

export default SkillBar;
