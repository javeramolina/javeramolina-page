import "../assets/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../assets/css/styles.css"; // Make sure to move custom styles here
import logos from "../assets/images/logo.svg";
import LanguageToggle from './LanguageToggle.tsx';

const About = () => {
  return (
    <>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
        <div className="container">
          <a className="navbar-brand logo-image" href="/">
            <img src={logos} alt="alternative" />
          </a>
          <button
            className="navbar-toggler p-0 border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
          >
          
            
          </button>
          <LanguageToggle />
          <div className="navbar-collapse offcanvas-collapse" id="offcanvasNavbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#header">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">Services</a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdown01"
                  data-bs-toggle="dropdown"
                >
                  Drop
                </a>
                <ul className="dropdown-menu" aria-labelledby="dropdown01">
                  <li><a className="dropdown-item" href="/project">Project Details</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/terms">Terms Conditions</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/privacy">Privacy Policy</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
            <span className="nav-item social-icons">
              <span className="fa-stack">
                <a href="#your-link">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-facebook-f fa-stack-1x"></i>
                </a>
              </span>
              <span className="fa-stack">
                <a href="#your-link">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-twitter fa-stack-1x"></i>
                </a>
              </span>
            </span>
          </div>
        </div>
      </nav>
      <main>
        {
// <!-- About-->
<div id="about" className="basic-1 bg-gray">
    <div className="container">
        <div className="row">
            <div className="col-lg-4">
                <div className="text-container first">
                    <h2>Hi there I'm JVera,</h2>
                    <p>And I love to create beautiful and efficient websites for my customers. I love going through the entire process with the customer from concept, to design and then development and launch</p>
                </div> 
            </div> 
            <div className="col-lg-4">
                <div className="text-container second">
                    <div className="time">2019 - PRESENT</div>
                    <h6>Freelance Web Developer</h6>
                    <p>Working happily on my own web projects</p>
                    <div className="time">2018 - 2019</div>
                    <h6>Lead Web Developer</h6>
                    <p>Beautiful project for a major digital agency</p>
                </div> 
            </div> 
            <div className="col-lg-4">
                <div className="text-container third">
                    <div className="time">2017 - 2018</div>
                    <h6>Senior Web Designer</h6>
                    <p>Inhouse web designer for ecommerce firm</p>
                    <div className="time">2016 - 2017</div>
                    <h6>Junior Web Designer</h6>
                    <p>Junior web designer for small web agency</p>
                </div> 
            </div> 
        </div> 
    </div> 
</div> 




        }
      </main>
    </>
  );
};

export default About;