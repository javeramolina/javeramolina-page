type HeaderProps = {
    contactTitle: string;
    contactStartText: string ;
    contactEndText: string;
    nameText: string;
    projectDetailsText: string;
    buttonSubmitText: string;

  };
const Contact = ({contactTitle, contactStartText, contactEndText, nameText, projectDetailsText, buttonSubmitText}: HeaderProps) =>{

    return (
        <div id="contact" className="form-1 bg-gray">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2>{contactTitle}</h2>
                    <p className="p-heading">{contactStartText}  <a className="blue no-line" href="#your-link">javeramolina@gmail.com</a> — {contactEndText}</p>
                </div> 
            </div> 
            <div className="row">
                <div className="col-lg-12">
                    
                   
                    <form id="contactForm">
                        <div className="form-group">
                            <input type="text" className="form-control-input" id="cname" required></input>
                            <label className="label-control" htmlFor="cname">{nameText}</label>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control-input" id="cemail" required></input>
                            <label className="label-control" htmlFor="cemail">Email</label>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control-textarea" id="cmessage" required></textarea>
                            <label className="label-control" htmlFor="cmessage">{projectDetailsText}</label>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="form-control-submit-button">{buttonSubmitText}</button>
                        </div>
                    </form>                 

                </div> 
            </div>
        </div> 
    </div>
    );

};

export default Contact;