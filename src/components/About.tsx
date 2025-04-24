import "../assets/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import LanguageToggle from './LanguageToggle.tsx';
import WhatsAppButton from './WhatAppButton.tsx';

const About = () => {
  return (
    <>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
        <div className="container">               
          <LanguageToggle />
          <WhatsAppButton/>          
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
                    <p>Every great project starts with a simple idea and the courage to act. If you’ve got one, let’s connect and make it happen</p>
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