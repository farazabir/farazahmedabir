import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import p1 from '../images/p1.png';
import p2 from '../images/p2.png';
import p3 from '../images/p3.png';
import p4 from '../images/p4.png';
import p5 from '../images/p5.png';
import ProjectCard from "./ProjectCard";

const cardData = {
  cards: [
    {
      imageSrc:p1,
      link:"https://github.com/farazabir/Flutter-Expense-Tracker-GoogleSheet",
      title: "Expense Tracker Using Google Sheet Api",
      description: "Track expenses with flutter using  google sheet api",
      buttonText1: "Flutter",
      buttonText2: "Dart",
      buttonText3: "Google Sheet Api",
    },
    {
      imageSrc:p2,
      link:"https://github.com/farazabir",
      title: "Typing speed test",
      description: "User can test his typing speed per minute in this web app",
      buttonText1: "React",
      buttonText2: "Word api",
      buttonText3: "Web App",
    },
    {
      imageSrc:p6,
      link:"https://github.com/farazabir/Chatty-Hive-Flutter-Firebase",
      title: "Chatty Hive",
      description: "A Group Chat App Using Flutter",
      buttonText1: "Flutter",
      buttonText2: "Dart",
      buttonText3: "Firebase",
    },
    {
      imageSrc:p3,
      link:"https://github.com/farazabir",
      title: "React Cinema",
      description: "Get movie data from API",
      buttonText1: "React",
      buttonText2: "API",
      buttonText3: "Web App",
    },
    {
      imageSrc:p4,
      link:"https://github.com/farazabir/Square_Rush",
      title: "Square Rush",
      description: "A hyper Casual Mobile Game",
      buttonText1: "Unity",
      buttonText2: "Mobile Game",
      buttonText3: "C#",
    },
    {
      imageSrc:p5,
      link:"https://github.com/farazabir",
      title: "Tap At",
      description: "A hyper Casual Mobile Game",
      buttonText1: "Unity",
      buttonText2: "Mobile Game",
      buttonText3: "C#",
    },
 

    
  ],
};

export default function Projects() {
  return (
    <div className="container mt-3 mb-3">
      <div className="row">
        {cardData.cards.map((card) => (
          <div className="col-sm-6 mt-4 col-md-4">
            <ProjectCard
            link={card.link}
              src={card.imageSrc}
              title={card.title}
              description={card.description}
              buttonText1={card.buttonText1}
              buttonText2={card.buttonText2}
              buttonText3={card.buttonText3}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
