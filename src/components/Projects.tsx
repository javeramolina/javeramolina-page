import project2 from "../assets/images/project-2.jpg";
import project3 from "../assets/images/project-3.jpg";

type HeaderProps = {
    projectTitle: string;
    projectText: string ;
    byFor: string;
    project1Text: string; 
    project2Text: string;
    detailText: string;
    projectNameText: string;
  };


const Projects = ({projectTitle, projectText, byFor, project1Text, project2Text, detailText, projectNameText}:HeaderProps) => {

    return (
        <div id="projects" className="basic-3">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2 className="h2-heading">{projectTitle}</h2>
                    <p className="p-heading">{projectText}</p>
                </div> 
            </div> 
            <div className="row">
                <div className="col-lg-12">
                  
                    <div className="text-container">
                        <div className="image-container">
                            <a href="project.html">
                                <img className="img-fluid" src={project2} alt="alternative"></img>
                            </a>
                        </div> 
                        <p><strong>{byFor}:</strong> jvera, <strong>{projectNameText}:</strong> {project1Text} <a className="blue" href="project.html">{detailText}</a></p>
                    </div> 
                    <div className="text-container">
                        <div className="image-container">
                            <a href="project.html">
                                <img className="img-fluid" src={project3} alt="alternative"></img>
                            </a>
                        </div> 
                        <p><strong>{byFor}:</strong> jvera, <strong>{projectNameText}:</strong> {project2Text} <a className="blue" href="project.html">{detailText}</a></p>
                    </div>  
                </div> 
            </div> 
        </div> 
    </div> 
    
        
    );
};

export default Projects;