import React, {Fragment} from 'react';
import { Container} from '@material-ui/core';
import DisplayLottie from '../Components/DisplayLottie'
import webdev from '../assets/lottie/webdev.json';
import '../assets/css/main.css'
import { Fade } from 'react-reveal'
import { skillsSection } from "../portfoliodata";
import {UncontrolledTooltip} from 'reactstrap'

class Skills extends React.Component {
    render(){
    return (
        <Fade left distance="40px">
                <Container className="text-center my-1 section fixed-bg" maxWidth='md'>
                <h1 className="h1">{skillsSection.title}</h1>
                <p className="lead">{skillsSection.subTitle}</p>
                <div className = "skillsfirstdiv">
                    <div lg="6">
                        <DisplayLottie animationData={webdev} />
                    </div>
                    <div className="skillsiconsdiv">
                        <div className="d-flex justify-content-center flex-wrap mb-5">
                            {
                                skillsSection.softwareSkills.map((skill) => {
                                    return <Fragment key={skill.skillName}>
                                        <div className="icon icon-lg icon-shape shadow rounded-circle mb-5"  id={skill.skillName}>
                                            <span className="iconify" data-icon={skill.fontAwesomeClassname} data-inline="false"></span>
                                        </div>
                                        <UncontrolledTooltip
                                            delay={0}
                                            placement="bottom"
                                            target={skill.skillName}
                                            >
                                            {skill.skillName}
                                        </UncontrolledTooltip>
                                    </Fragment>
                                })
                            }
                        </div>
                        <div>
                            {
                                skillsSection.skills.map(skill => {
                                    return <p key={skill}>{skill}</p>
                                })
                            }
                        </div>
                    </div>
                </div>
                </Container>
        </Fade>
        
     );
    }
}
 
export default Skills;