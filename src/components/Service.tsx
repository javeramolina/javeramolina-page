import "../assets/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../assets/css/styles.css"; // Make sure to move custom styles here


type HeaderProps = {
    nameCreator: string;
    motivationalPhrase: string  
  };
  

const Service = ({ nameCreator,motivationalPhrase }: HeaderProps) => {
  return (
   
    <div id="services" className="basic-2">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2 className="h2-heading">{nameCreator}</h2>
                    <p className="p-heading">{motivationalPhrase}</p>
                </div> 
            </div> 
        </div> 
    </div> 
    

  );
};

export default Service;