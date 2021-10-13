import React, {Fragment, useState} from 'react';
import '../assets/css/main.css'
import { projects } from "../portfoliodata";
import {UncontrolledTooltip} from 'reactstrap'

function Projects () {
    const [isHovered, setIsHovered] = useState(false);
    const [project, setProject] = useState({});
    function showInfo(component) {
        console.log(component)
        var selectedClass = component.className
        setIsHovered(true);
        var selectedProject
        if(selectedClass === 'project'){
            selectedProject = projects.find(project=>project.id===component.id)
        }else{
            selectedProject = projects.find(project=>project.name===component.getAttribute('name'))
        }
        
        console.log(selectedProject)
        setProject(selectedProject)
    };
    function hideInfo(){
        setIsHovered(false);
    }

    var skillsList = []
    if(project && project.techUsed === undefined){
        skillsList = []
    }else{
        console.log(project.techUsed)
        skillsList = project.techUsed.map((skill) => {
            return <Fragment key={skill.skillName}>
                <div style={{backgroundColor:'white', marginRight:'4px'}} className="icon icon-lg icon-shape shadow rounded-circle mb-5"  id={skill.skillName}>
                    <span  className="iconify" data-icon={skill.fontAwesomeClassname} data-inline="false"></span>
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
    return (
        <div className = "projects-page">
            <div className="projects-wrapper "> 
                <div className= "names-wrapper">
                    {projects.map((project) =>{
                        return <Fragment key={project.name}>
                            <div id={project.id} onMouseEnter={(e)=>showInfo(e.target)} onMouseLeave={hideInfo} className="project">
                                <h6 className="projectheadline" name ={project.name}>{project.name}</h6>
                            </div>
                        </Fragment>
                    })}
                </div>
                <div style={{display: 'table-cell', backgroundColor : '#2d545e'}}>
                    <div style={{opacity : isHovered ? '1' : '0',
                                color : 'white',
                                top : '15vh',
                                width : '50%',
                                margin : '0 auto',
                                height : '70vh',
                                position : 'sticky',
                                zIndex : '1',
                                borderRadius: '86px',
                                background: '#2d545e',
                                padding : '48px 4px 4px 24px',
                                transition: 'all .4s cubic-bezier(0.2, 0.6, 0.2, 1)',
                                boxShadow:  '  14px 14px 28px #203c43,-14px -14px 28px #3a6c79'}}>
                        <p style={{fontSize:"xx-large"}}>{project.name}</p>
                        <p style={{fontSize:"large"}}>{project.desc}</p>
                        {skillsList}
                    </div>
                </div>
                
            </div>
            
        </div>
    );
}

export default Projects;