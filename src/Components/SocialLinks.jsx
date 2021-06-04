import React from 'react';

import {  Button } from "reactstrap";

import {socialLinks} from "../portfoliodata";
import '../assets/css/main.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";

const SocialLinks = () => {
    return ( 
        <div className="btn-wrapper text-lg">
          <Button
            className="btn-icon-only rounded-circle ml-1"
            color="facebook"
            href={socialLinks.facebook}
            target="_blank"
          >
            <span className="btn-inner--icon">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
            </span>
          </Button>
          <Button
            className="btn-icon-only rounded-circle ml-1"
            color="instagram"
            href={socialLinks.instagram}
            target="_blank"
          >
            <span className="btn-inner--icon">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            </span>
          </Button>
          <Button
            className="btn-icon-only rounded-circle ml-1"
            color="github"
            href={socialLinks.github}
            target="_blank"
          >
            <span className="btn-inner--icon">
            <FontAwesomeIcon icon={faGithub} size="2x" />
            </span>
          </Button>
          <Button
            className="btn-icon-only rounded-circle ml-1"
            color="twitter"
            href={socialLinks.linkedin}
            target="_blank"
          >
            <span className="btn-inner--icon">
            <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
            </span>
          </Button>
        </div>
     );
}
 
export default SocialLinks;