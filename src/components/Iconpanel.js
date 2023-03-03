import { faFacebookF, faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function IconPanel() {
  return (
    <div className="d-block justify-content-center align-items-center">
      <ul className="list-inline">
        <li className="list-inline-item">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} size="2x" className="text-black m-3" />
          </a>
        </li>
        <li className="list-inline-item">
          <a href="https://github.com/farazabir" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" className="text-black m-3" />
          </a>
        </li>
        <li className="list-inline-item">
          <a href="https://www.instagram.com/farazahamedabir/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" className="text-black m-3" />
          </a>
        </li>
        <li className="list-inline-item">
          <a href="https://www.linkedin.com/in/faraz-ahmed-abir-57167a1ab/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-black m-3" />
          </a>
        </li>
      </ul>
      <div className="text-center">
        <p className="text-black">All rights reserved</p>
      </div>
    </div>
  ); 
}

export default IconPanel;
