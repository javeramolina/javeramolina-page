const Contact = () =>{

    return (
        <div id="contact" className="form-1 bg-gray">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2>Contact details</h2>
                    <p className="p-heading">For any type of online project please don't hesitate to get in touch with me. The fastest way is to send me your message using the following email <a className="blue no-line" href="#your-link">contact@domain.com</a></p>
                </div> 
            </div> 
            <div className="row">
                <div className="col-lg-12">
                    
                   
                    <form id="contactForm">
                        <div className="form-group">
                            <input type="text" className="form-control-input" id="cname" required></input>
                            <label className="label-control" htmlFor="cname">Name</label>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control-input" id="cemail" required></input>
                            <label className="label-control" htmlFor="cemail">Email</label>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control-textarea" id="cmessage" required></textarea>
                            <label className="label-control" htmlFor="cmessage">Project details</label>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="form-control-submit-button">Submit</button>
                        </div>
                    </form>                 

                </div> 
            </div>
        </div> 
    </div>
    );

};

export default Contact;