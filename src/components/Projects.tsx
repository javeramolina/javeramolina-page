import project1 from "../assets/images/project-1.jpg";
import project2 from "../assets/images/project-2.jpg";
import project3 from "../assets/images/project-3.jpg";
import project4 from "../assets/images/project-4.jpg";

const Projects = () => {

    return (
        <div id="projects" className="basic-3">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2 className="h2-heading">Delivered projects</h2>
                    <p className="p-heading">Listed below are some of the most representative projects I've worked on. They range from basic web design for presentation sites to advanced web development for online shops</p>
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
                        <p><strong>For:</strong> Carsrepo, <strong>Project:</strong> designed and developed modern platform for purchasing second hand cars online <a className="blue" href="project.html">details</a></p>
                    </div> 
                    <div className="text-container">
                        <div className="image-container">
                            <a href="project.html">
                                <img className="img-fluid" src={project3} alt="alternative"></img>
                            </a>
                        </div> 
                        <p><strong>For:</strong> Truevideo, <strong>Project:</strong> created a custom video editing and upload web app for this awesome team <a className="blue" href="project.html">details</a></p>
                    </div>  
                </div> 
            </div> 
        </div> 
    </div> 
    
        
    );
};

export default Projects;