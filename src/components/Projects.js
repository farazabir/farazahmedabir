import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectCard from "./ProjectCard";



export default function Projects() {
  

  const cardData = {
    cards: [
      {
        imageSrc:"https://github.com/farazabir/ai-robo-advisor/assets/62275863/041f7177-0d35-48a2-af03-6ca2288ace91",
        link:"https://github.com/farazabir/ai-robo-advisor",
        title: "AI Robo Advisor",
        description: "A Django-based AI Robo Advisor leveraging OpenAI to provide personalized investment strategies and financial advice tailored to user inputs and preferences.",
        buttonText1: "Python",
        buttonText2: "Javascipt",
        buttonText3: "Docker",
      },
      {
        imageSrc:"https://github.com/farazabir/movie-recommender/assets/62275863/70b3416b-7c2a-4748-b0d4-9ecd06469c2a",
        link:"https://github.com/farazabir",
        title: "Movie Recommendation System",
        description: "This project is a movie recommendation system built with Streamlit, leveraging the TMDB 5000 Movies dataset. It recommends movies based on user preferences through a technique combining collaborative filtering and word vectorization. The system analyzes user ratings and movie metadata to generate personalized movie suggestions. By utilizing word vectorization, the system effectively captures the semantics of movie descriptions, enhancing the accuracy of recommendations.",
        buttonText1: "Python",
        buttonText2: "Numpy",
        buttonText3: "Docker",
      },
      {
        imageSrc:"https://github.com/farazabir/next-short/assets/62275863/cadf1dde-060f-4e6e-8a24-473ee30f7059",
        link:"https://github.com/farazabir/next-short",
        title: "Next Short Chrome Extension",
        description: "Next Short is a Chrome extension designed to enhance your YouTube Shorts viewing experience by automatically navigating to the next short video. It eliminates the need for manual interaction, providing a seamless and continuous viewing experience of YouTube Shorts.",
        buttonText1: "JavaScript",
        buttonText2: "Chrome Extension",
      },
      {
        imageSrc:"https://user-images.githubusercontent.com/62275863/233622999-03abcff1-bd96-421e-9b88-7efdafc12ab0.png",
        link:"https://github.com/farazabir/Chatty-Hive-Flutter-Firebase",
        title: "Chatty Hive",
        description: "Chatty Hive is a real-time chat application built using Flutter and Firebase. The app allows users to send and receive messages in real-time, and was designed with user privacy and security in mind.",
        buttonText1: "Flutter",
        buttonText2: "Dart",
        buttonText3: "Firebase",
      },
      {
        imageSrc:"https://github.com/farazabir/Flutter-Expense-Tracker-GoogleSheet/assets/62275863/1ec913c6-d376-4f56-8f64-85c2b9199e29",
        link:"https://github.com/farazabir/Flutter-Expense-Tracker-GoogleSheet",
        title: "Expense Tracker",
        description: " Track your expesnses with flutter and google sheet api",
        buttonText1: "Flutter",
        buttonText2: "Google Sheet Api",
      },
      {
        imageSrc:"https://github.com/farazabir/reactCinema/assets/62275863/ed81bf1b-d51e-421a-8dfb-160c400b1c55",
        link:"https://farazabir.github.io/reactCinema/",
        title: "Cinema",
        description: "Movie app frontend using react js ",
        buttonText1: "React js",
        buttonText2: "Api Handling",
      },
      {
        imageSrc:"https://user-images.githubusercontent.com/62275863/188281519-880f3662-2340-4466-b7d7-57beaa440dc5.png",
        link:"https://farazabir.github.io/Typing-Speed-Test-Reactjs/",
        title: "Typing Speed Test",
        description: "Typing speed test game using react js ",
        buttonText1: "React js",
      },
    ],
  };



  return (
    <div className="container mt-3 mb-3">
      <div className="row">
      {cardData.cards.map((card,index) => (
          <div key={index} className="col-sm-6 mt-4 col-md-4">
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
