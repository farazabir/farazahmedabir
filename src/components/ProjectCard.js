import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";




const ProjectCard = (props) => {
  const gotoWebsite = () =>   window.location.href=props.link;
  return (
    <div onClick={gotoWebsite} className="card bg-custom-1">
    
     <img src={props.src} className="img-fluid" alt="..." />
    
      <div className="card-body bg-custom-1">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <div className='d-flex justify-content-start'>
        <p  className="lanbtn m-1 p-1">{props.buttonText1}</p>
        <p  className="lanbtn m-1 p-1">{props.buttonText2}</p>
        <p  className="lanbtn m-1 p-1">{props.buttonText3}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
