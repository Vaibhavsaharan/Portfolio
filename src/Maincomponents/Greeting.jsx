import React from 'react'
import { Fade } from 'react-reveal'
import {Button, Box, Container} from '@material-ui/core';
import GreetingLottie from "../Components/DisplayLottie";
import SocialLinks from "../Components/SocialLinks";
import '../assets/css/main.css'
import {greetings} from '../portfoliodata'
import code from '../assets/lottie/coding.json';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";

function Greeting() {
  return (
    <Fade top duration={1000} distance="40px">
        <Box >       
            <section className="section section-lg section-shaped pb-250" style={{height: '100vh'}}>
                <div style={{backgroundColor:"rgb(171 192 251)"}} className="shape shape-style-1">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    </div>
                    <Container className="py-lg-md d-flex">
                    <div className="col px-0">
                        <div className = "greetingfirstdiv">
                            <div className="greetingmain1">
                                <Fade up>
                                    <h1 className="display-3 text-white">
                                        {greetings.title + " "}
                                    </h1>
                                    <p className="lead text-white">{greetings.description}</p>
                                </Fade>
                                
                                <SocialLinks /> 
                                <div className="btn-wrapper my-4">
                                <Button
                                    className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                                    color="default"
                                    href={greetings.resumeLink}
                                >
                                    <span className="btn-inner--icon mr-1">
                                    <FontAwesomeIcon icon={faFilePdf} size="2x" />
                                    </span>
                                    <span className="btn-inner--text">
                                    See My Resume
                                    </span>
                                </Button>
                            </div>
                        </div>
                        <div className="greetingmain2">
                            <GreetingLottie animationData={code}/>
                        </div>
                    </div>
                </div>
                </Container>
                {/* SVG separator */}
                <div className="separator separator-bottom separator-skew">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    x="0"
                    y="0"
                >
                    <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                    />
                </svg>
                </div>
            </section>
        </Box>
    </Fade>
    
  );
}

export default Greeting;
