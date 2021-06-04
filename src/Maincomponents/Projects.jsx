import React, {Fragment} from 'react';
import '../assets/css/main.css'
import { projects } from "../portfoliodata";

class Projects extends React.Component {
    constructor(){
        super();
        this.state = {
            ishovered : false,
            projectinfo : {}
        }
        this.showInfo = this.showInfo.bind(this);
        this.hideInfo = this.hideInfo.bind(this);
    }
    showInfo(project){
        this.setState = ({
            ishovered : true,
            projectinfo : project
        })
        console.log(this.state.projectinfo)
    }
    hideInfo() {
        this.setState=({ishovered : false})
        console.log(this.state.ishovered)
    }
    render() {
        
        return (
            <div className = "">
                <div className="projects-wrapper"> 
                    <div className= "names-wrapper">
                        <div>
                            {projects.map((project) =>{
                                return <Fragment key={project.name}>
                                    <div onMouseEnter={this.showInfo(project)} onMouseLeave={this.hideInfo} className="project">
                                        <h3 className="projectheadline">{project.name}</h3>
                                        <p className="projectshortdesc">{project.shortDesc}</p>
                                    </div>
                                </Fragment>
                            })}
                            {this.state.ishovered && (
                                <div>
                                    <h1>I'll appear when you hover over the button.</h1>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Projects;