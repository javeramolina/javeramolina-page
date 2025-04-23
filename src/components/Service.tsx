import "../assets/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../assets/css/styles.css"; // Make sure to move custom styles here


const Service = () => {
  return (
   
    <div id="services" className="basic-2">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2 className="h2-heading">Offered services</h2>
                    <p className="p-heading">Web design and development have been my bread and butter for more than 5 years. During that time I've discovered that I can help startups and companies with the following services</p>
                </div> 
            </div> 
            <div className="row">
                <div className="col-lg-4">
                    <div className="text-box">
                        <i className="far fa-gem"></i>
                        <h4>DESIGN</h4>
                        <p>Successful online projects start with good design. It establishes a solid foundation for future development and allows for long term growth</p>
                    </div>
                </div> 
                <div className="col-lg-4">
                    <div className="text-box">
                        <i className="fas fa-code"></i>
                        <h4>DEVELOPMENT</h4>
                        <p>I can code my own designs or even use the customer's design as base. My focus is to generate clean code that's well structured for reliability</p>
                    </div> 
                </div> 
                <div className="col-lg-4">
                    <div className="text-box">
                        <i className="fas fa-tv"></i>
                        <h4>BASIC SEO</h4>
                        <p>i can setup your project to use basic SEO principles which will push your project to the first page on search engines and save you ads money</p>
                    </div> 
                </div> 
            </div> 
        </div> 
    </div> 
    

  );
};

export default Service;