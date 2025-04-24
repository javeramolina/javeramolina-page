type HeaderProps = {
    whyMeTitle: string;
    whyMeText: string ;
    developSkillsTitle: string;
    developSkillsText: string; 
  };


const WhyWorkWithMe = ({ whyMeTitle, whyMeText, developSkillsTitle, developSkillsText }: HeaderProps) => {

    return (

        <div className="split">
		<div className="area-1">
		</div>
        <div className="area-2 bg-gray">
            <div className="container">    
                <div className="row">
                    <div className="col-lg-12"> 
                        <div className="text-container">
                            <h2>{whyMeTitle}</h2>
                            <p>{whyMeText}</p>
                         
                            <h5>{developSkillsTitle}</h5> 
                            <p>{developSkillsText}</p>
                            
                        </div> 
                    </div> 
                </div> 
            </div> 
		</div> 
    </div> 

    );

};

export default WhyWorkWithMe;