const Contact = () =>{

    return (
        <div id="contact" className="form-1 bg-gray">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2>Contact details</h2>
                    <p className="p-heading">For any kind of project, feel free to reach out to me. You can contact me directly at  <a className="blue no-line" href="#your-link">javeramolina@gmail.com</a> — or if you prefer, you can also message me on WhatsApp using the button on this page.</p>
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