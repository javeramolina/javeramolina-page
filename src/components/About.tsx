import "../assets/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import LanguageToggle from './LanguageToggle.tsx';
import WhatsAppButton from './WhatAppButton.tsx';


type HeaderProps = {
  hiThereTitle: string;
  hiThereText: string ;
};

const About = ({hiThereTitle, hiThereText}:HeaderProps) => {
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
                    <h2>{hiThereTitle}</h2>
                    <p>{hiThereText}</p>
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