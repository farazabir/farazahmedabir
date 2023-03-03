import React from "react";
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import PhotoFrame from "./PhotoFrame";

export default function Header() {
  return (
    <div className="container mt-4">
      <div className=" align-items-center  mb-">
        <PhotoFrame imageSrc="https://avatars.githubusercontent.com/u/62275863?v=4" altText="My photo" />
      </div>
      <h1 >Faraz Ahmed Abir</h1>
      <h5 className="h5 font-weight-light ">
        I make mobile apps and web applications.
      </h5>
      <div className="d-flex justify-content-center align-items-center header-text">
        <h5 className="h5 font-weight-light">
          A full stack indie developer with expertise in Flutter and web development. With 1.8 of experience, I build user-friendly and performant cross-platform mobile apps using Flutter and dynamic web applications using HTML, CSS, JavaScript, Node js and popular front-end frameworks like React. I'm comfortable with a wide range of technologies, including database management and API design. Let's build something great together!
        </h5>
      </div>
    </div>
  );
}
