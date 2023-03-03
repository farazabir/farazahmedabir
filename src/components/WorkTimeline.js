import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function TimelineItem({ year, title, duration, details }) {
    return (
      <li className="timeline-item">
        <div className="timeline-item-content m-5">
          <h3 className="timeline-year mt-3">{year}</h3>
          <h3 className="title ">{title}</h3>
          <h4 className="duration">{duration}</h4>
          <h5 className="details">{details}</h5>
        </div>
      </li>
    )
  }
  
  function WorkTimeline() {
    const experienceData = [
      {
        year: '2022 - Today',
      title: 'Mobile App Development With Flutter',
      duration: '1.8 years',
      details: 'Developed Vairous Mobile apps',
      },
      {
        year: '2021 - 2022',
        title: 'Full Stack Web Development',
        duration: '8 months',
        details: 'Start Learning Web Development',
      },
      {
        year: '2020 - 2021',
        title: 'Unity Game Development',
        duration: '10 months',
        details: 'Developed games using Unity engine and C #',
      },
      {
        year: "2020-2021",
        title: "C and C++",
        details: "Problem Solving With C and C++",
      },
      {
        year: "2020",
        title: "First Line Of Code",
        details: "In 2020 I got my first laptop.",
      },
    ];
  
    return (
      <div className="d-flex justify-content-center">
        <ul className="timeline">
            <h1 className="mt-3 mb-2">Timeline</h1>
          {experienceData.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </ul>
      </div>
    );
  }
  


export default WorkTimeline;